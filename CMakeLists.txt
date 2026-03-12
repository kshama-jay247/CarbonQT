# cmake_minimum_required(VERSION 3.16)
# project(frontend LANGUAGES CXX)

# set(CMAKE_CXX_STANDARD 17)
# set(CMAKE_CXX_STANDARD_REQUIRED ON)

# set(CMAKE_AUTOMOC ON)
# set(CMAKE_AUTORCC ON)
# set(CMAKE_AUTOUIC ON)

# find_package(Qt6 REQUIRED COMPONENTS Quick)

# add_executable(appMyApp
#     main.cpp

#     backend/src/SystemMonitor.cpp
#     backend/src/ProcessTracker.cpp
#     backend/src/EnergyEstimator.cpp
#     backend/src/ContextSwitchAnalyzer.cpp
#     backend/src/DataLogger.cpp

#     qtbridge/MonitorController.cpp
#     qtbridge/ProcessModel.cpp
#     qtbridge/EnergyController.cpp
# )

# target_include_directories(appMyApp PRIVATE
#     backend/include
#     backend/src
#     qtbridge
# )

# qt_add_qml_module(appMyApp
#     URI MyApp
#     VERSION 1.0
#     RESOURCE_PREFIX /qt/qml

#     QML_FILES
#         Main.qml
#         pages/Dashboard.qml
#         pages/Processes.qml
#         pages/EnergyEstimator.qml
#         components/SidebarButton.qml
#         components/StatCard.qml
#         QML_FILES components/TableHeader.qml
#     RESOURCES
#         assets/logo.png
#         assets/icons/refresh.svg
#         QML_FILES components/RingChart.qml
#         QML_FILES components/Theme.qml
#         QML_FILES components/PidThreadsChart.qml
#         QML_FILES components/DoughnutStat.qml
# )

# target_link_libraries(appMyApp
#     PRIVATE Qt6::Quick sqlite3
# )


cmake_minimum_required(VERSION 3.16)

project(CarbonQT LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

find_package(Qt6 REQUIRED COMPONENTS Quick)
find_package(SQLite3 REQUIRED)

set(BACKEND_SOURCES
    backend/src/SystemMonitor.cpp
    backend/src/ProcessTracker.cpp
    backend/src/EnergyEstimator.cpp
    backend/src/ContextSwitchAnalyzer.cpp
    backend/src/DataLogger.cpp
)

set(BACKEND_HEADERS
    backend/include/SystemMonitor.h
    backend/include/ProcessTracker.h
    backend/include/EnergyEstimator.h
)

add_executable(appCarbonQt
    main.cpp

    qtbridge/MonitorController.cpp
    qtbridge/ProcessModel.cpp
    qtbridge/EnergyController.cpp

    ${BACKEND_SOURCES}
)

target_include_directories(appCarbonQt PRIVATE
    backend/include
    backend/src
    qtbridge
)

qt_add_qml_module(appCarbonQt
    URI MyApp
    VERSION 1.0
    RESOURCE_PREFIX /qt/qml

    QML_FILES
        Main.qml
        pages/Dashboard.qml
        pages/Processes.qml
        pages/EnergyEstimator.qml

        components/SidebarButton.qml
        components/StatCard.qml
        components/TableHeader.qml
        components/RingChart.qml
        components/Theme.qml
        components/DoughnutStat.qml
        components/PidThreadsChart.qml

    RESOURCES
        assets/logo.png
        assets/icons/refresh.svg
)

target_link_libraries(appCarbonQt PRIVATE
    Qt6::Quick sqlite3
)

add_executable(carbonqt
    cli/cli.cpp
    ${BACKEND_SOURCES}
)

target_include_directories(carbonqt PRIVATE
    backend/include
    backend/src
)

target_link_libraries(appCarbonQt PRIVATE Qt6::Quick SQLite::SQLite3)
target_link_libraries(carbonqt PRIVATE SQLite::SQLite3 pthread)

install(TARGETS carbonqt
        RUNTIME DESTINATION /usr/local/bin)
