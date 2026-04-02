# Markdown Table Converter

[EN](README.md) | [RU](README.ru.md)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.md-table-conv)
[![VS Code](https://img.shields.io/badge/vscode-^1.85.0-brightgreen.svg)](https://code.visualstudio.com/)

**Markdown Table Converter** — это расширение для VS Code, которое быстро преобразует текст с разделителями (например, CSV или текст с точкой с запятой) в форматированную Markdown таблицу.

## Возможности

- Автоматическое выравнивание столбцов
- Сохранение форматирования Markdown

## Пример использования

**Исходный текст:**

``` plain
Имя;Возраст;Город;
Анна;25;Москва;
Иван;30;Санкт-Петербург;
Мария;28;Киев;
````

**Результат (Markdown таблица):**
```markdown
|Имя  |Возраст|Город          |
|-----|-------|---------------|
|Анна |25     |Москва         |
|Иван |30     |Санкт-Петербург|
|Мария|28     |Киев           |
```

## Установка
### Из маркетплейса VS Code

1. Откройте VS Code
2. Нажмите Ctrl+Shift+X (или Cmd+Shift+X на Mac) для открытия расширений
3. Найдите MD Table Converter
4. Нажмите "Установить"

### Из файла .vsix
```shell
code --install-extension md-table-conv-1.0.0.vsix
```
## Использование
### Через команду

1. Выделите текст, который хотите преобразовать
2. Откройте командную палитру (Ctrl+Shift+P или Cmd+Shift+P)
3. Введите Convert to Markdown Table
4. Нажмите Enter

### Горячая клавиша

- Windows/Linux: Ctrl+Shift+/
- macOS: Cmd+Shift+/

## Если у вас возникли проблемы или вопросы:

- Создайте Issue
- Напишите на email: plush_hero@live.ru

⭐ Понравилось расширение? Поставьте звезду на [GitHub](https://github.com/plushhero/Markdown-Table-Converter.git)!

