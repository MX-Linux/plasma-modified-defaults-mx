var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

panel.height = gridUnit * 2

var kicker = panel.addWidget("org.kde.plasma.kicker")
kicker.currentConfigGroup = ["Shortcuts"]
kicker.writeConfig("global", "Alt+F1")

//panel.addWidget("org.kde.plasma.showActivityManager")
panel.addWidget("org.kde.plasma.pager")
//var systemsettingsicon = panel.addWidget("org.kde.plasma.icon")
//systemsettingsicon.currentConfigGroup = ["Configuration"]
//systemsettingsicon.writeConfig("url", "file:///usr/share/applications/systemsettings.desktop")
//var dolphinicon = panel.addWidget("org.kde.plasma.icon")
//dolphinicon.currentConfigGroup = ["Configuration"]
//dolphinicon.writeConfig("url", "file:///usr/share/applications/org.kde.dolphin.desktop")
//var firefoxicon = panel.addWidget("org.kde.plasma.icon")
//firefoxicon.currentConfigGroup = ["Configuration"]
//firefoxicon.writeConfig("url", "file:///usr/share/applications/firefox.desktop")

panel.addWidget("org.kde.plasma.taskmanager")

/* Next up is determining whether to add the Input Method Panel
 * widget to the panel or not. This is done based on whether
 * the system locale's language id is a member of the following
 * white list of languages which are known to pull in one of
 * our supported IME backends when chosen during installation
 * of common distributions. */

var langIds = ["as",    // Assamese
               "bn",    // Bengali
               "bo",    // Tibetan
               "brx",   // Bodo
               "doi",   // Dogri
               "gu",    // Gujarati
               "hi",    // Hindi
               "ja",    // Japanese
               "kn",    // Kannada
               "ko",    // Korean
               "kok",   // Konkani
               "ks",    // Kashmiri
               "lep",   // Lepcha
               "mai",   // Maithili
               "ml",    // Malayalam
               "mni",   // Manipuri
               "mr",    // Marathi
               "ne",    // Nepali
               "or",    // Odia
               "pa",    // Punjabi
               "sa",    // Sanskrit
               "sat",   // Santali
               "sd",    // Sindhi
               "si",    // Sinhala
               "ta",    // Tamil
               "te",    // Telugu
               "th",    // Thai
               "ur",    // Urdu
               "vi",    // Vietnamese
               "zh_CN", // Simplified Chinese
               "zh_TW"] // Traditional Chinese

if (langIds.indexOf(languageId) != -1) {
    panel.addWidget("org.kde.plasma.kimpanel");
}
panel.addWidget("org.kde.plasma.systemloadviewer")
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.digitalclock")

