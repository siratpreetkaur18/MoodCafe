var userName = localStorage.getItem("name");
var mood = localStorage.getItem("mood");
var total = localStorage.getItem("total");
var level = localStorage.getItem("level");
var reason = localStorage.getItem("reason");

if (userName != null) {
    showResult();
}

function showResult() {
    document.getElementById("no-data").style.display = "none";
    document.getElementById("result-area").style.display = "block";

    var moodMessage = "😠 You are feeling angry. It is okay. Let us cool down your mind together.";
    if (mood == "Happy") { moodMessage = "😊 You are feeling happy! Let us keep that good mood going."; }
    else if (mood == "Calm") { moodMessage = "😌 You are feeling calm. That is wonderful. Let us keep this peace."; }
    else if (mood == "Tired") { moodMessage = "😴 You are feeling tired. Your body and mind need some rest."; }
    else if (mood == "Sad") { moodMessage = "😢 You are feeling sad. It is okay to feel this way. Let us lift your mood."; }
    else if (mood == "Worried") { moodMessage = "😟 You are feeling worried. Take a deep breath, we are here to help."; }

    var advice = "Great! Keep up your good habits and take care of yourself.";
    if (reason == "Exams / Studies") { advice = "Make a simple timetable and study in small parts with short breaks."; }
    else if (reason == "Family problems") { advice = "Try to talk calmly with someone you trust about how you feel."; }
    else if (reason == "Money worries") { advice = "Write down your expenses and make a small plan. Ask for help if needed."; }
    else if (reason == "Friends / Relationships") { advice = "Give yourself some time and talk openly with the person involved."; }
    else if (reason == "Future / Career") { advice = "Focus on one small goal for this week instead of the whole future."; }

    var meditation = "Do 15 minutes of guided meditation or deep breathing in a quiet room. Try to do it every day.";
    var exercise = "Do 30 to 45 minutes of yoga, cycling or a brisk walk outside in fresh air.";
    var music = "Listen to slow, calm music or nature sounds, and keep your phone away for a while.";
    var food = "Eat a small piece of dark chocolate, drink warm milk or herbal tea, and drink enough water.";

    if (level == "Low") {
        meditation = "Sit quietly for 5 minutes and think about 3 good things from your day.";
        exercise = "A 15 minute walk or light stretching is enough.";
        music = "Listen to your favourite songs.";
        food = "Eat a fruit like a banana or an apple.";
    } else if (level == "Medium") {
        meditation = "Try deep breathing for 10 minutes. Breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds.";
        exercise = "Do a 30 minute walk, jogging or yoga.";
        music = "Listen to soft instrumental or lo-fi music.";
        food = "Drink a cup of green tea and eat some nuts like almonds.";
    } else if (level == "High") {
        meditation = "Try the 5-4-3-2-1 grounding exercise: name 5 things you see, 4 you touch, 3 you hear, 2 you smell and 1 you taste. Then breathe in for 4 seconds and out for 6 seconds.";
        exercise = "Go for a slow 10 to 15 minute walk outside or do gentle stretching. Do not push hard today, just let the tension out.";
        music = "Play slow, soothing music or rain sounds at a low volume, and take a short break from your phone and social media.";
        food = "Eat a light, regular meal and drink plenty of water. Have less tea, coffee and junk food, and take warm milk or herbal tea at night.";
        document.getElementById("high-help").style.display = "block";
    }

    document.getElementById("greeting").innerHTML = "Hello " + userName + ", here is how your day looks.";
    document.getElementById("mood-message").innerHTML = moodMessage;
    document.getElementById("score-text").innerHTML = "Your score is " + total + " out of 20";
    document.getElementById("reason-text").innerHTML = "Most on your mind: <b>" + reason + "</b>";
    document.getElementById("reason-advice").innerHTML = advice;
    document.getElementById("meditation").innerHTML = meditation;
    document.getElementById("exercise").innerHTML = exercise;
    document.getElementById("music").innerHTML = music;
    document.getElementById("food").innerHTML = food;

    document.getElementById("level-badge").innerHTML = level;
    document.getElementById("level-badge").className = level.toLowerCase();
}
