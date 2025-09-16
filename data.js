var APP_DATA = {
  "scenes": [
    {
      "id": "0-render-360-2denoiser",
      "name": "render 360 2.denoiser",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05494015227896121,
          "pitch": 0.03929322727341855,
          "rotation": 0,
          "target": "1-render-360-3denoiser"
        },
        {
          "yaw": 2.7740167098277464,
          "pitch": 0.04310626107480431,
          "rotation": 0,
          "target": "2-render-360denoiser"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-render-360-3denoiser",
      "name": "render 360 3.denoiser",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0434957537026897,
          "pitch": 0.033455117810870405,
          "rotation": 0,
          "target": "0-render-360-2denoiser"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-render-360denoiser",
      "name": "render 360.denoiser",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11114007022529648,
          "pitch": 0.001877477727724397,
          "rotation": 0,
          "target": "0-render-360-2denoiser"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
