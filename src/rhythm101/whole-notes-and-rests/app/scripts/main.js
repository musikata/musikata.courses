define(
  [
    'jquery',
    'deck/DeckFactory',
],
function($, DeckFactory){

  var deckDefinition = {
    title: "Whole Notes and Rests",
    slides: [

      // Slide 1
      {
      type: 'html',
      html: "<p>This is a whole note:</p>" +
        "<img src=\"wholeNote.svg\"/>" +
        "<p>Some people remember it because it looks like 'hole'</p>"
    },

    // Slide 2
    {
      type: 'html',
      html: "<p>A whole note lasts for <strong>four</strong> beats:</p>" +
        "<img src=\"wholeNoteWithBeats.svg\"/>"
    },

    // Slide 3
    {
      type: 'html',
      html: "<p>Click the 'play' button below to here how whole note sounds:</p>" +
        "<img src=\"wholeNote.svg\"/>" +
        "<div class=\"playButton\">play</div>"
    },

    // Slide 4
    {
      type: 'html',
      html: "<p>This is a whole rest.</p>" +
        "<img src=\"wholeRest.svg\"/>"
    },

    // Slide 5
    {
      type: 'html',
      html: "<p>It lasta for four beats too.</p>" +
        "<img src=\"wholeRestWithBeats.svg\"/>"
    },

    // Slide 6
    {
      type: 'html',
      html: "<p>What do you think this will sound like?</p>" +
        "<p>Try to hear it in your mind before you listen to it.</p>" +
        "<img src=\"wholeRestWholeNote.svg\"/>" +
        "<div class=\"playButton\">play</div>"
    },

    // Slide 7
    {
      type: 'html',
      html: "<p>How do you think you would count it?</p>" +
        "<p>Write down your answer here, then check it below.</p>" +
        "<input type=\"text\">" +
      "<img src=\"wholeRestWholeNote.svg\"/>" +
        "<div class=\"showButton\">show counting</div>"
    },

    // Slide 8
    {
      type: 'html',
      html: "<p>Great! Now you know how to read whole notes and whole rests.</p>" +
        "<p>You're ready to move on to half notes and half rests.</p>"
    }
    ]
  };

  var $deckEl = $('<div id="deck"></div>');
  $('body').append($deckEl);

  var deckFactory = new DeckFactory();
  var deckView = deckFactory.createDeck(deckDefinition, {
    el: "#deck"
  });
  deckView.render();
  deckView.enableNextButton();
  deckView.enablePreviousButton();

});
