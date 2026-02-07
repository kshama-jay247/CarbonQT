#pragma once
#include <QObject>
#include <QVector>

class MonitorController : public QObject {
    Q_OBJECT

    Q_PROPERTY(double cpuUsage READ cpuUsage NOTIFY dataChanged)
    Q_PROPERTY(int coreCount READ coreCount NOTIFY dataChanged)
    Q_PROPERTY(double memoryUsed READ memoryUsed NOTIFY dataChanged)

public:
    explicit MonitorController(QObject *parent = nullptr);

    double cpuUsage() const;
    int coreCount() const;
    double memoryUsed() const;

signals:
    void dataChanged();
};
