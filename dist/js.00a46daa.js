// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
// Referencias de las secciones
var splash = document.getElementById("title-section");
var start = document.getElementById("start-section");
var recordDream = document.getElementById("record-dream-section");
var savedDream = document.getElementById("saved-dream-section");
var dreamDetails = document.getElementById("dream-details-section");
var dreamList = document.getElementById("dream-list-section");

//Referencias header
var header = document.getElementById("header");
var headerLink = document.getElementById("headerLink");

//Referencias botones
var startToDreamListBtn = document.getElementById("dreamListBtn");
var startToRecordDreamBtn = document.getElementById("recordDreamBtn");
var dreamListToStartBtn = document.getElementById("backToStartBtn3");
var recordToStartBtn = document.getElementById("backToStartBtn");
var saveDreamBtn = document.getElementById("saveDreamBtn");
var savedDreamToStartBtn = document.getElementById("acceptBtn");
var savedDreamToListBtn = document.getElementById("dreamListBtn2");
var dreamDetailsToListBtn = document.getElementById("backToListBtn");
var detailsDreamToStartBtn = document.getElementById("backToStartBtn2");

//Referencia al formulario para guardar sueño
var dreamForm = document.getElementById("dreamForm");
window.onload = function () {
  hideAllSections();
  setTimeout(function () {
    hideSplahs();
  }, 3000);
};
function hideAllSections() {
  start.classList.add("hidden");
  recordDream.classList.add("hidden");
  savedDream.classList.add("hidden");
  dreamDetails.classList.add("hidden");
  dreamList.classList.add("hidden");
  header.classList.add("hidden");
}
function hideSplahs() {
  splash.classList.add("hidden");
  start.classList.remove("hidden");
  header.classList.remove("hidden");
}
headerLink.addEventListener("click", function () {
  hideAllSections();
  header.classList.remove("hidden");
  start.classList.remove("hidden");
});

//Start to List section
document.addEventListener('DOMContentLoaded', function () {
  startToDreamListBtn.addEventListener('click', function () {
    start.classList.add("hidden");
    dreamList.classList.remove("hidden");
    loadDreams();
  });
});

//List to Start
document.addEventListener('DOMContentLoaded', function () {
  dreamListToStartBtn.addEventListener('click', function () {
    dreamList.classList.add("hidden");
    start.classList.remove("hidden");
  });
});

//Start to Record dream
document.addEventListener('DOMContentLoaded', function () {
  startToRecordDreamBtn.addEventListener('click', function () {
    start.classList.add("hidden");
    recordDream.classList.remove("hidden");
  });
});

//Record to start
document.addEventListener('DOMContentLoaded', function () {
  recordToStartBtn.addEventListener('click', function () {
    recordDream.classList.add("hidden");
    start.classList.remove("hidden");
  });
});

// Saved dream to start
document.addEventListener('DOMContentLoaded', function () {
  savedDreamToStartBtn.addEventListener('click', function () {
    savedDream.classList.add("hidden");
    start.classList.remove("hidden");
  });
});

// Saved dream to list
document.addEventListener('DOMContentLoaded', function () {
  savedDreamToListBtn.addEventListener('click', function () {
    savedDream.classList.add("hidden");
    dreamList.classList.remove("hidden");
    loadDreams();
  });
});

// Dream details to list
document.addEventListener('DOMContentLoaded', function () {
  dreamDetailsToListBtn.addEventListener("click", function () {
    dreamDetails.classList.add("hidden");
    dreamList.classList.remove("hidden");
  });
});

// details to start
document.addEventListener('DOMContentLoaded', function () {
  detailsDreamToStartBtn.addEventListener("click", function () {
    dreamDetails.classList.add("hidden");
    start.classList.remove("hidden");
  });
});

//Guardar sueño en localstorage
document.addEventListener("DOMContentLoaded", function () {
  // Agregar un manejador de eventos para el envío del formulario
  dreamForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    // Obtén los valores de los campos del formulario
    var dreamDate = document.getElementById("dreamDate").value;
    var dreamTitle = document.getElementById("dreamTitle").value;
    var dreamDescription = document.getElementById("dreamDescription").value;
    // Crea un objeto para representar el sueño
    var dream = {
      date: dreamDate,
      title: dreamTitle,
      description: dreamDescription
    };
    // Obtén los sueños existentes o crea un nuevo array vacío
    var existingDreams = JSON.parse(localStorage.getItem("dreams")) || [];
    // Agrega el sueño al array de sueños
    existingDreams.push(dream);
    // Almacena el array actualizado en el LocalStorage
    localStorage.setItem("dreams", JSON.stringify(existingDreams));
    // Limpia los campos del formulario después de guardar
    dreamForm.reset();
    recordDream.classList.add("hidden");
    savedDream.classList.remove("hidden");
  });
});

// Función para cargar los sueños desde el Local Storage y mostrarlos en la lista
function loadDreams() {
  var dreamList = document.getElementById("dreamList");
  var dreams = JSON.parse(localStorage.getItem("dreams")) || [];

  // Limpiar la lista antes de agregar los elementos
  dreamList.innerHTML = "";

  // Agregar cada sueño como un elemento de la lista
  dreams.forEach(function (dream, index) {
    var listItem = document.createElement("li");
    listItem.classList.add("dream-item");
    listItem.innerHTML = "<a href=\"#\" data-index=\"".concat(index, "\">").concat(dream.title, "</a>");
    dreamList.appendChild(listItem);
  });

  // Agregar evento click a los elementos de la lista
  var dreamItems = document.querySelectorAll(".dream-item a");
  dreamItems.forEach(function (item) {
    item.addEventListener("click", showDreamDetails);
  });
}

// Función para mostrar los detalles del sueño seleccionado
function showDreamDetails(event) {
  event.preventDefault();
  var dreamIndex = event.target.getAttribute("data-index");
  var dreams = JSON.parse(localStorage.getItem("dreams")) || [];
  var dream = dreams[dreamIndex];

  // Actualizar la sección de detalles con la información del sueño
  document.getElementById("detailDate").textContent = dream.date;
  document.getElementById("detailTitle").textContent = dream.title;
  document.getElementById("detailDescription").textContent = dream.description;
  dreamList.classList.add("hidden");
  dreamDetails.classList.remove("hidden");
}

// Función para cargar la lista de sueños al cargar la página
window.addEventListener("load", function () {
  loadDreams();
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51282" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map