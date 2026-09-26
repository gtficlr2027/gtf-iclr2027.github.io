const RESULTS = [
 {
  "key": "future_prediction",
  "name": "Future prediction",
  "desc": "The model sees the first half second of both hands and the object and forecasts the rest of the interaction.",
  "videos": [
   {
    "src": "videos/action100m__future_prediction__09.mp4",
    "poster": "videos/action100m__future_prediction__09.jpg",
    "title": "Present · spray can",
    "source": "Action100M"
   },
   {
    "src": "videos/action100m__future_prediction__30.mp4",
    "poster": "videos/action100m__future_prediction__30.jpg",
    "title": "Rotate · bottle",
    "source": "Action100M"
   },
   {
    "src": "videos/mocap__future_prediction__19.mp4",
    "poster": "videos/mocap__future_prediction__19.jpg",
    "title": "Manipulation · screwdriver",
    "source": "MoCap"
   }
  ]
 },
 {
  "key": "hand_to_object",
  "name": "Hands → object",
  "desc": "The hands are given for the whole clip; the model predicts how the object moves with them.",
  "videos": [
   {
    "src": "videos/action100m__hand_to_object__12.mp4",
    "poster": "videos/action100m__hand_to_object__12.jpg",
    "title": "Fill · drinking glass",
    "source": "Action100M"
   },
   {
    "src": "videos/action100m__hand_to_object__13.mp4",
    "poster": "videos/action100m__hand_to_object__13.jpg",
    "title": "Rotate · bird feeder container",
    "source": "Action100M"
   },
   {
    "src": "videos/mocap__hand_to_object__04.mp4",
    "poster": "videos/mocap__hand_to_object__04.jpg",
    "title": "Brush · roller",
    "source": "MoCap"
   },
   {
    "src": "videos/mocap__hand_to_object__21.mp4",
    "poster": "videos/mocap__hand_to_object__21.jpg",
    "title": "Pick and place · cracker box",
    "source": "MoCap"
   }
  ]
 },
 {
  "key": "object_to_hand",
  "name": "Object → hands",
  "desc": "The object motion is given; the model predicts both hands, including finger articulation, that produce it.",
  "videos": [
   {
    "src": "videos/action100m__object_to_hand__17.mp4",
    "poster": "videos/action100m__object_to_hand__17.jpg",
    "title": "Rotate · bottle",
    "source": "Action100M"
   },
   {
    "src": "videos/action100m__object_to_hand__19.mp4",
    "poster": "videos/action100m__object_to_hand__19.jpg",
    "title": "Operate · camera",
    "source": "Action100M"
   },
   {
    "src": "videos/mocap__object_to_hand__14.mp4",
    "poster": "videos/mocap__object_to_hand__14.jpg",
    "title": "Put out · spoon",
    "source": "MoCap"
   },
   {
    "src": "videos/mocap__object_to_hand__28.mp4",
    "poster": "videos/mocap__object_to_hand__28.jpg",
    "title": "Take out · cocoa",
    "source": "MoCap"
   }
  ]
 },
 {
  "key": "goal_infilling",
  "name": "Goal-conditioned",
  "desc": "The first frame and a final pose of the hands and object are given; the model generates the motion in between.",
  "videos": [
   {
    "src": "videos/action100m__goal_infilling__23.mp4",
    "poster": "videos/action100m__goal_infilling__23.jpg",
    "title": "Tilt · glass bowl",
    "source": "Action100M"
   },
   {
    "src": "videos/action100m__goal_infilling__26.mp4",
    "poster": "videos/action100m__goal_infilling__26.jpg",
    "title": "Lift · jar",
    "source": "Action100M"
   },
   {
    "src": "videos/mocap__goal_infilling__01.mp4",
    "poster": "videos/mocap__goal_infilling__01.jpg",
    "title": "Scoop · little green cup",
    "source": "MoCap"
   },
   {
    "src": "videos/mocap__goal_infilling__18.mp4",
    "poster": "videos/mocap__goal_infilling__18.jpg",
    "title": "Pick and place · mug",
    "source": "MoCap"
   }
  ]
 },
 {
  "key": "temporal_infilling",
  "name": "Temporal infilling",
  "desc": "Hands and object are observed before and after a gap; the model completes the missing interaction.",
  "videos": [
   {
    "src": "videos/action100m__temporal_infilling__07.mp4",
    "poster": "videos/action100m__temporal_infilling__07.jpg",
    "title": "Handle · nursery pot",
    "source": "Action100M"
   },
   {
    "src": "videos/action100m__temporal_infilling__13.mp4",
    "poster": "videos/action100m__temporal_infilling__13.jpg",
    "title": "Tilt · sealed jar",
    "source": "Action100M"
   },
   {
    "src": "videos/mocap__temporal_infilling__09.mp4",
    "poster": "videos/mocap__temporal_infilling__09.jpg",
    "title": "Assemble · donut",
    "source": "MoCap"
   },
   {
    "src": "videos/mocap__temporal_infilling__15.mp4",
    "poster": "videos/mocap__temporal_infilling__15.jpg",
    "title": "Manipulation · bleach cleanser",
    "source": "MoCap"
   }
  ]
 }
];
