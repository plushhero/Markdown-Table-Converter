# Markdown Table Converter

[EN](README.md) | [RU](README.ru.md)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.md-table-conv)
[![VS Code](https://img.shields.io/badge/vscode-^1.85.0-brightgreen.svg)](https://code.visualstudio.com/)

**Markdown Table Converter** is a VS Code extension that quickly converts delimited text (such as CSV or semicolon-delimited text) into a formatted Markdown table.

## Features

- Automatic column alignment
- Preserve Markdown formatting

## Usage example

**Source text:**

``` plain
Name;Age;City;
Anna;25;Moscow;
Ivan;30;Saint Petersburg;
Maria;28;Kyiv;
````

**Result (Markdown table):**
```markdown
|Name |Age|City            |
|-----|---|----------------|
|Anna |25 |Moscow          |
|Ivan |30 |Saint Petersburg|
|Maria|28 |Kyiv            |
```

## Installation
### From the VS Code Marketplace

1. Open VS Code
2. Press Ctrl+Shift+X (or Cmd+Shift+X on Mac) to open extensions
3. Find MD Table Converter
4. Click "Install"

### From a .vsix file
```shell
code --install-extension md-table-conv-1.0.0.vsix
```
## Usage
### Via command

1. Select the text you want to convert
2. Open the command palette (Ctrl+Shift+P or Cmd+Shift+P)
3. Type Convert to Markdown Table
4. Press Enter

### Hotkey

- Windows/Linux: Ctrl+Shift+/
- macOS: Cmd+Shift+/

## If you have any problems or questions:

- Create an Issue
- Contact Email: plush_hero@live.ru

⭐ Did you like the extension? Give it a star on [GitHub]()!