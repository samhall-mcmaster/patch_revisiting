/********************* 
 * Pirates_Task Test *
 *********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Pirates_task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_welcomeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_welcomeLoopBegin, trials_welcomeLoopScheduler);
flowScheduler.add(trials_welcomeLoopScheduler);
flowScheduler.add(trials_welcomeLoopEnd);
const trials_screeningLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_screeningLoopBegin, trials_screeningLoopScheduler);
flowScheduler.add(trials_screeningLoopScheduler);
flowScheduler.add(trials_screeningLoopEnd);
const trials_demographicsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_demographicsLoopBegin, trials_demographicsLoopScheduler);
flowScheduler.add(trials_demographicsLoopScheduler);
flowScheduler.add(trials_demographicsLoopEnd);
const trials_instructionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_instructionsLoopBegin, trials_instructionsLoopScheduler);
flowScheduler.add(trials_instructionsLoopScheduler);
flowScheduler.add(trials_instructionsLoopEnd);
const blk_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blk_loopLoopBegin, blk_loopLoopScheduler);
flowScheduler.add(blk_loopLoopScheduler);
flowScheduler.add(blk_loopLoopEnd);
flowScheduler.add(close_exptRoutineBegin());
flowScheduler.add(close_exptRoutineEachFrame());
flowScheduler.add(close_exptRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=5FD012A4', '');

  return Scheduler.Event.NEXT;
}


var welcomeClock;
var intruc_msg_counter;
var demographic_msg_counter;
var screening_msg_counter;
var task_instruc_msg_counter;
var num_welcome;
var num_screening_questions;
var num_demographic_questions;
var num_instruction_trials;
var do_instruc;
var do_screening;
var do_demographics;
var do_task_instruc;
var screeningQ1;
var screeningQ2;
var label_txt;
var age;
var gender;
var instruc_imgs;
var task_instruc_img_opacity;
var task_instruc_txt_pos;
var task_instruc_space_txt_pos;
var terminate_expt;
var screeningQ1_passed;
var screeningQ2_passed;
var final_msg;
var task_instruc_txt;
var task_instruc_resp;
var screening_qsClock;
var button_col;
var button_size;
var button1_pos;
var button2_pos;
var button3_pos;
var button4_pos;
var button5_pos;
var btxt_col;
var btxt_size;
var btxt1_pos;
var btxt2_pos;
var btxt3_pos;
var btxt4_pos;
var btxt5_pos;
var text_3;
var button1;
var button2;
var button3;
var button4;
var button5;
var mouse;
var btxt1;
var btxt2;
var btxt3;
var btxt4;
var btxt5;
var demographicsClock;
var demographics_txt;
var demographics_input;
var demo_resp;
var task_instrucClock;
var instruc_txt;
var instruc_image;
var text_4;
var key_resp;
var blk_instrucClock;
var blk_order;
var blk_idx;
var curr_blk_number;
var total_blk_number;
var blk_txt;
var blk_instruc_resp;
var selectClock;
var k;
var isld_replen_rates;
var initial_replen_rates;
var isld_svals;
var total_actions_allowed;
var actions_blk;
var total_actions;
var patchTime;
var travel_duration;
var fbk_duration;
var curr_isld;
var alt_islds;
var keys_allowed;
var agent;
var bounty;
var travel_msg;
var ocean_size;
var isld_size;
var agent_size;
var treasure_size;
var box_size;
var center_txt_pos;
var cross_size;
var action_msg_size;
var ocean_pos;
var isld1_pos;
var isld2_pos;
var isld3_pos;
var curr_pos;
var ship_pos;
var goal_pos;
var treasure_pos;
var box_pos;
var f_keypos;
var j_keypos;
var k_keypos;
var action_msg_pos;
var ocean_col;
var isld_col;
var box_line_col;
var box_opacity;
var f_key_opacity;
var j_key_opacity;
var k_key_opacity;
var cross_opacity;
var fbk_opacity;
var rew_displayed;
var total_points;
var points_blk;
var mean_reward_block;
var mean_reward_entire_experiment;
var f_key_txt;
var j_key_txt;
var k_key_txt;
var keys_first_exploit_allowed;
var keys_exploit_allowed;
var ocean_select;
var isld1_select;
var isld2_select;
var isld3_select;
var Select_txt;
var forced_choice_box;
var Select_F;
var Select_J;
var Select_K;
var Select_Cross1;
var Select_Cross2;
var agent_img;
var Select_act_count;
var sel_resp;
var travelClock;
var ocean_select_2;
var isld1_select_2;
var isld2_select_2;
var isld3_select_2;
var agent_select;
var text;
var travel_action_count;
var exploitClock;
var ocean_exploit;
var isld1_exploit;
var isld2_exploit;
var isld3_exploit;
var agent_exploit;
var points_txt;
var dig_sail_txt;
var exploit_action_count;
var exploit_resp;
var exploit_fbkClock;
var ocean_exploit_2;
var isld1_exploit_2;
var isld2_exploit_2;
var isld3_exploit_2;
var agent_exploit_2;
var points_txt_2;
var exploit_fbk_dig_sail_txt;
var exploit_fbk_action_count;
var treasure;
var post_blk_msgClock;
var text_2;
var post_blk_resp;
var close_exptClock;
var closing_msg_txt;
var closing_resp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  // define screen counters
  intruc_msg_counter=0;
  demographic_msg_counter=0;
  screening_msg_counter=0;
  task_instruc_msg_counter=0;
  
  // number of slides to present
  num_welcome=6;
  num_screening_questions=2;
  num_demographic_questions=2;
  num_instruction_trials=10;
  
  // run phase?
  do_instruc=1;
  do_screening=1;
  do_demographics=1;
  do_task_instruc=1;
  
  
  // initialise variables
  screeningQ1=[];
  screeningQ2=[];
  label_txt='';
  age=[];
  gender=[];
  
  // load task instruction images
  instruc_imgs=["stimuli/free_choice1.png","stimuli/free_choice2.png","stimuli/free_choice3.png","stimuli/free_choice4.png","stimuli/free_choice5.png","stimuli/free_choice6.png","stimuli/free_choice6.png","stimuli/free_choice6.png","stimuli/forced_choice1.png"];
  
  // task instructions opacity and positioning
      task_instruc_img_opacity=1;
      task_instruc_txt_pos=[0, 0.3];
      task_instruc_space_txt_pos=[0, -0.4]
      
  // initialise screening variables
  terminate_expt=0;
  screeningQ1_passed=0;
  screeningQ2_passed=0;
  age=0;
  
  // final message if experiment is finished under normal circumstances
  final_msg=['Shiver me timbers! You completed the experiment. Press space to claim your treasure. Feel free to send us a message and let us know how found the task.'];
  
  // initalise variables for saving
  // participant variables
  psychoJS.experiment.addData('consent_given', 0);
  psychoJS.experiment.addData('screeningQ1', 0);
  psychoJS.experiment.addData('screeningQ2', 0);
  psychoJS.experiment.addData('age', 0);
  psychoJS.experiment.addData('gender', 0);
  
  // setting variables
  psychoJS.experiment.addData('starting values', 0); // should be value defined under begin experiment in select component
  psychoJS.experiment.addData('reward vec', 0); // should be value defined under begin experiment in select component
  psychoJS.experiment.addData('decay_rate', 0);
  psychoJS.experiment.addData('replenish rates', 0);
  psychoJS.experiment.addData('travel_duration', 0);
  psychoJS.experiment.addData('feedback_duration', 0);
  
  // key variables to save
  psychoJS.experiment.addData('blk_number', 0);
  psychoJS.experiment.addData('blk_type', 0); // 1 for forced choice, 2 for free choice
  psychoJS.experiment.addData('mean reward block', 0); 
  psychoJS.experiment.addData('current patch position', 0); // 1=left, 2=top, 3=right
  psychoJS.experiment.addData('patch value left', 0); 
  psychoJS.experiment.addData('patch value top', 0); 
  psychoJS.experiment.addData('patch value right', 0); 
  psychoJS.experiment.addData('patch replenish left', 0); 
  psychoJS.experiment.addData('patch replenish top', 0); 
  psychoJS.experiment.addData('patch replenish right', 0); 
  psychoJS.experiment.addData('current patch replenish rate', 0); // 1=slow, 2=medium, 3=fast
  psychoJS.experiment.addData('patch value slow', 0); 
  psychoJS.experiment.addData('patch value medium', 0); 
  psychoJS.experiment.addData('patch value fast', 0); 
  psychoJS.experiment.addData('patch replenish slow', 0); 
  psychoJS.experiment.addData('patch replenish medium', 0); 
  psychoJS.experiment.addData('patch replenish fast', 0); 
  psychoJS.experiment.addData('decision type', 0); // initialise. Use 1 for select, 2 for stay, 3 for leave
  psychoJS.experiment.addData('trial phase', 0); // 1 for select, 2 for travel, 3 for exploit/stay decision, 4 for exploit feedback
  
  
  // selection variables
  psychoJS.experiment.addData('patch_selection_key', 0);
  psychoJS.experiment.addData('patch_selection_RT', 0);
  
  
  // exploit loop variables
  psychoJS.experiment.addData('actual_rew_gain', 0);
  psychoJS.experiment.addData('rew_fbk_displayed', 0);
  psychoJS.experiment.addData('blk_points', 0);
  psychoJS.experiment.addData('blk_actions', 0);
  psychoJS.experiment.addData('exploit_phase_key', 0);
  psychoJS.experiment.addData('exploit_phase_RT', 0);
  psychoJS.experiment.addData('num_exploit_actions', 0); // just save on leaving to make analysis easier
  
  // broader variables
  psychoJS.experiment.addData('mean reward entire experiment', 0); // initialize
  psychoJS.experiment.addData('total_points', total_points);
  psychoJS.experiment.addData('total_actions', total_actions);
  psychoJS.experiment.addData('actions_remaining', total_actions);
  psychoJS.experiment.addData('time in patch (seconds)', 0);
  
  task_instruc_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_instruc_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  task_instruc_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "screening_qs"
  screening_qsClock = new util.Clock();
  // define button positions for screening qs
  button_col = 'black'
  button_size=[0.1, 0.1]
  button1_pos=[-0.45, -0.15]
  button2_pos=[-0.225, -0.15]
  button3_pos=[0, -0.15]
  button4_pos=[0.225, -0.15]
  button5_pos=[0.45, -0.15]
  
  btxt_col = 'black'
  btxt_size=0.03
  btxt1_pos=[-0.45, -0.215]
  btxt2_pos=[-0.225, -0.215]
  btxt3_pos=[0, -0.215]
  btxt4_pos=[0.225, -0.215]
  btxt5_pos=[0.45, -0.215]
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  button1 = new visual.Polygon ({
    win: psychoJS.window, name: 'button1', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  button2 = new visual.Polygon ({
    win: psychoJS.window, name: 'button2', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  button3 = new visual.Polygon ({
    win: psychoJS.window, name: 'button3', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  button4 = new visual.Polygon ({
    win: psychoJS.window, name: 'button4', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  button5 = new visual.Polygon ({
    win: psychoJS.window, name: 'button5', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  btxt1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt1',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  btxt2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  btxt3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt3',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  btxt4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt4',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  btxt5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt5',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  demographics_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'demographics_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  demographics_input = new visual.TextStim({
    win: psychoJS.window,
    name: 'demographics_input',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  demo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_instruc"
  task_instrucClock = new util.Clock();
  instruc_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruc_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instruc_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruc_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.05)], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Press space to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blk_instruc"
  blk_instrucClock = new util.Clock();
  // define shuffle function
  window.shuffle = function(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
  
  // define block information
  blk_order = [1, 1, 2, 2];
  shuffle(blk_order);
  blk_idx = -1; // updated when routine begins
  curr_blk_number = 0; // used for end of block message. Will update to one when starting block_instruc
  total_blk_number = 4; 
  
  blk_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'blk_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  blk_instruc_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "select"
  selectClock = new util.Clock();
  // set decay constant
  k=0.05;
  
  // set island replenish rates
  //isld_replen_rates = [5/50, 10/50, 15/50];
  isld_replen_rates = [2.5/50, 5/50, 7.5/50];
  initial_replen_rates = [...isld_replen_rates]; //backup copy
  
  // set object start values and a value vector that can be updated during the block
  isld_svals = [100, 100, 100];
  //isld_rvals = [100, 100, 100];
  
  // set total actions allowed in block
  total_actions_allowed=200;
  
  // initialise action counter for block and full experiment
  actions_blk=0;
  total_actions=0;
  patchTime=0;
  
  // set durations
  travel_duration = 1;
  fbk_duration=1.5;
  
  // set curr_isld to non-island value for first trial
  curr_isld=10;
  
  // set alt_islds for first trial
  alt_islds=[1,2,3];
  
  // set keys allowed
  keys_allowed = ['f', 'j', 'k'];
  
  // set image paths
  agent = "stimuli/pirate_ship.png";
  bounty = "stimuli/coin.png";
  
  // set travel message
  travel_msg='Sailing in progress...'
  
  // set object sizes
  ocean_size = [0.9, 0.9];
  isld_size = [0.25, 0.25];
  agent_size = [0.1, 0.1];
  treasure_size = [0.025, 0.025];
  box_size = [0.025, 0.025]; // forced choice box
  center_txt_pos=[0, -0.075];
  cross_size = 0.035;
  action_msg_size = 0.02;
  
  // set object positions
  ocean_pos = [0, 0];
  isld1_pos = [(- 0.3), (- 0.25)];
  isld2_pos = [0, 0.25];
  isld3_pos = [0.3, (- 0.25)];
  curr_pos = [0, 0];
  ship_pos = [0, 0];
  goal_pos = [0, 0];
  treasure_pos = [0, 0];
  box_pos = [0, 0];
  f_keypos = [(- 0.3), (- 0.35)];
  j_keypos = [0, 0.15];
  k_keypos = [0.3, (- 0.35)];
  action_msg_pos = [0.325, 0.425];
  
  // set object colours
  ocean_col = [(12 / 255), (164 / 255), (255 / 255)];
  isld_col = [0, (137 / 255), (82 / 255)];
  box_line_col = [0, (255 / 255), 0];
  
  // set opacity values
  box_opacity = 0;
  f_key_opacity=1;
  j_key_opacity=1;
  k_key_opacity=1;
  cross_opacity=1;
  fbk_opacity=1;
  
  // initialise reward feedback to display and other reward variables
  rew_displayed = 0;
  total_points=0;
  points_blk=0;
  mean_reward_block=0;
  mean_reward_entire_experiment=0;
  
  // set select key txt
  f_key_txt='F';
  j_key_txt='J';
  k_key_txt='K';
  
  // set keys allowed for first action in an island
  keys_first_exploit_allowed=['space']; // ensure first action must be a dig
  
  // set keys allowed for remaining actions in an island
  keys_exploit_allowed=['space','s']; // allows actions after the first to be a dig or to set sail
  ocean_select = new visual.Rect ({
    win: psychoJS.window, name: 'ocean_select', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(ocean_col),
    fillColor: new util.Color(ocean_col),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  isld1_select = new visual.Polygon ({
    win: psychoJS.window, name: 'isld1_select', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  isld2_select = new visual.Polygon ({
    win: psychoJS.window, name: 'isld2_select', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  isld3_select = new visual.Polygon ({
    win: psychoJS.window, name: 'isld3_select', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  Select_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'Select_txt',
    text: 'Select an island!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  forced_choice_box = new visual.Rect ({
    win: psychoJS.window, name: 'forced_choice_box', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 5, lineColor: new util.Color(box_line_col),
    fillColor: new util.Color(isld_col),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  Select_F = new visual.TextStim({
    win: psychoJS.window,
    name: 'Select_F',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -7.0 
  });
  
  Select_J = new visual.TextStim({
    win: psychoJS.window,
    name: 'Select_J',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -8.0 
  });
  
  Select_K = new visual.TextStim({
    win: psychoJS.window,
    name: 'Select_K',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -9.0 
  });
  
  Select_Cross1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Select_Cross1',
    text: 'X',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: -10.0 
  });
  
  Select_Cross2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Select_Cross2',
    text: 'X',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: -11.0 
  });
  
  agent_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'agent_img', units : undefined, 
    image : 'stimuli/pirate_ship.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -12.0 
  });
  Select_act_count = new visual.TextStim({
    win: psychoJS.window,
    name: 'Select_act_count',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -13.0 
  });
  
  sel_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "travel"
  travelClock = new util.Clock();
  
  
  ocean_select_2 = new visual.Rect ({
    win: psychoJS.window, name: 'ocean_select_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(ocean_col),
    fillColor: new util.Color(ocean_col),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  isld1_select_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'isld1_select_2', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  isld2_select_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'isld2_select_2', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  isld3_select_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'isld3_select_2', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  agent_select = new visual.ImageStim({
    win : psychoJS.window,
    name : 'agent_select', units : undefined, 
    image : 'stimuli/pirate_ship.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  travel_action_count = new visual.TextStim({
    win: psychoJS.window,
    name: 'travel_action_count',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "exploit"
  exploitClock = new util.Clock();
  
  
  
  ocean_exploit = new visual.Rect ({
    win: psychoJS.window, name: 'ocean_exploit', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(ocean_col),
    fillColor: new util.Color(ocean_col),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  isld1_exploit = new visual.Polygon ({
    win: psychoJS.window, name: 'isld1_exploit', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  isld2_exploit = new visual.Polygon ({
    win: psychoJS.window, name: 'isld2_exploit', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  isld3_exploit = new visual.Polygon ({
    win: psychoJS.window, name: 'isld3_exploit', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  agent_exploit = new visual.ImageStim({
    win : psychoJS.window,
    name : 'agent_exploit', units : undefined, 
    image : agent, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  points_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'points_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 0,
    depth: -6.0 
  });
  
  dig_sail_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'dig_sail_txt',
    text: 'Press space to dig for treasure and s to set sail',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  exploit_action_count = new visual.TextStim({
    win: psychoJS.window,
    name: 'exploit_action_count',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  exploit_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exploit_fbk"
  exploit_fbkClock = new util.Clock();
  ocean_exploit_2 = new visual.Rect ({
    win: psychoJS.window, name: 'ocean_exploit_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(ocean_col),
    fillColor: new util.Color(ocean_col),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  isld1_exploit_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'isld1_exploit_2', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  isld2_exploit_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'isld2_exploit_2', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  isld3_exploit_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'isld3_exploit_2', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  agent_exploit_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'agent_exploit_2', units : undefined, 
    image : agent, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  points_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'points_txt_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -6.0 
  });
  
  exploit_fbk_dig_sail_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'exploit_fbk_dig_sail_txt',
    text: 'Press space to dig for treasure and s to set sail',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  exploit_fbk_action_count = new visual.TextStim({
    win: psychoJS.window,
    name: 'exploit_fbk_action_count',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  treasure = new visual.ImageStim({
    win : psychoJS.window,
    name : 'treasure', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -9.0 
  });
  // Initialize components for Routine "post_blk_msg"
  post_blk_msgClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  post_blk_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "close_expt"
  close_exptClock = new util.Clock();
  closing_msg_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'closing_msg_txt',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  closing_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_welcome;
var currentLoop;
function trials_welcomeLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_welcome = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_welcome, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_welcome'
  });
  psychoJS.experiment.addLoop(trials_welcome); // add the loop to the experiment
  currentLoop = trials_welcome;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_welcome.forEach(function() {
    const snapshot = trials_welcome.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(welcomeRoutineBegin(snapshot));
    thisScheduler.add(welcomeRoutineEachFrame(snapshot));
    thisScheduler.add(welcomeRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_welcomeLoopEnd() {
  psychoJS.experiment.removeLoop(trials_welcome);

  return Scheduler.Event.NEXT;
}


var trials_screening;
function trials_screeningLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_screening = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_screening_questions, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_screening'
  });
  psychoJS.experiment.addLoop(trials_screening); // add the loop to the experiment
  currentLoop = trials_screening;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_screening.forEach(function() {
    const snapshot = trials_screening.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(screening_qsRoutineBegin(snapshot));
    thisScheduler.add(screening_qsRoutineEachFrame(snapshot));
    thisScheduler.add(screening_qsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_screeningLoopEnd() {
  psychoJS.experiment.removeLoop(trials_screening);

  return Scheduler.Event.NEXT;
}


var trials_demographics;
function trials_demographicsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_demographics = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_demographic_questions, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_demographics'
  });
  psychoJS.experiment.addLoop(trials_demographics); // add the loop to the experiment
  currentLoop = trials_demographics;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_demographics.forEach(function() {
    const snapshot = trials_demographics.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(demographicsRoutineBegin(snapshot));
    thisScheduler.add(demographicsRoutineEachFrame(snapshot));
    thisScheduler.add(demographicsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_demographicsLoopEnd() {
  psychoJS.experiment.removeLoop(trials_demographics);

  return Scheduler.Event.NEXT;
}


var trials_instructions;
function trials_instructionsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_instructions = new TrialHandler({
    psychoJS: psychoJS,
    nReps: num_instruction_trials, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_instructions'
  });
  psychoJS.experiment.addLoop(trials_instructions); // add the loop to the experiment
  currentLoop = trials_instructions;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_instructions.forEach(function() {
    const snapshot = trials_instructions.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(task_instrucRoutineBegin(snapshot));
    thisScheduler.add(task_instrucRoutineEachFrame(snapshot));
    thisScheduler.add(task_instrucRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_instructionsLoopEnd() {
  psychoJS.experiment.removeLoop(trials_instructions);

  return Scheduler.Event.NEXT;
}


var blk_loop;
function blk_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  blk_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: total_blk_number, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blk_loop'
  });
  psychoJS.experiment.addLoop(blk_loop); // add the loop to the experiment
  currentLoop = blk_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  blk_loop.forEach(function() {
    const snapshot = blk_loop.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(blk_instrucRoutineBegin(snapshot));
    thisScheduler.add(blk_instrucRoutineEachFrame(snapshot));
    thisScheduler.add(blk_instrucRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(post_blk_msgRoutineBegin(snapshot));
    thisScheduler.add(post_blk_msgRoutineEachFrame(snapshot));
    thisScheduler.add(post_blk_msgRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: total_actions_allowed, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(selectRoutineBegin(snapshot));
    thisScheduler.add(selectRoutineEachFrame(snapshot));
    thisScheduler.add(selectRoutineEnd(snapshot));
    thisScheduler.add(travelRoutineBegin(snapshot));
    thisScheduler.add(travelRoutineEachFrame(snapshot));
    thisScheduler.add(travelRoutineEnd(snapshot));
    const exploit_loopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(exploit_loopLoopBegin, exploit_loopLoopScheduler);
    thisScheduler.add(exploit_loopLoopScheduler);
    thisScheduler.add(exploit_loopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var exploit_loop;
function exploit_loopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  exploit_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: total_actions_allowed, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'exploit_loop'
  });
  psychoJS.experiment.addLoop(exploit_loop); // add the loop to the experiment
  currentLoop = exploit_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  exploit_loop.forEach(function() {
    const snapshot = exploit_loop.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(exploitRoutineBegin(snapshot));
    thisScheduler.add(exploitRoutineEachFrame(snapshot));
    thisScheduler.add(exploitRoutineEnd(snapshot));
    thisScheduler.add(exploit_fbkRoutineBegin(snapshot));
    thisScheduler.add(exploit_fbkRoutineEachFrame(snapshot));
    thisScheduler.add(exploit_fbkRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function exploit_loopLoopEnd() {
  psychoJS.experiment.removeLoop(exploit_loop);

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function blk_loopLoopEnd() {
  psychoJS.experiment.removeLoop(blk_loop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var task_instruc_msg;
var _task_instruc_resp_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // define function to load instructions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "resources/instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })(); 
    
    if ((intruc_msg_counter===0)) {
    task_instruc_msg=instructions.consent.page1
    }
    
    if ((intruc_msg_counter===1)) {
    task_instruc_msg=instructions.consent.page2
    }
    
    if ((intruc_msg_counter===2)) {
    task_instruc_msg=instructions.consent.page3
    }
    
    if ((intruc_msg_counter===3)) {
    task_instruc_msg=instructions.consent.page4
    }
    
    if ((intruc_msg_counter===4)) {
    task_instruc_msg=instructions.consent.page5
    }
    
    if ((intruc_msg_counter===5)) {
    task_instruc_msg=instructions.consent.page6
    }
    
    
    task_instruc_txt.setText(task_instruc_msg);
    task_instruc_resp.keys = undefined;
    task_instruc_resp.rt = undefined;
    _task_instruc_resp_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(task_instruc_txt);
    welcomeComponents.push(task_instruc_resp);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function welcomeRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'welcome'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_instruc===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *task_instruc_txt* updates
    if (t >= 0.0 && task_instruc_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_instruc_txt.tStart = t;  // (not accounting for frame time here)
      task_instruc_txt.frameNStart = frameN;  // exact frame index
      
      task_instruc_txt.setAutoDraw(true);
    }

    
    // *task_instruc_resp* updates
    if (t >= 0.0 && task_instruc_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_instruc_resp.tStart = t;  // (not accounting for frame time here)
      task_instruc_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { task_instruc_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { task_instruc_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { task_instruc_resp.clearEvents(); });
    }

    if (task_instruc_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = task_instruc_resp.getKeys({keyList: ['space'], waitRelease: false});
      _task_instruc_resp_allKeys = _task_instruc_resp_allKeys.concat(theseKeys);
      if (_task_instruc_resp_allKeys.length > 0) {
        task_instruc_resp.keys = _task_instruc_resp_allKeys[_task_instruc_resp_allKeys.length - 1].name;  // just the last key pressed
        task_instruc_resp.rt = _task_instruc_resp_allKeys[_task_instruc_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'welcome'-------
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update counter
    intruc_msg_counter=intruc_msg_counter+1;
    psychoJS.experiment.addData('task_instruc_resp.keys', task_instruc_resp.keys);
    if (typeof task_instruc_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('task_instruc_resp.rt', task_instruc_resp.rt);
        routineTimer.reset();
        }
    
    task_instruc_resp.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var screening_question;
var screening_txt;
var gotValidClick;
var screening_qsComponents;
function screening_qsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'screening_qs'-------
    t = 0;
    screening_qsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // define function to demographic questions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "resources/instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })();
    
    if ((screening_msg_counter===0)) {
    psychoJS.experiment.addData('consent_given', 1);
    screening_question=instructions.screening.page1
    screening_txt=["blue", "green", "black", "purple", "red"];
    
    //slider.ticks=[1,2,3,4,5];
    //slider.labels=["blue", "green", "black", "purple", "red"];
    }
    
    if ((screening_msg_counter===1)) {
    screening_question=instructions.screening.page2
    screening_txt=["one", "two", "three", "four", "five"];
    
    //slider.ticks=[1,2,3,4,5];
    //slider.labels=["one", "two", "three", "four", "five"];
    }
    
    //slider._needVertexUpdate = true;
    //slider._buildSlider();
    //slider.style=[visual.Slider.Style.RADIO]
    
    
    
    
    text_3.setText(screening_question);
    button1.setPos(button1_pos);
    button1.setSize(button_size);
    button1.setFillColor(new util.Color(button_col));
    button1.setLineColor(new util.Color(button_col));
    button2.setPos(button2_pos);
    button2.setSize(button_size);
    button2.setFillColor(new util.Color(button_col));
    button2.setLineColor(new util.Color(button_col));
    button3.setPos(button3_pos);
    button3.setSize(button_size);
    button3.setFillColor(new util.Color(button_col));
    button3.setLineColor(new util.Color(button_col));
    button4.setPos(button4_pos);
    button4.setSize(button_size);
    button4.setFillColor(new util.Color(button_col));
    button4.setLineColor(new util.Color(button_col));
    button5.setPos(button5_pos);
    button5.setSize(button_size);
    button5.setFillColor(new util.Color(button_col));
    button5.setLineColor(new util.Color(button_col));
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    btxt1.setColor(new util.Color(btxt_col));
    btxt1.setPos(btxt1_pos);
    btxt1.setText(screening_txt[0]);
    btxt1.setHeight(btxt_size);
    btxt2.setColor(new util.Color(btxt_col));
    btxt2.setPos(btxt2_pos);
    btxt2.setText(screening_txt[1]);
    btxt2.setHeight(btxt_size);
    btxt3.setColor(new util.Color(btxt_col));
    btxt3.setPos(btxt3_pos);
    btxt3.setText(screening_txt[2]);
    btxt3.setHeight(btxt_size);
    btxt4.setColor(new util.Color(btxt_col));
    btxt4.setPos(btxt4_pos);
    btxt4.setText(screening_txt[3]);
    btxt4.setHeight(btxt_size);
    btxt5.setColor(new util.Color(btxt_col));
    btxt5.setPos(btxt5_pos);
    btxt5.setText(screening_txt[4]);
    btxt5.setHeight(btxt_size);
    // keep track of which components have finished
    screening_qsComponents = [];
    screening_qsComponents.push(text_3);
    screening_qsComponents.push(button1);
    screening_qsComponents.push(button2);
    screening_qsComponents.push(button3);
    screening_qsComponents.push(button4);
    screening_qsComponents.push(button5);
    screening_qsComponents.push(mouse);
    screening_qsComponents.push(btxt1);
    screening_qsComponents.push(btxt2);
    screening_qsComponents.push(btxt3);
    screening_qsComponents.push(btxt4);
    screening_qsComponents.push(btxt5);
    
    screening_qsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
function screening_qsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'screening_qs'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = screening_qsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_screening===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *button1* updates
    if (t >= 0.0 && button1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button1.tStart = t;  // (not accounting for frame time here)
      button1.frameNStart = frameN;  // exact frame index
      
      button1.setAutoDraw(true);
    }

    
    // *button2* updates
    if (t >= 0.0 && button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button2.tStart = t;  // (not accounting for frame time here)
      button2.frameNStart = frameN;  // exact frame index
      
      button2.setAutoDraw(true);
    }

    
    // *button3* updates
    if (t >= 0.0 && button3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button3.tStart = t;  // (not accounting for frame time here)
      button3.frameNStart = frameN;  // exact frame index
      
      button3.setAutoDraw(true);
    }

    
    // *button4* updates
    if (t >= 0.0 && button4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button4.tStart = t;  // (not accounting for frame time here)
      button4.frameNStart = frameN;  // exact frame index
      
      button4.setAutoDraw(true);
    }

    
    // *button5* updates
    if (t >= 0.0 && button5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button5.tStart = t;  // (not accounting for frame time here)
      button5.frameNStart = frameN;  // exact frame index
      
      button5.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = mouse.getPressed();
      if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = buttons;
        if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button1, button2, button3, button4, button5]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *btxt1* updates
    if (t >= 0.0 && btxt1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt1.tStart = t;  // (not accounting for frame time here)
      btxt1.frameNStart = frameN;  // exact frame index
      
      btxt1.setAutoDraw(true);
    }

    
    // *btxt2* updates
    if (t >= 0.0 && btxt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt2.tStart = t;  // (not accounting for frame time here)
      btxt2.frameNStart = frameN;  // exact frame index
      
      btxt2.setAutoDraw(true);
    }

    
    // *btxt3* updates
    if (t >= 0.0 && btxt3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt3.tStart = t;  // (not accounting for frame time here)
      btxt3.frameNStart = frameN;  // exact frame index
      
      btxt3.setAutoDraw(true);
    }

    
    // *btxt4* updates
    if (t >= 0.0 && btxt4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt4.tStart = t;  // (not accounting for frame time here)
      btxt4.frameNStart = frameN;  // exact frame index
      
      btxt4.setAutoDraw(true);
    }

    
    // *btxt5* updates
    if (t >= 0.0 && btxt5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt5.tStart = t;  // (not accounting for frame time here)
      btxt5.frameNStart = frameN;  // exact frame index
      
      btxt5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    screening_qsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var screeningQ1_resp;
var screeningQ2_resp;
function screening_qsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'screening_qs'-------
    screening_qsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((screening_msg_counter===0)) {
        screeningQ1_resp=mouse.clicked_name[0]; //slider.getRating();
        if ((screeningQ1_resp === 'button4')) {
            screeningQ1_passed=1;
            }
        psychoJS.experiment.addData('screeningQ1', screeningQ1_passed);
        }
    
    if ((screening_msg_counter===1)) {
        screeningQ2_resp=mouse.clicked_name[0]//slider.getRating();
        if ((screeningQ2_resp === 'button3')) {
            screeningQ2_passed=1;
            }
        psychoJS.experiment.addData('screeningQ2', screeningQ2_passed);
        }
    
    screening_msg_counter=screening_msg_counter+1;
    
    if ((screening_msg_counter===2)) {
        if ((screeningQ1_passed===0 && screeningQ2_passed===0)) {
            terminate_expt=1;
            final_msg="Sorry captain, it looks like you failed both attention checks and cannot continue with the study. Please press space to return to Prolific. Even though you will see the completion code, you will need to return the submission to avoid it being rejected. Thank you for following through.";
            }
    }
    
    
    
    
    // store data for thisExp (ExperimentHandler)
    const xys = mouse.getPos();
    const buttons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', xys[0]);
    psychoJS.experiment.addData('mouse.y', xys[1]);
    psychoJS.experiment.addData('mouse.leftButton', buttons[0]);
    psychoJS.experiment.addData('mouse.midButton', buttons[1]);
    psychoJS.experiment.addData('mouse.rightButton', buttons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    // the Routine "screening_qs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var addtext;
var demographic_question;
var _demo_resp_allKeys;
var demographicsComponents;
function demographicsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'demographics'-------
    t = 0;
    demographicsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // define function to load demographic questions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "resources/instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })(); 
    
    // initialise input text
    addtext='';
    psychoJS.eventManager.clearKeys()
    
    if ((demographic_msg_counter===0)) {
    demographic_question=instructions.demographics.page1
    }
    
    if ((demographic_msg_counter===1)) {
    demographic_question=instructions.demographics.page2
    }
    demographics_txt.setText(demographic_question);
    demo_resp.keys = undefined;
    demo_resp.rt = undefined;
    _demo_resp_allKeys = [];
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(demographics_txt);
    demographicsComponents.push(demographics_input);
    demographicsComponents.push(demo_resp);
    
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var numericKeys;
function demographicsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'demographics'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_demographics===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // display text on screen
    numericKeys=['0','1','2','3','4','5','6','7','8','9'];
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1','2','3','4','5','6','7','8','9','0', 'backspace','return']});
    
    if (theseKeys[0] !== "return") {
        if (theseKeys[0] === "backspace") {
            addtext = addtext.substring((addtext.length-1), -1);
        } else if (numericKeys.includes(theseKeys[0])) {
            if (addtext.length < 2) {
            addtext = String(addtext)+String(theseKeys[0]);
            }
        }
    } else if (theseKeys[0] === "return") {        
            if ((demographic_msg_counter===0)) {
                age=addtext
                    if (addtext.length === 2) {
                        continueRoutine = false;
                     }
                }
            
            if ((demographic_msg_counter===1)) {
                gender=addtext
                    if (addtext.length === 1) {
                        continueRoutine = false;
                     }
                }
          }
    
    // *demographics_txt* updates
    if (t >= 0.0 && demographics_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_txt.tStart = t;  // (not accounting for frame time here)
      demographics_txt.frameNStart = frameN;  // exact frame index
      
      demographics_txt.setAutoDraw(true);
    }

    
    // *demographics_input* updates
    if (t >= 0.0 && demographics_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_input.tStart = t;  // (not accounting for frame time here)
      demographics_input.frameNStart = frameN;  // exact frame index
      
      demographics_input.setAutoDraw(true);
    }

    
    if (demographics_input.status === PsychoJS.Status.STARTED){ // only update if being drawn
      demographics_input.setText(addtext);
    }
    
    // *demo_resp* updates
    if (t >= 0.0 && demo_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_resp.tStart = t;  // (not accounting for frame time here)
      demo_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demo_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demo_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demo_resp.clearEvents(); });
    }

    if (demo_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = demo_resp.getKeys({keyList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'return'], waitRelease: false});
      _demo_resp_allKeys = _demo_resp_allKeys.concat(theseKeys);
      if (_demo_resp_allKeys.length > 0) {
        demo_resp.keys = _demo_resp_allKeys[_demo_resp_allKeys.length - 1].name;  // just the last key pressed
        demo_resp.rt = _demo_resp_allKeys[_demo_resp_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    demographicsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographicsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'demographics'-------
    demographicsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((demographic_msg_counter===0)) {
        psychoJS.experiment.addData('age', (Number(age)));
        }
    
    if ((demographic_msg_counter===1)) {
        psychoJS.experiment.addData('gender', (Number(gender)));
        }
        
    
    demographic_msg_counter=demographic_msg_counter+1;
    
    
    // save data
            if (Number(age)>40){
            terminate_expt=1
            final_msg="Sorry captain, it looks like you are over the age limit for this experiment and cannot continue. Please press space to return to Prolific. Even though you will see the completion code, you will need to return the submission to avoid it being rejected. Thank you for following through.";
            }
            
            
            
    
    psychoJS.experiment.addData('demo_resp.keys', demo_resp.keys);
    if (typeof demo_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demo_resp.rt', demo_resp.rt);
        }
    
    demo_resp.stop();
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var task_instruction_txt;
var _key_resp_allKeys;
var task_instrucComponents;
function task_instrucRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'task_instruc'-------
    t = 0;
    task_instrucClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // define function to load task instructions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "resources/instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })(); 
    
    if ((task_instruc_msg_counter==0)) {
        task_instruction_txt=instructions.task.page1
    }
    
    if ((task_instruc_msg_counter==1)) {
        task_instruction_txt=instructions.task.page2
    }
    
    if ((task_instruc_msg_counter==2)) {
        task_instruction_txt=instructions.task.page3
    }
    
    if ((task_instruc_msg_counter==3)) {
        task_instruction_txt=instructions.task.page4
    }
    
    if ((task_instruc_msg_counter==4)) {
        task_instruction_txt=instructions.task.page5
    }
    
    if ((task_instruc_msg_counter==5)) {
        task_instruction_txt=instructions.task.page6
    }
    
    if ((task_instruc_msg_counter==6)) {
        task_instruction_txt=instructions.task.page7
    }
    
    if ((task_instruc_msg_counter==7)) {
        task_instruction_txt=instructions.task.page8
    }
    
    if ((task_instruc_msg_counter==8)) {
        task_instruction_txt=instructions.task.page9
    }
    
    if ((task_instruc_msg_counter==9)) {
        task_instruc_img_opacity=0;
        task_instruc_txt_pos=[0,0];
        task_instruc_space_txt_pos=[0, -0.1]
        task_instruction_txt=instructions.task.page10
    }
    
    
    
    instruc_txt.setPos(task_instruc_txt_pos);
    instruc_txt.setText(task_instruction_txt);
    instruc_image.setOpacity(task_instruc_img_opacity);
    instruc_image.setImage(instruc_imgs[task_instruc_msg_counter]);
    text_4.setPos(task_instruc_space_txt_pos);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    task_instrucComponents = [];
    task_instrucComponents.push(instruc_txt);
    task_instrucComponents.push(instruc_image);
    task_instrucComponents.push(text_4);
    task_instrucComponents.push(key_resp);
    
    task_instrucComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function task_instrucRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'task_instruc'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = task_instrucClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_task_instruc===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *instruc_txt* updates
    if (t >= 0.0 && instruc_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruc_txt.tStart = t;  // (not accounting for frame time here)
      instruc_txt.frameNStart = frameN;  // exact frame index
      
      instruc_txt.setAutoDraw(true);
    }

    
    // *instruc_image* updates
    if (t >= 0.0 && instruc_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruc_image.tStart = t;  // (not accounting for frame time here)
      instruc_image.frameNStart = frameN;  // exact frame index
      
      instruc_image.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_instrucComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_instrucRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'task_instruc'-------
    task_instrucComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    task_instruc_msg_counter=task_instruc_msg_counter+1;
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "task_instruc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var curr_blk;
var blk_instruc_txt;
var slow_idx;
var medium_idx;
var fast_idx;
var center_svals;
var bound;
var isld_rvals;
var mean_reward_blk;
var _blk_instruc_resp_allKeys;
var blk_instrucComponents;
function blk_instrucRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'blk_instruc'-------
    t = 0;
    blk_instrucClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    blk_idx=blk_idx+1;
    curr_blk = blk_order[blk_idx];
    curr_blk_number=curr_blk_number+1;
    fbk_opacity=1; // restore fbk opacity for block in case it was changed
    
    if ((curr_blk===1)) {
        blk_instruc_txt='The seas are stormy!\n\nIn this block, storms will mean you can only navigate to a specific island when setting sail from your current island.\n\nLike any swashbuckling pirate with a thirst for riches, try to earn as many gold medallions as you can during the block, as this will increase your bonus payment!\n\n\n\nPress enter to begin'
    }
    
    if ((curr_blk===2)) {
        blk_instruc_txt='The seas are calm.\n\nIn this block, calm seas will allow you to navigate to any island when setting sail from your current island.\n\nLike any swashbuckling pirate with a thirst for riches, try to earn as many gold medallions as you can during the block as this will increase your bonus payment!\n\n\n\nPress enter to begin'
    }
    
    // Shuffle the replenish rates assigned to each patch at the start of the block
    shuffle(isld_replen_rates)
    
    // figure out assignment index for slow patch
    if ((isld_replen_rates[0]===initial_replen_rates[0])) {
        slow_idx=0;
    }
    if ((isld_replen_rates[0]===initial_replen_rates[1])) {
        slow_idx=1;
    }
    if ((isld_replen_rates[0]===initial_replen_rates[2])) {
        slow_idx=2;
    }
    
    // figure out assignment index for medium patch
    if ((isld_replen_rates[1]===initial_replen_rates[0])) {
        medium_idx=0;
    }
    if ((isld_replen_rates[1]===initial_replen_rates[1])) {
        medium_idx=1;
    }
    if ((isld_replen_rates[1]===initial_replen_rates[2])) {
        medium_idx=2;
    }
    
    // figure out assignment index for fast patch
    if ((isld_replen_rates[2]===initial_replen_rates[0])) {
        fast_idx=0;
    }
    if ((isld_replen_rates[2]===initial_replen_rates[1])) {
        fast_idx=1;
    }
    if ((isld_replen_rates[2]===initial_replen_rates[2])) {
        fast_idx=2;
    }
    
    console.log(isld_replen_rates)
    
    // reset object start values and a value vector that can be updated during the block
    isld_svals = [100, 100, 100];
    //isld_rvals = [100, 100, 100];
    
    // start patch values at random points around the mean
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    center_svals=(69+79)/2;
    bound=5;
    isld_rvals=[];
    var i;
    for (i = 0; i < 3; i++) {
      isld_rvals[i]=getRandomInt(center_svals-bound,center_svals+bound);
    }
    
    // reset block points
    points_blk=0;
    mean_reward_blk=0;
    
    psychoJS.experiment.addData('starting values', isld_svals);
    psychoJS.experiment.addData('reward vector to manipulate', isld_rvals); // should be initialised at starting values
    psychoJS.experiment.addData('decay_rate', k);
    psychoJS.experiment.addData('replenish rates', isld_replen_rates);
    psychoJS.experiment.addData('travel_duration', travel_duration);
    psychoJS.experiment.addData('feedback_duration', fbk_duration);
    
    blk_txt.setText(blk_instruc_txt);
    blk_instruc_resp.keys = undefined;
    blk_instruc_resp.rt = undefined;
    _blk_instruc_resp_allKeys = [];
    // keep track of which components have finished
    blk_instrucComponents = [];
    blk_instrucComponents.push(blk_txt);
    blk_instrucComponents.push(blk_instruc_resp);
    
    blk_instrucComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function blk_instrucRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'blk_instruc'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = blk_instrucClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *blk_txt* updates
    if (t >= 0.0 && blk_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk_txt.tStart = t;  // (not accounting for frame time here)
      blk_txt.frameNStart = frameN;  // exact frame index
      
      blk_txt.setAutoDraw(true);
    }

    
    // *blk_instruc_resp* updates
    if (t >= 0.0 && blk_instruc_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk_instruc_resp.tStart = t;  // (not accounting for frame time here)
      blk_instruc_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { blk_instruc_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { blk_instruc_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { blk_instruc_resp.clearEvents(); });
    }

    if (blk_instruc_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = blk_instruc_resp.getKeys({keyList: ['return'], waitRelease: false});
      _blk_instruc_resp_allKeys = _blk_instruc_resp_allKeys.concat(theseKeys);
      if (_blk_instruc_resp_allKeys.length > 0) {
        blk_instruc_resp.keys = _blk_instruc_resp_allKeys[_blk_instruc_resp_allKeys.length - 1].name;  // just the last key pressed
        blk_instruc_resp.rt = _blk_instruc_resp_allKeys[_blk_instruc_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blk_instrucComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blk_instrucRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'blk_instruc'-------
    blk_instrucComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // reset total actions for the new block
    actions_blk=0;
    
    
    
    psychoJS.experiment.addData('blk_instruc_resp.keys', blk_instruc_resp.keys);
    if (typeof blk_instruc_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('blk_instruc_resp.rt', blk_instruc_resp.rt);
        routineTimer.reset();
        }
    
    blk_instruc_resp.stop();
    // the Routine "blk_instruc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var forced_isld_num;
var cross1_pos;
var cross2_pos;
var box_col;
var actions_remaining;
var actions_remaining_msg;
var _sel_resp_allKeys;
var selectComponents;
function selectRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'select'-------
    t = 0;
    selectClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // if block type is forced, randomly select one patch the participant can travel to
    if ((curr_blk === 1)) {
        //forced_isld_num = Math.ceil(Math.random() * 3)
        shuffle(alt_islds)
        forced_isld_num = alt_islds[0];
        keys_allowed = [];
        cross_opacity=1;
        if ((forced_isld_num === 1)) {
            keys_allowed = "f";
            box_pos = [(- 0.3), (- 0.35)];
            cross1_pos =[0, 0.15];
            cross2_pos = [0.3, (- 0.35)];
        }
        if ((forced_isld_num === 2)) {
            keys_allowed = "j";
            box_pos = [0, 0.15];
            cross1_pos = [(- 0.3), (- 0.35)];
            cross2_pos = [0.3, (- 0.35)];
        }
        if ((forced_isld_num === 3)) {
            keys_allowed = "k";
            box_pos = [0.3, (- 0.35)];
            cross1_pos = [(- 0.3), (- 0.35)];
            cross2_pos = [0, 0.15];
        }
    }
    
    // if block type is free allow both alternative keys to be pressed
    if ((curr_blk === 2)) {
        box_pos = [0, 0];
        box_col = ocean_col;
        keys_allowed = ['f', 'j', 'k'];
        cross1_pos=[0,0];
        cross2_pos=[0,0];
        cross_opacity=0;
        
        // set alt islands
        if ((curr_isld !==10)) {
            
            if ((curr_isld === 1)) {
                keys_allowed=['j','k'];
            }
        
            if ((curr_isld === 2)) {
                keys_allowed=['f','k'];
            }
        
            if ((curr_isld === 3)) {
                keys_allowed=['f','j'];
                }
            }
    }
    
    // set remaining actions to display to participant
    actions_remaining=total_actions_allowed-actions_blk;
    actions_remaining_msg='Actions left in block: ' + actions_remaining.toString();
    ocean_select.setPos(ocean_pos);
    ocean_select.setSize(ocean_size);
    isld1_select.setPos(isld1_pos);
    isld1_select.setSize(isld_size);
    isld1_select.setFillColor(new util.Color(isld_col));
    isld1_select.setLineColor(new util.Color(isld_col));
    isld2_select.setPos(isld2_pos);
    isld2_select.setSize(isld_size);
    isld3_select.setPos(isld3_pos);
    isld3_select.setSize(isld_size);
    Select_txt.setPos(center_txt_pos);
    forced_choice_box.setOpacity(box_opacity);
    forced_choice_box.setPos(box_pos);
    forced_choice_box.setSize(box_size);
    Select_F.setOpacity(f_key_opacity);
    Select_F.setPos(f_keypos);
    Select_F.setText(f_key_txt);
    Select_J.setOpacity(j_key_opacity);
    Select_J.setPos(j_keypos);
    Select_J.setText(j_key_txt);
    Select_K.setOpacity(k_key_opacity);
    Select_K.setPos(k_keypos);
    Select_K.setText(k_key_txt);
    Select_Cross1.setOpacity(cross_opacity);
    Select_Cross1.setPos(cross1_pos);
    Select_Cross1.setHeight(cross_size);
    Select_Cross2.setOpacity(cross_opacity);
    Select_Cross2.setPos(cross2_pos);
    Select_Cross2.setHeight(cross_size);
    agent_img.setPos(ship_pos);
    agent_img.setSize(agent_size);
    Select_act_count.setPos(action_msg_pos);
    Select_act_count.setText(actions_remaining_msg);
    Select_act_count.setHeight(action_msg_size);
    sel_resp.keys = undefined;
    sel_resp.rt = undefined;
    _sel_resp_allKeys = [];
    // keep track of which components have finished
    selectComponents = [];
    selectComponents.push(ocean_select);
    selectComponents.push(isld1_select);
    selectComponents.push(isld2_select);
    selectComponents.push(isld3_select);
    selectComponents.push(Select_txt);
    selectComponents.push(forced_choice_box);
    selectComponents.push(Select_F);
    selectComponents.push(Select_J);
    selectComponents.push(Select_K);
    selectComponents.push(Select_Cross1);
    selectComponents.push(Select_Cross2);
    selectComponents.push(agent_img);
    selectComponents.push(Select_act_count);
    selectComponents.push(sel_resp);
    
    selectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var valid_keypress;
function selectRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'select'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = selectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // if a valid key is pressed, end this part of the trial
    valid_keypress=keys_allowed.includes(sel_resp.keys);
    if ((valid_keypress===true)) {
        continueRoutine=false;
        }
    
    // if the total actions allowed in the block have been taken, end the block
    if ((actions_remaining===0)) {
        curr_pos = [0, 0];
        ship_pos = [0, 0];
        curr_isld = 10;
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *ocean_select* updates
    if (t >= 0.0 && ocean_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ocean_select.tStart = t;  // (not accounting for frame time here)
      ocean_select.frameNStart = frameN;  // exact frame index
      
      ocean_select.setAutoDraw(true);
    }

    
    // *isld1_select* updates
    if (t >= 0.0 && isld1_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld1_select.tStart = t;  // (not accounting for frame time here)
      isld1_select.frameNStart = frameN;  // exact frame index
      
      isld1_select.setAutoDraw(true);
    }

    
    // *isld2_select* updates
    if (t >= 0.0 && isld2_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld2_select.tStart = t;  // (not accounting for frame time here)
      isld2_select.frameNStart = frameN;  // exact frame index
      
      isld2_select.setAutoDraw(true);
    }

    
    // *isld3_select* updates
    if (t >= 0.0 && isld3_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld3_select.tStart = t;  // (not accounting for frame time here)
      isld3_select.frameNStart = frameN;  // exact frame index
      
      isld3_select.setAutoDraw(true);
    }

    
    // *Select_txt* updates
    if (t >= 0.0 && Select_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Select_txt.tStart = t;  // (not accounting for frame time here)
      Select_txt.frameNStart = frameN;  // exact frame index
      
      Select_txt.setAutoDraw(true);
    }

    
    // *forced_choice_box* updates
    if (t >= 0.0 && forced_choice_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      forced_choice_box.tStart = t;  // (not accounting for frame time here)
      forced_choice_box.frameNStart = frameN;  // exact frame index
      
      forced_choice_box.setAutoDraw(true);
    }

    
    // *Select_F* updates
    if (t >= 0.0 && Select_F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Select_F.tStart = t;  // (not accounting for frame time here)
      Select_F.frameNStart = frameN;  // exact frame index
      
      Select_F.setAutoDraw(true);
    }

    
    // *Select_J* updates
    if (t >= 0.0 && Select_J.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Select_J.tStart = t;  // (not accounting for frame time here)
      Select_J.frameNStart = frameN;  // exact frame index
      
      Select_J.setAutoDraw(true);
    }

    
    // *Select_K* updates
    if (t >= 0.0 && Select_K.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Select_K.tStart = t;  // (not accounting for frame time here)
      Select_K.frameNStart = frameN;  // exact frame index
      
      Select_K.setAutoDraw(true);
    }

    
    // *Select_Cross1* updates
    if (t >= 0.0 && Select_Cross1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Select_Cross1.tStart = t;  // (not accounting for frame time here)
      Select_Cross1.frameNStart = frameN;  // exact frame index
      
      Select_Cross1.setAutoDraw(true);
    }

    
    // *Select_Cross2* updates
    if (t >= 0.0 && Select_Cross2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Select_Cross2.tStart = t;  // (not accounting for frame time here)
      Select_Cross2.frameNStart = frameN;  // exact frame index
      
      Select_Cross2.setAutoDraw(true);
    }

    
    // *agent_img* updates
    if (t >= 0.0 && agent_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_img.tStart = t;  // (not accounting for frame time here)
      agent_img.frameNStart = frameN;  // exact frame index
      
      agent_img.setAutoDraw(true);
    }

    
    // *Select_act_count* updates
    if (t >= 0.0 && Select_act_count.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Select_act_count.tStart = t;  // (not accounting for frame time here)
      Select_act_count.frameNStart = frameN;  // exact frame index
      
      Select_act_count.setAutoDraw(true);
    }

    
    // *sel_resp* updates
    if (t >= 0.0 && sel_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sel_resp.tStart = t;  // (not accounting for frame time here)
      sel_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sel_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sel_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sel_resp.clearEvents(); });
    }

    if (sel_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = sel_resp.getKeys({keyList: ['f', 'j', 'k'], waitRelease: false});
      _sel_resp_allKeys = _sel_resp_allKeys.concat(theseKeys);
      if (_sel_resp_allKeys.length > 0) {
        sel_resp.keys = _sel_resp_allKeys[_sel_resp_allKeys.length - 1].name;  // just the last key pressed
        sel_resp.rt = _sel_resp_allKeys[_sel_resp_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    selectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var rew_pos;
var treasure_pos_orig;
var exploit_actions;
function selectRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'select'-------
    selectComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // set reward position based on island selected
    rew_pos = [];
    if ((sel_resp.keys === "f")) {
        rew_pos = [(- 0.3), (- 0.25)];
        treasure_pos=[(- 0.265), (- 0.25)];
        curr_isld = 1; // index into isld_rvals
    }
    if ((sel_resp.keys === "j")) {
        rew_pos = [0, 0.25];
        treasure_pos=[0.035, 0.25];
        curr_isld = 2;
    }
    if ((sel_resp.keys === "k")) {
        rew_pos = [0.3, (- 0.25)];
        treasure_pos = [0.335, (- 0.25)];
        curr_isld = 3;
    }
    
    // store a backup copy
    treasure_pos_orig=[];
    treasure_pos_orig=[...treasure_pos];
    
    // set local action counter for upcoming island
    exploit_actions = 0;
    
    // update action counters
    actions_blk=(actions_blk + 1);
    total_actions=(total_actions + 1);
    actions_remaining=total_actions_allowed-actions_blk;
    
    // save data
    psychoJS.experiment.addData('blk_number', curr_blk_number);
    psychoJS.experiment.addData('blk_type', curr_blk); // 1 for forced choice, 2 for free choice
    psychoJS.experiment.addData('mean reward block', Math.floor(mean_reward_blk)); 
    psychoJS.experiment.addData('current patch position', curr_isld); // 1=left, 2=top, 3=right
    psychoJS.experiment.addData('patch value left', Math.floor(isld_rvals[0])); 
    psychoJS.experiment.addData('patch value top', Math.floor(isld_rvals[1])); 
    psychoJS.experiment.addData('patch value right', Math.floor(isld_rvals[2])); 
    psychoJS.experiment.addData('patch replenish left', isld_replen_rates[0]); 
    psychoJS.experiment.addData('patch replenish top', isld_replen_rates[1]); 
    psychoJS.experiment.addData('patch replenish right', isld_replen_rates[2]); 
    psychoJS.experiment.addData('current patch replenish rate', isld_replen_rates[curr_isld-1]); // 1=slow, 2=medium, 3=fast
    psychoJS.experiment.addData('patch value slow', Math.floor(isld_rvals[slow_idx])); 
    psychoJS.experiment.addData('patch value medium', Math.floor(isld_rvals[medium_idx])); 
    psychoJS.experiment.addData('patch value fast', Math.floor(isld_rvals[fast_idx])); 
    psychoJS.experiment.addData('patch replenish slow', isld_replen_rates[slow_idx]); 
    psychoJS.experiment.addData('patch replenish medium', isld_replen_rates[medium_idx]); 
    psychoJS.experiment.addData('patch replenish fast', isld_replen_rates[fast_idx]); 
    psychoJS.experiment.addData('decision type', 1); // Use 1 for select, 2 for stay, 3 for leave
    psychoJS.experiment.addData('trial phase', 1); // 1 for select, 2 for travel, 3 for exploit/stay decision, 4 for exploit feedback
    
    // selection variables
    psychoJS.experiment.addData('patch_selection_key', sel_resp.keys);
    psychoJS.experiment.addData('patch_selection_RT', sel_resp.rt);
    
    // exploit loop variables
    psychoJS.experiment.addData('actual_rew_gain', 0);
    psychoJS.experiment.addData('rew_fbk_displayed', 0);
    psychoJS.experiment.addData('blk_points', Math.floor(points_blk));
    psychoJS.experiment.addData('blk_actions', actions_blk);
    psychoJS.experiment.addData('exploit_phase_key', 'N/A');
    psychoJS.experiment.addData('exploit_phase_RT', 0);
    psychoJS.experiment.addData('num_exploit_actions', 0);
    
    
    // broader variables
    psychoJS.experiment.addData('mean reward entire experiment', Math.floor(mean_reward_entire_experiment));
    psychoJS.experiment.addData('total_points', Math.floor(total_points));
    psychoJS.experiment.addData('total_actions', total_actions);
    psychoJS.experiment.addData('actions_remaining', actions_remaining);
    psychoJS.experiment.addData('time in patch (seconds)', 0);
    psychoJS.experiment.nextEntry()
    
    // update patch values following selection
        isld_rvals[0] = (isld_rvals[0] + isld_replen_rates[0]*(100-isld_rvals[0]));
        isld_rvals[1] = (isld_rvals[1] + isld_replen_rates[1]*(100-isld_rvals[1]));
        isld_rvals[2] = (isld_rvals[2] + isld_replen_rates[2]*(100-isld_rvals[2]));
    
        // if the values exceed the maximum value, set them to the maximum
        if ((isld_rvals[0] > isld_svals[0])) {
            isld_rvals[0] = isld_svals[0];
        }
        if ((isld_rvals[1] > isld_svals[1])) {
            isld_rvals[1] = isld_svals[1];
        }
        if ((isld_rvals[2] > isld_svals[2])) {
            isld_rvals[2] = isld_svals[2];
        }
    
    
    psychoJS.experiment.addData('sel_resp.keys', sel_resp.keys);
    if (typeof sel_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sel_resp.rt', sel_resp.rt);
        }
    
    sel_resp.stop();
    // the Routine "select" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var direction;
var travelComponents;
function travelRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'travel'-------
    t = 0;
    travelClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // set the goal position depending on button press
    if ((sel_resp.keys === "f")) {
        goal_pos=[0,0];
        goal_pos[0]=isld1_pos[0]+0.1;
        goal_pos[1]=isld1_pos[1]+0.1;
        direction = "left";
    }
    if ((sel_resp.keys === "j")) {
        goal_pos=[0,0];
        goal_pos[0]=isld2_pos[0];
        goal_pos[1]=isld2_pos[1]-0.1;
        direction = "up";
    }
    if ((sel_resp.keys === "k")) {
        goal_pos=[0,0];
        goal_pos[0]=isld3_pos[0]-0.1;
        goal_pos[1]=isld3_pos[1]+0.1;
        direction = "right";
    }
    
    // set current pos to ship pos
    curr_pos = ship_pos;
    
    // set remaining actions to display to participant
    actions_remaining=total_actions_allowed-actions_blk;
    
    if ((actions_remaining<0)) {
        actions_remaining=0;
        }
    
    actions_remaining_msg='Actions left in block: ' + actions_remaining.toString();
    
    
    ocean_select_2.setPos(ocean_pos);
    ocean_select_2.setSize(ocean_size);
    isld1_select_2.setPos(isld1_pos);
    isld1_select_2.setSize(isld_size);
    isld2_select_2.setPos(isld2_pos);
    isld2_select_2.setSize(isld_size);
    isld3_select_2.setPos(isld3_pos);
    isld3_select_2.setSize(isld_size);
    agent_select.setPos(ship_pos);
    agent_select.setSize(agent_size);
    text.setPos(center_txt_pos);
    travel_action_count.setPos(action_msg_pos);
    travel_action_count.setText(actions_remaining_msg);
    travel_action_count.setHeight(action_msg_size);
    // keep track of which components have finished
    travelComponents = [];
    travelComponents.push(ocean_select_2);
    travelComponents.push(isld1_select_2);
    travelComponents.push(isld2_select_2);
    travelComponents.push(isld3_select_2);
    travelComponents.push(agent_select);
    travelComponents.push(text);
    travelComponents.push(travel_action_count);
    
    travelComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function travelRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'travel'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = travelClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // if the total actions allowed in the block have been taken, end the block
    if ((actions_remaining===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    
    // *ocean_select_2* updates
    if (t >= 0.0 && ocean_select_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ocean_select_2.tStart = t;  // (not accounting for frame time here)
      ocean_select_2.frameNStart = frameN;  // exact frame index
      
      ocean_select_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ocean_select_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ocean_select_2.setAutoDraw(false);
    }
    
    // *isld1_select_2* updates
    if (t >= 0.0 && isld1_select_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld1_select_2.tStart = t;  // (not accounting for frame time here)
      isld1_select_2.frameNStart = frameN;  // exact frame index
      
      isld1_select_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isld1_select_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isld1_select_2.setAutoDraw(false);
    }
    
    // *isld2_select_2* updates
    if (t >= 0.0 && isld2_select_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld2_select_2.tStart = t;  // (not accounting for frame time here)
      isld2_select_2.frameNStart = frameN;  // exact frame index
      
      isld2_select_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isld2_select_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isld2_select_2.setAutoDraw(false);
    }
    
    // *isld3_select_2* updates
    if (t >= 0.0 && isld3_select_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld3_select_2.tStart = t;  // (not accounting for frame time here)
      isld3_select_2.frameNStart = frameN;  // exact frame index
      
      isld3_select_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isld3_select_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isld3_select_2.setAutoDraw(false);
    }
    
    // *agent_select* updates
    if (t >= 0.0 && agent_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_select.tStart = t;  // (not accounting for frame time here)
      agent_select.frameNStart = frameN;  // exact frame index
      
      agent_select.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (agent_select.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      agent_select.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    if (text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text.setText(travel_msg);
    }
    
    // *travel_action_count* updates
    if (t >= 0.0 && travel_action_count.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      travel_action_count.tStart = t;  // (not accounting for frame time here)
      travel_action_count.frameNStart = frameN;  // exact frame index
      
      travel_action_count.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (travel_action_count.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      travel_action_count.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    travelComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function travelRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'travel'-------
    travelComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the position of the agent
    ship_pos[0]=goal_pos[0];
    ship_pos[1]=goal_pos[1];
    
    // save data
    psychoJS.experiment.addData('blk_number', curr_blk_number);
    psychoJS.experiment.addData('blk_type', curr_blk); // 1 for forced choice, 2 for free choice
    psychoJS.experiment.addData('mean reward block', Math.floor(mean_reward_blk)); 
    psychoJS.experiment.addData('current patch position', curr_isld); // 1=left, 2=top, 3=right
    psychoJS.experiment.addData('patch value left', Math.floor(isld_rvals[0])); 
    psychoJS.experiment.addData('patch value top', Math.floor(isld_rvals[1])); 
    psychoJS.experiment.addData('patch value right', Math.floor(isld_rvals[2])); 
    psychoJS.experiment.addData('patch replenish left', isld_replen_rates[0]); 
    psychoJS.experiment.addData('patch replenish top', isld_replen_rates[1]); 
    psychoJS.experiment.addData('patch replenish right', isld_replen_rates[2]); 
    psychoJS.experiment.addData('current patch replenish rate', isld_replen_rates[curr_isld-1]); // 1=slow, 2=medium, 3=fast
    psychoJS.experiment.addData('patch value slow', Math.floor(isld_rvals[slow_idx])); 
    psychoJS.experiment.addData('patch value medium', Math.floor(isld_rvals[medium_idx])); 
    psychoJS.experiment.addData('patch value fast', Math.floor(isld_rvals[fast_idx])); 
    psychoJS.experiment.addData('patch replenish slow', isld_replen_rates[slow_idx]); 
    psychoJS.experiment.addData('patch replenish medium', isld_replen_rates[medium_idx]); 
    psychoJS.experiment.addData('patch replenish fast', isld_replen_rates[fast_idx]); 
    psychoJS.experiment.addData('decision type', 0); // Use 1 for select, 2 for stay, 3 for leave
    psychoJS.experiment.addData('trial phase', 2); // 1 for select, 2 for travel, 3 for exploit/stay decision, 4 for exploit feedback
    
    // selection variables
    psychoJS.experiment.addData('patch_selection_key', 0);
    psychoJS.experiment.addData('patch_selection_RT', 0);
    
    // exploit loop variables
    psychoJS.experiment.addData('actual_rew_gain', 0);
    psychoJS.experiment.addData('rew_fbk_displayed', 0);
    psychoJS.experiment.addData('blk_points', Math.floor(points_blk));
    psychoJS.experiment.addData('blk_actions', actions_blk);
    psychoJS.experiment.addData('exploit_phase_key', 'N/A');
    psychoJS.experiment.addData('exploit_phase_RT', 0);
    psychoJS.experiment.addData('num_exploit_actions', 0);
    
    // broader variables
    psychoJS.experiment.addData('mean reward entire experiment', Math.floor(mean_reward_entire_experiment));
    psychoJS.experiment.addData('total_points', Math.floor(total_points));
    psychoJS.experiment.addData('total_actions', total_actions);
    psychoJS.experiment.addData('actions_remaining', actions_remaining);
    psychoJS.experiment.addData('time in patch (seconds)', 0);
    psychoJS.experiment.nextEntry()
    
    
    // the Routine "travel" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var startTime;
var _exploit_resp_allKeys;
var exploitComponents;
function exploitRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'exploit'-------
    t = 0;
    exploitClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // set remaining actions to display to participant
    actions_remaining=total_actions_allowed-actions_blk;
    
    if ((actions_remaining<0)) {
        actions_remaining=0;
        }
    
    actions_remaining_msg='Actions left in block: ' + actions_remaining.toString();
    
    // if just entered patch, start timer
    if ((exploit_actions===0)) { 
        patchTime=0;
        startTime = Date.now();
    }
    ocean_exploit.setSize(ocean_size);
    isld1_exploit.setPos(isld1_pos);
    isld1_exploit.setSize(isld_size);
    isld2_exploit.setPos(isld2_pos);
    isld2_exploit.setSize(isld_size);
    isld3_exploit.setPos(isld3_pos);
    isld3_exploit.setSize(isld_size);
    agent_exploit.setPos(ship_pos);
    agent_exploit.setSize(agent_size);
    points_txt.setPos(rew_pos);
    points_txt.setText(rew_displayed);
    dig_sail_txt.setPos([0, 0]);
    exploit_action_count.setPos(action_msg_pos);
    exploit_action_count.setText(actions_remaining_msg);
    exploit_action_count.setHeight(action_msg_size);
    exploit_resp.keys = undefined;
    exploit_resp.rt = undefined;
    _exploit_resp_allKeys = [];
    // keep track of which components have finished
    exploitComponents = [];
    exploitComponents.push(ocean_exploit);
    exploitComponents.push(isld1_exploit);
    exploitComponents.push(isld2_exploit);
    exploitComponents.push(isld3_exploit);
    exploitComponents.push(agent_exploit);
    exploitComponents.push(points_txt);
    exploitComponents.push(dig_sail_txt);
    exploitComponents.push(exploit_action_count);
    exploitComponents.push(exploit_resp);
    
    exploitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function exploitRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'exploit'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = exploitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // force the first action to be a treasure dig
    if ((exploit_actions===0)) {
    valid_keypress=keys_first_exploit_allowed.includes(exploit_resp.keys);
    if ((valid_keypress===true)) {
        continueRoutine=false;
        }
    }
    
    // after one dig, allow digging or sailing responses
    if ((exploit_actions>0)) {
    valid_keypress=keys_exploit_allowed.includes(exploit_resp.keys);
    if ((valid_keypress===true)) {
        continueRoutine=false;
        }
    }
    
    // if the total actions allowed in the block have been taken, end the block
    if ((actions_remaining===0)) {
        continueRoutine=false;
        exploit_loop.finished=true;
        trials.finished=true;
        fbk_opacity=0; // don't display fbk if blocks ends with island selection
    }
    
    
    // *ocean_exploit* updates
    if (t >= 0.0 && ocean_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ocean_exploit.tStart = t;  // (not accounting for frame time here)
      ocean_exploit.frameNStart = frameN;  // exact frame index
      
      ocean_exploit.setAutoDraw(true);
    }

    
    // *isld1_exploit* updates
    if (t >= 0.0 && isld1_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld1_exploit.tStart = t;  // (not accounting for frame time here)
      isld1_exploit.frameNStart = frameN;  // exact frame index
      
      isld1_exploit.setAutoDraw(true);
    }

    
    // *isld2_exploit* updates
    if (t >= 0.0 && isld2_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld2_exploit.tStart = t;  // (not accounting for frame time here)
      isld2_exploit.frameNStart = frameN;  // exact frame index
      
      isld2_exploit.setAutoDraw(true);
    }

    
    // *isld3_exploit* updates
    if (t >= 0.0 && isld3_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld3_exploit.tStart = t;  // (not accounting for frame time here)
      isld3_exploit.frameNStart = frameN;  // exact frame index
      
      isld3_exploit.setAutoDraw(true);
    }

    
    // *agent_exploit* updates
    if (t >= 0.0 && agent_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_exploit.tStart = t;  // (not accounting for frame time here)
      agent_exploit.frameNStart = frameN;  // exact frame index
      
      agent_exploit.setAutoDraw(true);
    }

    
    // *points_txt* updates
    if (t >= 0.0 && points_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      points_txt.tStart = t;  // (not accounting for frame time here)
      points_txt.frameNStart = frameN;  // exact frame index
      
      points_txt.setAutoDraw(true);
    }

    
    // *dig_sail_txt* updates
    if (t >= 0.0 && dig_sail_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dig_sail_txt.tStart = t;  // (not accounting for frame time here)
      dig_sail_txt.frameNStart = frameN;  // exact frame index
      
      dig_sail_txt.setAutoDraw(true);
    }

    
    // *exploit_action_count* updates
    if (t >= 0.0 && exploit_action_count.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_action_count.tStart = t;  // (not accounting for frame time here)
      exploit_action_count.frameNStart = frameN;  // exact frame index
      
      exploit_action_count.setAutoDraw(true);
    }

    
    // *exploit_resp* updates
    if (t >= 0.0 && exploit_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_resp.tStart = t;  // (not accounting for frame time here)
      exploit_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exploit_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exploit_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exploit_resp.clearEvents(); });
    }

    if (exploit_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = exploit_resp.getKeys({keyList: ['space', 's'], waitRelease: false});
      _exploit_resp_allKeys = _exploit_resp_allKeys.concat(theseKeys);
      if (_exploit_resp_allKeys.length > 0) {
        exploit_resp.keys = _exploit_resp_allKeys[_exploit_resp_allKeys.length - 1].name;  // just the last key pressed
        exploit_resp.rt = _exploit_resp_allKeys[_exploit_resp_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exploitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var decision_type;
var rew_displayed_msg;
var base;
var power;
function exploitRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'exploit'-------
    exploitComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update exploit actions
    if ((exploit_resp.keys === "space")) {
    decision_type=2;
    }
    
    if ((exploit_resp.keys === "s")) {
        decision_type=3;
        }
    
    if ((actions_remaining>0)) { //get mean reward at point of decision
    mean_reward_blk=points_blk/actions_blk;
    mean_reward_entire_experiment=total_points/total_actions;
    }
    
    // compute the reward value of the current patch
    if ((exploit_actions===0)) { // if first action, use actual patch values
        rew_displayed = Math.floor(isld_rvals[(curr_isld - 1)]);
        rew_displayed_msg='+' + rew_displayed.toString();
        
        if (( Math.floor(isld_rvals[(curr_isld - 1)])===isld_svals[(curr_isld - 1)] )) {
            treasure_pos=[];
            treasure_pos=[treasure_pos_orig[0]+0.0075,treasure_pos_orig[1]];
            }
    }
    
    if ((exploit_actions>0)) { // if beyond first action, enact decay
        base = 1-k; // k is the decay parameter
        power = (exploit_actions);
        isld_rvals[(curr_isld - 1)] = isld_rvals[(curr_isld - 1)] * Math.pow(base, power);
        rew_displayed = Math.floor(isld_rvals[(curr_isld - 1)]);
        rew_displayed_msg='+' + rew_displayed.toString();
        }
    
    // display coin at normal position if two digit reward
    if (( Math.floor(isld_rvals[(curr_isld - 1)])<isld_svals[(curr_isld - 1)] )) {
            treasure_pos=[];
            treasure_pos=[treasure_pos_orig[0],treasure_pos_orig[1]];
        }
    
    
    // save data
    psychoJS.experiment.addData('blk_number', curr_blk_number);
    psychoJS.experiment.addData('blk_type', curr_blk); // 1 for forced choice, 2 for free choice
    psychoJS.experiment.addData('mean reward block', Math.floor(mean_reward_blk)); 
    psychoJS.experiment.addData('current patch position', curr_isld); // 1=left, 2=top, 3=right
    psychoJS.experiment.addData('patch value left', Math.floor(isld_rvals[0])); 
    psychoJS.experiment.addData('patch value top', Math.floor(isld_rvals[1])); 
    psychoJS.experiment.addData('patch value right', Math.floor(isld_rvals[2])); 
    psychoJS.experiment.addData('patch replenish left', isld_replen_rates[0]); 
    psychoJS.experiment.addData('patch replenish top', isld_replen_rates[1]); 
    psychoJS.experiment.addData('patch replenish right', isld_replen_rates[2]); 
    psychoJS.experiment.addData('current patch replenish rate', isld_replen_rates[curr_isld-1]); // 1=slow, 2=medium, 3=fast
    psychoJS.experiment.addData('patch value slow', Math.floor(isld_rvals[slow_idx])); 
    psychoJS.experiment.addData('patch value medium', Math.floor(isld_rvals[medium_idx])); 
    psychoJS.experiment.addData('patch value fast', Math.floor(isld_rvals[fast_idx])); 
    psychoJS.experiment.addData('patch replenish slow', isld_replen_rates[slow_idx]); 
    psychoJS.experiment.addData('patch replenish medium', isld_replen_rates[medium_idx]); 
    psychoJS.experiment.addData('patch replenish fast', isld_replen_rates[fast_idx]); 
    psychoJS.experiment.addData('decision type', decision_type); // Use 1 for select, 2 for stay, 3 for leave
    psychoJS.experiment.addData('trial phase', 3); // 1 for select, 2 for travel, 3 for exploit/stay decision, 4 for exploit feedback
    
    // selection variables
    psychoJS.experiment.addData('patch_selection_key', 0);
    psychoJS.experiment.addData('patch_selection_RT', 0);
    
    // exploit loop variables
    psychoJS.experiment.addData('actual_rew_gain', Math.floor(isld_rvals[(curr_isld - 1)]));
    psychoJS.experiment.addData('rew_fbk_displayed', rew_displayed);
    psychoJS.experiment.addData('blk_points', Math.floor(points_blk));
    psychoJS.experiment.addData('blk_actions', actions_blk);
    psychoJS.experiment.addData('exploit_phase_key', exploit_resp.keys);
    psychoJS.experiment.addData('exploit_phase_RT', exploit_resp.rt);
    
    if ((exploit_resp.keys === "space")) {
    psychoJS.experiment.addData('num_exploit_actions', 0);
    }
    
    if ((exploit_resp.keys === "s")) {
    psychoJS.experiment.addData('num_exploit_actions', exploit_actions); // just save on leaving to make analysis easier
    }
    
    // broader variables
    psychoJS.experiment.addData('mean reward entire experiment', Math.floor(mean_reward_entire_experiment));
    psychoJS.experiment.addData('total_points', Math.floor(total_points));
    psychoJS.experiment.addData('total_actions', total_actions);
    psychoJS.experiment.addData('actions_remaining', actions_remaining);
    psychoJS.experiment.addData('time in patch (seconds)', patchTime);
    psychoJS.experiment.nextEntry()
    
    // update action counters
    actions_blk=(actions_blk + 1);
    total_actions=(total_actions + 1);
    
    // update exploit actions
    if ((exploit_resp.keys === "space")) {
    exploit_actions = (exploit_actions + 1);
    }
    
    // update points
    if ((exploit_resp.keys === "space")) {
    if ((actions_remaining>0)) {
    points_blk=points_blk+isld_rvals[(curr_isld - 1)];
    total_points=total_points+isld_rvals[(curr_isld - 1)];
    }
    }
    
    if ((actions_remaining>0)) { //get mean reward at point of decision
    mean_reward_blk=points_blk/actions_blk;
    mean_reward_entire_experiment=total_points/total_actions;
    }
    
    // return to selection screen
    if ((exploit_resp.keys === "s")) {
        continueRoutine=false;
        exploit_loop.finished=true;
        trials.finished=true;
        }
    psychoJS.experiment.addData('exploit_resp.keys', exploit_resp.keys);
    if (typeof exploit_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exploit_resp.rt', exploit_resp.rt);
        }
    
    exploit_resp.stop();
    // the Routine "exploit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var exploit_fbkComponents;
function exploit_fbkRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'exploit_fbk'-------
    t = 0;
    exploit_fbkClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // set remaining actions to display to participant
    actions_remaining=total_actions_allowed-actions_blk;
    
    if ((actions_remaining<0)) {
        actions_remaining=0;
        }
    
    actions_remaining_msg='Actions left in block: ' + actions_remaining.toString();
    
    
    ocean_exploit_2.setSize(ocean_size);
    isld1_exploit_2.setPos(isld1_pos);
    isld1_exploit_2.setSize(isld_size);
    isld2_exploit_2.setPos(isld2_pos);
    isld2_exploit_2.setSize(isld_size);
    isld3_exploit_2.setPos(isld3_pos);
    isld3_exploit_2.setSize(isld_size);
    agent_exploit_2.setPos(ship_pos);
    agent_exploit_2.setSize(agent_size);
    points_txt_2.setColor(new util.Color('white'));
    points_txt_2.setOpacity(fbk_opacity);
    points_txt_2.setPos(rew_pos);
    points_txt_2.setText(rew_displayed_msg);
    exploit_fbk_dig_sail_txt.setPos([0, 0]);
    exploit_fbk_action_count.setPos(action_msg_pos);
    exploit_fbk_action_count.setText(actions_remaining_msg);
    exploit_fbk_action_count.setHeight(action_msg_size);
    treasure.setOpacity(fbk_opacity);
    treasure.setPos(treasure_pos);
    treasure.setSize(treasure_size);
    treasure.setImage(bounty);
    // keep track of which components have finished
    exploit_fbkComponents = [];
    exploit_fbkComponents.push(ocean_exploit_2);
    exploit_fbkComponents.push(isld1_exploit_2);
    exploit_fbkComponents.push(isld2_exploit_2);
    exploit_fbkComponents.push(isld3_exploit_2);
    exploit_fbkComponents.push(agent_exploit_2);
    exploit_fbkComponents.push(points_txt_2);
    exploit_fbkComponents.push(exploit_fbk_dig_sail_txt);
    exploit_fbkComponents.push(exploit_fbk_action_count);
    exploit_fbkComponents.push(treasure);
    
    exploit_fbkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function exploit_fbkRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'exploit_fbk'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = exploit_fbkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // if s is pressed, end the routine
    if ((exploit_resp.keys === "s")) {
        continueRoutine=false;
        }
    
    
    
    
    
    // *ocean_exploit_2* updates
    if (t >= 0.0 && ocean_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ocean_exploit_2.tStart = t;  // (not accounting for frame time here)
      ocean_exploit_2.frameNStart = frameN;  // exact frame index
      
      ocean_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ocean_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ocean_exploit_2.setAutoDraw(false);
    }
    
    // *isld1_exploit_2* updates
    if (t >= 0.0 && isld1_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld1_exploit_2.tStart = t;  // (not accounting for frame time here)
      isld1_exploit_2.frameNStart = frameN;  // exact frame index
      
      isld1_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isld1_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isld1_exploit_2.setAutoDraw(false);
    }
    
    // *isld2_exploit_2* updates
    if (t >= 0.0 && isld2_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld2_exploit_2.tStart = t;  // (not accounting for frame time here)
      isld2_exploit_2.frameNStart = frameN;  // exact frame index
      
      isld2_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isld2_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isld2_exploit_2.setAutoDraw(false);
    }
    
    // *isld3_exploit_2* updates
    if (t >= 0.0 && isld3_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld3_exploit_2.tStart = t;  // (not accounting for frame time here)
      isld3_exploit_2.frameNStart = frameN;  // exact frame index
      
      isld3_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isld3_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isld3_exploit_2.setAutoDraw(false);
    }
    
    // *agent_exploit_2* updates
    if (t >= 0.0 && agent_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_exploit_2.tStart = t;  // (not accounting for frame time here)
      agent_exploit_2.frameNStart = frameN;  // exact frame index
      
      agent_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (agent_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      agent_exploit_2.setAutoDraw(false);
    }
    
    // *points_txt_2* updates
    if (t >= 0.0 && points_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      points_txt_2.tStart = t;  // (not accounting for frame time here)
      points_txt_2.frameNStart = frameN;  // exact frame index
      
      points_txt_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (points_txt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      points_txt_2.setAutoDraw(false);
    }
    
    // *exploit_fbk_dig_sail_txt* updates
    if (t >= 0.0 && exploit_fbk_dig_sail_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_fbk_dig_sail_txt.tStart = t;  // (not accounting for frame time here)
      exploit_fbk_dig_sail_txt.frameNStart = frameN;  // exact frame index
      
      exploit_fbk_dig_sail_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exploit_fbk_dig_sail_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exploit_fbk_dig_sail_txt.setAutoDraw(false);
    }
    
    // *exploit_fbk_action_count* updates
    if (t >= 0.0 && exploit_fbk_action_count.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_fbk_action_count.tStart = t;  // (not accounting for frame time here)
      exploit_fbk_action_count.frameNStart = frameN;  // exact frame index
      
      exploit_fbk_action_count.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exploit_fbk_action_count.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exploit_fbk_action_count.setAutoDraw(false);
    }
    
    // *treasure* updates
    if (t >= 0.0 && treasure.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      treasure.tStart = t;  // (not accounting for frame time here)
      treasure.frameNStart = frameN;  // exact frame index
      
      treasure.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (treasure.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      treasure.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exploit_fbkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var all_islds;
var cmp_isld;
var endTime;
function exploit_fbkRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'exploit_fbk'-------
    exploit_fbkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the value of the alternative patches after each action  
        all_islds=[1,2,3];
        cmp_isld= curr_isld + ""
        alt_islds = all_islds.filter(x => cmp_isld.indexOf(x) === -1);
        isld_rvals[(alt_islds[0] - 1)] = (isld_rvals[(alt_islds[0] - 1)] + isld_replen_rates[(alt_islds[0] - 1)]*(100-isld_rvals[(alt_islds[0] - 1)]));
        isld_rvals[(alt_islds[1] - 1)] = (isld_rvals[(alt_islds[1] - 1)] + isld_replen_rates[(alt_islds[1] - 1)]*(100-isld_rvals[(alt_islds[1] - 1)]));
        
        // if the values exceed the maximum value, set them to the maximum
        if ((isld_rvals[(alt_islds[0] - 1)] > isld_svals[(alt_islds[0] - 1)])) {
            isld_rvals[(alt_islds[0] - 1)] = isld_svals[(alt_islds[0] - 1)];
        }
        if ((isld_rvals[(alt_islds[1] - 1)] > isld_svals[(alt_islds[1] - 1)])) {
            isld_rvals[(alt_islds[1] - 1)] = isld_svals[(alt_islds[1] - 1)];
        }
    
    // update current island once at end to account for replenish during leaving decision (optional)
    if ((exploit_resp.keys === "s")) {
        isld_rvals[(curr_isld-1)] = (isld_rvals[(curr_isld-1)] + isld_replen_rates[(curr_isld-1)]*(100-isld_rvals[(curr_isld-1)]));
        
        if ((isld_rvals[(curr_isld - 1)] > isld_svals[(curr_isld - 1)])) {
            isld_rvals[(curr_isld - 1)] = isld_svals[(curr_isld - 1)];
        }
    
    // if leaving patch, end timer
        endTime = Date.now();
        patchTime = (endTime-startTime) / 1000; // patchTime in seconds if using Date.now()
    }
    
    
    // save data
    psychoJS.experiment.addData('blk_number', curr_blk_number);
    psychoJS.experiment.addData('blk_type', curr_blk); // 1 for forced choice, 2 for free choice
    psychoJS.experiment.addData('mean reward block', Math.floor(mean_reward_blk)); 
    psychoJS.experiment.addData('current patch position', curr_isld); // 1=left, 2=top, 3=right
    psychoJS.experiment.addData('patch value left', Math.floor(isld_rvals[0])); 
    psychoJS.experiment.addData('patch value top', Math.floor(isld_rvals[1])); 
    psychoJS.experiment.addData('patch value right', Math.floor(isld_rvals[2])); 
    psychoJS.experiment.addData('patch replenish left', isld_replen_rates[0]); 
    psychoJS.experiment.addData('patch replenish top', isld_replen_rates[1]); 
    psychoJS.experiment.addData('patch replenish right', isld_replen_rates[2]); 
    psychoJS.experiment.addData('current patch replenish rate', isld_replen_rates[curr_isld-1]); // 1=slow, 2=medium, 3=fast
    psychoJS.experiment.addData('patch value slow', Math.floor(isld_rvals[slow_idx])); 
    psychoJS.experiment.addData('patch value medium', Math.floor(isld_rvals[medium_idx])); 
    psychoJS.experiment.addData('patch value fast', Math.floor(isld_rvals[fast_idx])); 
    psychoJS.experiment.addData('patch replenish slow', isld_replen_rates[slow_idx]); 
    psychoJS.experiment.addData('patch replenish medium', isld_replen_rates[medium_idx]); 
    psychoJS.experiment.addData('patch replenish fast', isld_replen_rates[fast_idx]); 
    psychoJS.experiment.addData('decision type', 0); // Use 1 for select, 2 for stay, 3 for leave
    psychoJS.experiment.addData('trial phase', 4); // 1 for select, 2 for travel, 3 for exploit/stay decision, 4 for exploit feedback
    
    // selection variables
    psychoJS.experiment.addData('patch_selection_key', 0);
    psychoJS.experiment.addData('patch_selection_RT', 0);
    
    // exploit loop variables
    psychoJS.experiment.addData('actual_rew_gain', Math.floor(isld_rvals[(curr_isld - 1)]));
    psychoJS.experiment.addData('rew_fbk_displayed', rew_displayed);
    psychoJS.experiment.addData('blk_points', Math.floor(points_blk));
    psychoJS.experiment.addData('blk_actions', actions_blk);
    psychoJS.experiment.addData('exploit_phase_key', 0);
    psychoJS.experiment.addData('exploit_phase_RT', 0);
    psychoJS.experiment.addData('num_exploit_actions', 0);
    
    // broader variables
    psychoJS.experiment.addData('mean reward entire experiment', Math.floor(mean_reward_entire_experiment));
    psychoJS.experiment.addData('total_points', Math.floor(total_points));
    psychoJS.experiment.addData('total_actions', total_actions);
    psychoJS.experiment.addData('actions_remaining', actions_remaining);
    psychoJS.experiment.addData('time in patch (seconds)', patchTime);
    psychoJS.experiment.nextEntry()
    
    // if the total actions allowed in the block have been taken, end the block
    if ((actions_remaining===0)) {
        curr_pos = [0, 0];
        ship_pos = [0, 0];
        curr_isld = 10;
        continueRoutine=false;
        exploit_loop.finished=true;
        trials.finished=true;
        }
    // the Routine "exploit_fbk" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blk_msg_points;
var blk_msg_allpoints;
var post_blk_msg;
var _post_blk_resp_allKeys;
var post_blk_msgComponents;
function post_blk_msgRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'post_blk_msg'-------
    t = 0;
    post_blk_msgClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    blk_msg_points=Math.floor(points_blk);
    blk_msg_allpoints=Math.floor(total_points);
    
    if ((curr_blk_number<total_blk_number)) {
    post_blk_msg='Arrr! Well done salty sea dog.\n\n\In this block ye earned ' + blk_msg_points.toString() + ' gold medallions!\n\nYou have now completed ' + curr_blk_number.toString() + ' out of ' + total_blk_number.toString() + ' and have collected ' + blk_msg_allpoints.toString() + ' gold medallions overall. See if you can earn even more medallions in the next block to boost your bonus payment.\n\n\n\nPress space to continue'
    }
    
    if ((curr_blk_number===total_blk_number)) {
    post_blk_msg='Arrr! Well done salty sea dog.\n\n\In this block ye earned ' + blk_msg_points.toString() + ' gold medallions!\n\nYou have now completed ' + curr_blk_number.toString() + ' out of ' + total_blk_number.toString() + ' and have collected ' + blk_msg_allpoints.toString() + ' gold medallions overall.\n\n\n\nPress space to continue'
    }
    text_2.setText(post_blk_msg);
    post_blk_resp.keys = undefined;
    post_blk_resp.rt = undefined;
    _post_blk_resp_allKeys = [];
    // keep track of which components have finished
    post_blk_msgComponents = [];
    post_blk_msgComponents.push(text_2);
    post_blk_msgComponents.push(post_blk_resp);
    
    post_blk_msgComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function post_blk_msgRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'post_blk_msg'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = post_blk_msgClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *post_blk_resp* updates
    if (t >= 0.0 && post_blk_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      post_blk_resp.tStart = t;  // (not accounting for frame time here)
      post_blk_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { post_blk_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { post_blk_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { post_blk_resp.clearEvents(); });
    }

    if (post_blk_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = post_blk_resp.getKeys({keyList: ['space'], waitRelease: false});
      _post_blk_resp_allKeys = _post_blk_resp_allKeys.concat(theseKeys);
      if (_post_blk_resp_allKeys.length > 0) {
        post_blk_resp.keys = _post_blk_resp_allKeys[_post_blk_resp_allKeys.length - 1].name;  // just the last key pressed
        post_blk_resp.rt = _post_blk_resp_allKeys[_post_blk_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    post_blk_msgComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_blk_msgRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'post_blk_msg'-------
    post_blk_msgComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('post_blk_resp.keys', post_blk_resp.keys);
    if (typeof post_blk_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('post_blk_resp.rt', post_blk_resp.rt);
        routineTimer.reset();
        }
    
    post_blk_resp.stop();
    // the Routine "post_blk_msg" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _closing_resp_allKeys;
var close_exptComponents;
function close_exptRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'close_expt'-------
    t = 0;
    close_exptClock.reset(); // clock
    frameN = -1;
    routineTimer.add(20.000000);
    // update component parameters for each repeat
    closing_msg_txt.setText(final_msg);
    closing_resp.keys = undefined;
    closing_resp.rt = undefined;
    _closing_resp_allKeys = [];
    // keep track of which components have finished
    close_exptComponents = [];
    close_exptComponents.push(closing_msg_txt);
    close_exptComponents.push(closing_resp);
    
    close_exptComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function close_exptRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'close_expt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = close_exptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *closing_msg_txt* updates
    if (t >= 0.0 && closing_msg_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      closing_msg_txt.tStart = t;  // (not accounting for frame time here)
      closing_msg_txt.frameNStart = frameN;  // exact frame index
      
      closing_msg_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (closing_msg_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      closing_msg_txt.setAutoDraw(false);
    }
    
    // *closing_resp* updates
    if (t >= 0.0 && closing_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      closing_resp.tStart = t;  // (not accounting for frame time here)
      closing_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { closing_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { closing_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { closing_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (closing_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      closing_resp.status = PsychoJS.Status.FINISHED;
  }

    if (closing_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = closing_resp.getKeys({keyList: ['space'], waitRelease: false});
      _closing_resp_allKeys = _closing_resp_allKeys.concat(theseKeys);
      if (_closing_resp_allKeys.length > 0) {
        closing_resp.keys = _closing_resp_allKeys[_closing_resp_allKeys.length - 1].name;  // just the last key pressed
        closing_resp.rt = _closing_resp_allKeys[_closing_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    close_exptComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function close_exptRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'close_expt'-------
    close_exptComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('closing_resp.keys', closing_resp.keys);
    if (typeof closing_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('closing_resp.rt', closing_resp.rt);
        routineTimer.reset();
        }
    
    closing_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
