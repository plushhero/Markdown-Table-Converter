import * as vscode from 'vscode';

export function get_md_string(line: string, sep: string, max_tok_len: number[], isHeader: boolean = false): string {
	let new_line: string = '|';
	let ctrl_line: string = '|';
	let tokens = line.split(sep);

	for (let i = 0; i < max_tok_len.length; i++) {
		if (tokens.length > 0) {
			let token = tokens[i] === undefined ? "" : tokens[i];
			new_line += token + " ".repeat(max_tok_len[i] - token.length) + "|";
			if (isHeader) {
				ctrl_line += "-".repeat(max_tok_len[i]) + "|";
			}
		}
	}
	return isHeader ? new_line + '\n' + ctrl_line : new_line;
}

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('md-table-conv.convertToTable', () => {
		let ed = vscode.window.activeTextEditor;
		if (ed && !ed.selection.isEmpty) {
			let sel = ed.selection;
			let sep = ';';

			let lines = ed.document.getText(sel).split('\n');
			let max_tok_ln: number[] = [];
			// let max_cols = lines[0].split(sep).length;

			for (const [index, line] of lines.entries()) {
				let line_entries = line.split(sep);
				for (let i = 0; i < line_entries.length - 1; i++) {
					if (max_tok_ln[i] === undefined) {
						max_tok_ln[i] = 3;
					}
					max_tok_ln[i] = Math.max(max_tok_ln[i], line_entries[i].length);
				}
			}

			let nlines: string[] = [get_md_string(lines[0], sep, max_tok_ln, true)];
			for (let i = 1; i < lines.length; i++) {
				nlines.push(get_md_string(lines[i], sep, max_tok_ln));
			}

			ed.edit(f => {
				f.replace(sel, nlines.join('\n'));
			});
		}

	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
