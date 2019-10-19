import { renderFilesInfo } from './tools/files/renderFilesInfo';
import { getFilesInfo } from './tools/files/getFilesInfo';
import { tryFilesExist } from './tools/files/validateFiles';

import { Logo } from './tools/console/logo';

import { updateSwitchCases } from './updateSwitchCases';

async function App() {
    // eslint-disable-next-line no-console
    console.log(Logo);

    const isNeedToExit = tryFilesExist();
    if (isNeedToExit) return;

    const fileInfo = getFilesInfo();
    renderFilesInfo(fileInfo, 'Before');

    await updateSwitchCases(fileInfo);

    const afterFileInfo = getFilesInfo();
    renderFilesInfo(afterFileInfo, 'After');
}

export default App;