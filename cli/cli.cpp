#include <iostream>
#include <string>
#include <thread>
#include <chrono>
#include "../backend/include/SystemMonitor.h"
#include "../backend/include/ProcessTracker.h"

void showHelp()
{
    std::cout << "CarbonQt CLI\n\n";
    std::cout << "Usage:\n";
    std::cout << "  carbonqt run <seconds>\n";
    std::cout << "  carbonqt status\n";
    std::cout << "  carbonqt help\n";
}

double getAverageCpuUsage()
{
    auto cores = SystemMonitor::getCpuUsagePerCore();
    if (cores.empty())
        return 0;
    double sum = 0;
    for (double c : cores)
        sum += c;
    return sum / cores.size();
}

void runMonitoring(int seconds)
{
    std::cout << "Running monitoring for " << seconds << " seconds...\n";

    for(int i = 0; i < seconds; i++)
    {
        double cpu = getAverageCpuUsage();
        double ram = SystemMonitor::getRamUsage();

        auto processes = ProcessTracker::collectProcesses();

        std::cout << "CPU: " << cpu << "%  ";
        std::cout << "RAM: " << ram << "%  ";
        std::cout << "Processes: " << processes.size() << "\n";

        std::this_thread::sleep_for(std::chrono::seconds(1));
    }

    std::cout << "Monitoring finished.\n";
}

void showStatus()
{
    double cpu = getAverageCpuUsage();
    double ram = SystemMonitor::getRamUsage();
    auto processes = ProcessTracker::collectProcesses();

    int totalThreads = 0;
    for(const auto &p : processes)
        totalThreads += p.threads;

    std::cout << "System Status\n";
    std::cout << "-------------\n";
    std::cout << "CPU Usage: " << cpu << "%\n";
    std::cout << "RAM Usage: " << ram << "%\n";
    std::cout << "Processes: " << processes.size() << "\n";
    std::cout << "Threads: " << totalThreads << "\n";
}

int main(int argc, char* argv[])
{
    if(argc < 2)
    {
        showHelp();
        return 0;
    }

    std::string command = argv[1];

    if(command == "run")
    {
        if(argc < 3)
        {
            std::cerr << "Error: run requires number of seconds\n";
            return 1;
        }
        int seconds = std::stoi(argv[2]);
        runMonitoring(seconds);
    }
    else if(command == "status")
    {
        showStatus();
    }
    else if(command == "help")
    {
        showHelp();
    }
    else
    {
        std::cerr << "Unknown command: " << command << "\n";
        showHelp();
    }

    return 0;
}