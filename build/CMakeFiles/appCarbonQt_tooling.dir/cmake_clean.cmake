file(REMOVE_RECURSE
  "MyApp/Main.qml"
  "MyApp/assets/icons/refresh.svg"
  "MyApp/assets/logo.png"
  "MyApp/components/DoughnutStat.qml"
  "MyApp/components/PidThreadsChart.qml"
  "MyApp/components/RingChart.qml"
  "MyApp/components/SidebarButton.qml"
  "MyApp/components/StatCard.qml"
  "MyApp/components/TableHeader.qml"
  "MyApp/components/Theme.qml"
  "MyApp/pages/Dashboard.qml"
  "MyApp/pages/EnergyEstimator.qml"
  "MyApp/pages/Processes.qml"
)

# Per-language clean rules from dependency scanning.
foreach(lang )
  include(CMakeFiles/appCarbonQt_tooling.dir/cmake_clean_${lang}.cmake OPTIONAL)
endforeach()
