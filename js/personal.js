var historyBtn = $('#historyBtn');
var doneBtn = $('#doneBtn');
var workBtn = $('#workBtn');
var treatBtn = $('#treatBtn');
var descText = $('#desc');
var emailBtn = $('#emailBtn')

var buttonList = [historyBtn,
                 doneBtn,
                 workBtn,
                 treatBtn];
var buttonStatus = buttonList[0];

buttonStatus.addClass("currentBtn");

historyBtn.click( function(){
    buttonStatus.removeClass("currentBtn");
    buttonStatus = buttonList[0];
    buttonStatus.addClass("currentBtn");
    descText.text('Acupuncture and Chinese Medicine are oldest, effective medical treatment back to over 3000 years as primary healthcare system in China. Acupuncture has been slow to gain acceptance by Western medicine. Recently, more and more western doctors have developed interest in acupuncture and Chinese medicine as it gains more popularity in the West.');
});

doneBtn.click( function(){
    buttonStatus.removeClass("currentBtn");
    buttonStatus = buttonList[1];
    buttonStatus.addClass("currentBtn");
    descText.text('Acupuncture, involving stimulation of certain points on or under the skin, with inserting sterile, disposable needles that are manipulated by hand or electrically. Other acupuncture methods, used less ofter or still considered by acupuncturists to experimental , involve the use of herbs and heat, or low-frequency laser beams, at the various acupuncture points. Although acupuncture originally involved only 361 such points.');
});

workBtn.click( function(){
    buttonStatus.removeClass("currentBtn");
    buttonStatus = buttonList[2];
    buttonStatus.addClass("currentBtn");
    descText.text('Acupuncture can stimulates and balances the body natural energy flow in meridian systems, relief pain and treat illness. Maintenance of Qi is works by unblocking the various types of stagnation that can occur along these channels. An independent panel of experts concluded that the ancient practice of acupuncture was an effective therapy for certain medical conditions, especially those involving nausea and pain, and should be integrated into standard medical practice for problem. For example, the report said there is considerable evidence acupuncture cause a release of natural pain-relieving substances like endorphins, as well as messenger chemicals and hormones in the nervous system. Further, it said, acupuncture appears able to alter immune functions.');
});

treatBtn.click( function(){
    buttonStatus.removeClass("currentBtn");
    buttonStatus = buttonList[3];
    buttonStatus.addClass("currentBtn");
    descText.text('Currently, more than 1 million Americans are believed to be relying on acupuncture to treat a wide range of ailments, from headache and bowel disorders to arthritis and stroke. National Institutes of Health, are expected to encourage more patients and physicians to consider acupuncture as an alternation or complementary treatment for some common health problems, including nausea associated with pregnancy, cancer chemotherapy, pain and improves pregnancy rate remarkable when embryo transfer for infertility women. Our practitioners have special experience treating following disorders: Pain, muscle spasm, including neck pain, back pain , shoulder pain, tennis elbow, carpal tunnel syndrome, tendinitis, arthritis, sciatica, TMJ, Parkinson disease. Hemorrhoids, IBS, digestive disorders, diarrhea, ulcers, colitis. Women’s problem: infertility, PMS, menopausal, pelvic inflammation disorder. Allergies, asthma, variety headache, depression and anxiety, fatigue, stroke. Facial rejuvenation and weight loss, more.');
});