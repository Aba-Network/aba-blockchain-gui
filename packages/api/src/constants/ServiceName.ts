// Aba has modified this file.
const ServiceName = {
  WALLET: 'aba_wallet',
  FULL_NODE: 'aba_full_node',
  FARMER: 'aba_farmer',
  HARVESTER: 'aba_harvester',
  SIMULATOR: 'aba_full_node_simulator',
  DAEMON: 'daemon',
  PLOTTER: 'aba_plotter',
  TIMELORD: 'aba_timelord',
  INTRODUCER: 'aba_introducer',
  EVENTS: 'wallet_ui',
  DATALAYER: 'aba_data_layer',
  DATALAYER_SERVER: 'aba_data_layer_http',
} as const;

type ObjectValues<T> = T[keyof T];

export type ServiceNameValue = ObjectValues<typeof ServiceName>;

export default ServiceName;
