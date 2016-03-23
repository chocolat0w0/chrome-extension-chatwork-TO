/**
 * ツールチップ表示されるアイコンを作成する
 * @param id 要素のID
 * @param label ツールチップで表示される説明
 * @param imageFileName アイコン画像のファイル名(imagesディレクトリ内に置く)
 */
export function create(id, label, imageFileName) {
    var icon = document.createElement('img');
    icon.src = chrome.extension.getURL('images/' + imageFileName);
    var iconWrapper = document.createElement('li');
    iconWrapper.id = '_replaceButton';
    iconWrapper.setAttribute('class', '_showDescription');
    iconWrapper.setAttribute('style', 'display: inline-block; padding-top: 3px;');
    iconWrapper.setAttribute('role', 'button');
    iconWrapper.setAttribute('aria-label', 'Toの宛名を削除したよ');
    iconWrapper.appendChild(icon);
    return iconWrapper;
}
