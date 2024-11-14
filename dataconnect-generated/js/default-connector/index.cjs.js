const { getDataConnect, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ang-dataconnect',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function createCarRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'createCar', inputVars);
}
exports.createCarRef = createCarRef;
exports.createCar = function createCar(dcOrVars, vars) {
  return executeMutation(createCarRef(dcOrVars, vars));
};

function updateCarRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'updateCar', inputVars);
}
exports.updateCarRef = updateCarRef;
exports.updateCar = function updateCar(dcOrVars, vars) {
  return executeMutation(updateCarRef(dcOrVars, vars));
};

function deleteCarRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  if('_useGeneratedSdk' in dcInstance) {
    dcInstance._useGeneratedSdk();
  } else {
    console.error('Please update to the latest version of the Data Connect SDK by running `npm install firebase@dataconnect-preview`.');
  }
  return mutationRef(dcInstance, 'deleteCar', inputVars);
}
exports.deleteCarRef = deleteCarRef;
exports.deleteCar = function deleteCar(dcOrVars, vars) {
  return executeMutation(deleteCarRef(dcOrVars, vars));
};

