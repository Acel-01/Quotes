
var myVar = setInterval(myFunction, 30000);

function myFunction() {
    var a = ["“Live as if you were to die tomorrow. Learn as if you were to live forever.”– Mahatma Gandhi",
    "“That which does not kill us makes us stronger.”\n– Friedrich Nietzsche",  
    "“We must not allow other people’s limited perceptions to define us.”\n– Virginia Satir",
    "“Do what you can, with what you have, where you are.”\n– Theodore Roosevelt", 
    "“Be yourself; everyone else is already taken.”\n– Oscar Wilde",
    "“This above all: to thine own self be true.”\n– William Shakespeare",
    "“If you cannot do great things, do small things in a great way.”\n– Napoleon Hill",
    "“If opportunity doesn’t knock, build a door.”\n– Milton Berle",
    "“Wise men speak because they have something to say; fools because they have to say something.”\n– Plato",
    " “Strive not to be a success, but rather to be of value.”\n– Albert Einstein",
    "“Do not let what you cannot do interfere with what you can do.”\n– John Wooden",
    "“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”\n– Mark Twain",
    "“I haven’t failed. I’ve just found 10,000 ways that won’t work.”\n– Thomas Edison",
    "“A journey of a thousand leagues begins beneath one’s feet.”\n– Lao Tzu",
    "“Either you run the day, or the day runs you.”\n– Jim Rohn",
    "“Life shrinks or expands in proportion to one’s courage.”\n– Anais Nin",
    "“You must be the change you wish to see in the world.”\n– Mahatma Gandhi",
    "“What you do speaks so loudly that I cannot hear what you say.”\n– Ralph Waldo Emerson",
    "“Believe and act as if it were impossible to fail.”\n– Charles Kettering",
    "“The difference between ordinary and extraordinary is that little extra.”\n– Jimmy Johnson",
    "“The best way to predict the future is to invent it.”\n– Alan Kay",
    "“Everything has beauty, but not everyone can see.”\n– Confucius",
    "“Believe you can and you’re halfway there.”\n– Theodore Roosevelt",
    "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”\n– Anne Frank",
    "“Imagination is everything. It is the preview of life’s coming attractions.”\n– Albert Einstein",
    "“Change your thoughts and you change your world.”\n– Norman Vincent"]

    var b = Math.floor(Math.random() * 21) + 1;
    var c = new Date();
    var d = 1;
    var e;
    e = a[b];
    document.getElementById("front").innerHTML = e;
}