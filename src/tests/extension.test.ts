import * as assert from 'assert';
import * as vscode from 'vscode';
import * as ext from "../extension";

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('single line conversion', () => {
		let str = "a;b;c;";
		assert.strictEqual("|a  |b  |c  |",ext.get_md_string(str,';',[1,1,1]));
		assert.strictEqual("|a  |b  |c  |\n|---|---|---|",ext.get_md_string(str,';',[1,1,1],true));
	});
});
