import React from 'react'
import Layout from './components/layout/index'

import './App.css'

function App () {
  return (
    <div className='main'>
      <Layout>
        <p>Hallo</p>
      </Layout>
    </div>
  )
}

export default App


/*
{
  "editor.fontSize": 13,
  "editor.tabSize": 2,
  "javascript.validate.enable": false,
  "standard.enable": true,
  "standard.autoFixOnSave": true,
  // "editor.formatOnSave": true,
  // "eslint.format.enable": true,
  "standard.validate": [
    "javascript",
    "javascriptreact",
    {
      "autoFix": false
    }
  ],
  "standard.run": "onSave",
  "git.path": "C:\\Users\\m.gruntzdorff\\Downloads\\cmder\\vendor\\git-for-windows\\mingw64\\libexec\\git-core\\git.exe",
  "eslint.alwaysShowStatus": true,
  "eslint.run": "onType",
  "peacock.favoriteColors": [
    {
      "name": "Angular Red",
      "value": "#b52e31"
    },
    {
      "name": "Auth0 Orange",
      "value": "#eb5424"
    },
    {
      "name": "Azure Blue",
      "value": "#007fff"
    },
    {
      "name": "C# Purple",
      "value": "#68217A"
    },
    {
      "name": "Gatsby Purple",
      "value": "#639"
    },
    {
      "name": "Go Cyan",
      "value": "#5dc9e2"
    },
    {
      "name": "Java Blue-Gray",
      "value": "#557c9b"
    },
    {
      "name": "JavaScript Yellow",
      "value": "#f9e64f"
    },
    {
      "name": "Mandalorian Blue",
      "value": "#1857a4"
    },
    {
      "name": "Node Green",
      "value": "#215732"
    },
    {
      "name": "React Blue",
      "value": "#00b3e6"
    },
    {
      "name": "Something Different",
      "value": "#832561"
    },
    {
      "name": "Vue Green",
      "value": "#42b883"
    }
  ],
  "gitlens.gitExplorer.enabled": true,
  "gitlens.statusBar.enabled": true,
  "gitlens.currentLine.enabled": true,
  "gitlens.hovers.annotations.enabled": true,
  "gitlens.codeLens.enabled": true,
  "workbench.colorTheme": "One Monokai",
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
  "prettier.semi": false,
  "window.zoomLevel": 1,
  "workbench.iconTheme": "vscode-great-icons",
  "material-icon-theme.activeIconPack": "react",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "never",
  // "javascript.updateImportsOnFileMove.enabled": "always",
}
*/