import * as constants from '../utils/constants.js';
import StickyHeader from '../components/StickyHeader.js';

const stickyHeader = new StickyHeader(constants.headerConfig);

stickyHeader.enableStickyHeader();