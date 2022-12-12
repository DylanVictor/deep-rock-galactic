// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Nav Bar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(".toggle-button").click(function(){
  $(".nav-link").toggleClass("active");
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Career Path ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Gunner is always first background highlighted class
var previousClass = "gunner";
$(".class-li").click(function(){
  var classID = $(this).attr('id');

  // Background highlight list toggle
  $("#"+classID).toggleClass("class-active");
  $("#"+previousClass).toggleClass("class-active");
  previousClass = classID;

  // Text and image changes
  if(classID === "gunner"){
    $(".class-title").text("Gunner");
    $(".class-img").attr("src", "images/"+classID+".png");
    $(".class-description").text("As the Gunner, your position is at the forefront of any battle, cutting down aliens using your high-caliber Minigun and Heavy-Duty Revolver. You are also equipped with an extremely handy Zipline Launcher, allowing the entire team to easily get across almost any chasm or obstacle.");
  }
  if(classID === "scout"){
    $(".class-title").text("Scout");
    $(".class-img").attr("src", "images/"+classID+".png");
    $(".class-description").text("As the Scout, you are the only one to carry the powerful Flare Gun, and the entire team depends on you for light. To scout ahead, you are also equipped with a Grappling Hook, letting you get to almost anywhere. But, while you are carrying an Assault Rifle and a Sawed off  Shotgun, you should be careful not to get cut off from your team - the caves don't take kindly to lone explorers.");
  }
  if(classID === "driller"){
    $(".class-title").text("Driller");
    $(".class-img").attr("src", "images/"+classID+".png");
    $(".class-description").text("As the Driller, you'll be equipped with a set of Titanium Powerdrills. Your job is to clear any blocked tunnels and obstacles in the path of your team, and in combat you are a force to be reckoned with: Your drills make short work of most enemies up close, and for longer range engagements you are equipped with a heavy duty Flamethrower.")
  }
  if(classID === "engineer"){
    $(".class-title").text("Engineer");
    $(".class-img").attr("src", "images/"+classID+".png");
    $(".class-description").text("As the Engineer, you carry two essential items for surviving the caves - the Platform Gun shoots climbable platforms onto any surface, and your automated Sentry Turrets lay down blistering hails of support fire - if you manage to get it set up before you're killed. You may not be the sturdiest of Dwarves, but your Combat Shotgun and devastating Grenade Launcher still makes you a formidable opponent.");
  }
})
