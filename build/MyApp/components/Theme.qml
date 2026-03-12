pragma Singleton
import QtQuick 2.15

QtObject {

    // mode state
    property bool darkMode: false

    // LIGHT MODE COLORS
    readonly property color light_background: "#F5F7F6"
    readonly property color light_card: "#FFFFFF"
    readonly property color light_sidebar: "#1F3D2B"
    readonly property color light_primary: "#2E7D32"
    readonly property color light_text: "#1A1A1A"
    readonly property color light_textSecondary: "#6B7280"
    readonly property color light_border: "#E5E7EB"

    // DARK MODE COLORS
    readonly property color dark_background: "#121212"
    readonly property color dark_card: "#1E1E1E"
    readonly property color dark_sidebar: "#0D1F17"
    readonly property color dark_primary: "#4CAF50"
    readonly property color dark_text: "#EAEAEA"
    readonly property color dark_textSecondary: "#9CA3AF"
    readonly property color dark_border: "#2A2A2A"

    // ACTIVE COLORS
    property color background: darkMode ? dark_background : light_background
    property color card: darkMode ? dark_card : light_card
    property color sidebar: darkMode ? dark_sidebar : light_sidebar
    property color primary: darkMode ? dark_primary : light_primary
    property color text: darkMode ? dark_text : light_text
    property color textSecondary: darkMode ? dark_textSecondary : light_textSecondary
    property color border: darkMode ? dark_border : light_border

    function toggleDarkMode() {
        darkMode = !darkMode
    }
}
