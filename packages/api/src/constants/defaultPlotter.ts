// # Aba has modified this file
import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';

import PlotterName from './PlotterName';

export default {
  displayName: 'Aba Proof of Space',
  options: optionsForPlotter(PlotterName.CHIAPOS),
  defaults: defaultsForPlotter(PlotterName.CHIAPOS),
  installInfo: { installed: true },
};
