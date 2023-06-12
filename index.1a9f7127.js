function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=e=>{if(e)for(const t of e)t.remove()},i=e=>{if(e>22){let t=0;e=e.toString().split("");for(let n of e)t+=parseInt(n);return i(t)}return e},s=(e,t,n)=>{const s=[],r=i(e+t+n),o=i(e+t+n+r),a=i(e+t),h=i(t+n),c=i(n+r),l=i(r+e),u=i(o+e),d=i(o+t),f=i(o+n),p=i(o+r),m=i(o+a),g=i(o+h),y=i(o+c),w=i(o+l),v=i(e+u),b=i(t+d),T=i(n+f),_=i(r+p),I=i(m+a),E=i(g+h),k=i(y+c),S=i(w+l),C=i(f+p),A=i(C+f),N=i(C+p),D=i(u+o),R=i(d+o);return s.push(e,t,n,r,o,a,h,c,l,u,d,f,p,m,g,y,w,v,b,T,_,I,E,k,S,C,A,N,D,R),s},r=([e,t,n,s,r,,,,,o,a,h,c,,,,,l,u,,,,,,,,,,d,f])=>{const p={physic:[e,l,o,d,r,h,n],energy:[t,u,a,f,r,c,s],emotions:[i(e+t),i(l+u),i(o+a),i(d+f),i(r+r),i(h+c),i(n+s)]},{physic:m,energy:g,emotions:y}=p;return m.push(i(m.reduce(((e,t)=>e+t)))),g.push(i(g.reduce(((e,t)=>e+t)))),y.push(i(y.reduce(((e,t)=>e+t)))),p},o={matrix:document.querySelector(".matrix"),matrixForm:document.querySelector(".matrix-form"),physicChart:document.querySelector(".physic"),energyChart:document.querySelector(".energy"),emotionsChart:document.querySelector(".emotions"),matrixShit:document.querySelector(".matrix-data")},{matrix:a,matrixForm:h,physicChart:c,energyChart:l,emotionsChart:u,matrixShit:d}=o;h.addEventListener("submit",(e=>{e.preventDefault(),d.classList.remove("hidden");const t=document.querySelectorAll("[data-delete]");n(t);let o=h.birthday.value.split(".");const a=i(parseInt(o[0])),c=i(parseInt(o[1])),l=i(parseInt(o[2])),u=s(a,c,l),m=r(u);f(u),p(m)}));const f=e=>{const t=e.map((e=>`<li class="matrix__number" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");a.insertAdjacentHTML("beforeend",t)},p=({physic:e,energy:t,emotions:n})=>{const i=e.map((e=>`<li class="chart__element" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");c.insertAdjacentHTML("beforeend",i);const s=t.map((e=>`<li class="chart__element" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");l.insertAdjacentHTML("beforeend",s);const r=n.map((e=>`<li class="chart__element" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");u.insertAdjacentHTML("beforeend",r)};var m;m=JSON.parse('{"nhits":78,"cards":[{"type":"major","name_short":"ar00","name":"The Fool","pic":"https://www.modernwaytarot.com/wp-content/uploads/2021/09/modern-way-tarot-card-the-fool-meaning-600x1024.png.webp","value":"ZERO","value_int":0,"meaning_up":"The Fool card is numbered 0, which is considered to be a number of infinite potential. Consider him a blank slate, for The Fool has yet to develop a clear personality. He is the symbol of innocence - his journey to come will shape his character yet.\\n\\nTo see the The Fool generally means a beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed. He leads a simple life, having no worries, and does not seem troubled by the fact that he cannot tell what he will encounter ahead.\\n\\n","meaning_rev":"When you land on the reversed Fool in your reading, you can generally find his more negative characteristics being on display. It can mean that you are literally acting like a fool by disregarding the repercussions of your actions. Like the youth depicted in the card, you don\'t see how dangerous of a position you find yourself in. \\n\\nA reversed Fool card can show that you are living in the moment and not planning for the future. The reversed Fool meaning serves as caution that you should be more aware so as not to be taken advantage of. Like the dog in the Rider Waite version, this card is here to alert you on anything that may sound too good to be true.","desc":"With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it.\\nIn his Manual of Cartomancy, Grand Orient has a curious suggestion of the office of Mystic Fool, as apart of his process in higher divination; but it might call for more than ordinary gifts to put it into operation. We shall see how the card fares according to the common arts of fortune-telling, and it will be an example, to those who can discern, of the fact, otherwise so evident, that the Trumps Major had no place originally in the arts of psychic gambling, when cards are used as the counters and pretexts. Of the circumstances under which this art arose we know, however, very little. The conventional explanations say that the Fool signifies the flesh, the sensitive life, and by a peculiar satire its subsidiary name was at one time the alchemist, as depicting folly at the most insensate stage."},{"type":"major","name_short":"ar01","name":"The Magician","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-magician-meaning-600x1024.png.webp","value":"1","value_int":1,"meaning_up":"The Magician is the representation of pure willpower. With the power of the elements and the suits, he takes the potential innate in the fool and molds it into being with the power of desire. He is the connecting force between heaven and earth, for he understands the meaning behind the words \\"as above so below\\" - that mind and world are only reflections of one another. Remember that you are powerful, create your inner world, and the outer will follow.\\n\\n","meaning_rev":"When you obtain the Magician reversed, it might mean its time for you to implement some changes. While right side up, the Magician represents true power, the reversed Magician is a master of illusion. The magic that he performs is one of deception and trickery. You may be lured in by the showmanship of his arts, but behind that there may be an intention to manipulate for selfish gain. Getting this card might mean that there is someone who pretends to have your best interests at hand when the opposite is true. \\n\\nConsider whether this reversed the magician is in your circle, or perhaps might also represent your current state of emotions. It may mean you may become obsessed with power and that might lead to wrong, reckless decisions that will lead to your eventual downfall. \\n","desc":"A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician\'s right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \\"unto the Ogdoad.\\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ."},{"type":"major","name_short":"ar02","name":"The High Priestess","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-high-priestess-600x1024.png.webp","value":"2","value_int":2,"meaning_up":"High Priestess Keywords\\nUpright Keywords\\tReversed Keywords\\nunconscious, intuition, mystery, spirituality, higher power, inner voice\\trepressed intuition, hidden motives, superficiality, confusion, cognitive dissonance\\nSkip to Upright Meaning\\tSkip to Reversed Meaning\\nThe High Priestess Tarot Card Description\\nYou\'ve most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. When you encounter her, you will see her sitting on a cubic stone between the two pillars at Solomon’s Temple, Jachin, and Boaz. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive.\\n\\nThe High Priestess\'s location between the two suggests that it is her responsibility to serve as a mediator between the depths of the reality. She is the third pillar - the path between. She believes that both pillars are equal and there is knowledge to be learned in both worlds. You will also notice that she wears the crown of Isis which can mean that she is a believer of magic. The high priestess wearing of the solar cross denotes that she is connected to the season of the earth and the earth itself. The crescent moon at her feet is seen also in many depictions of the Virgin Mary, and means that she has a complete grasp over her emotion and the pomegranates refer to the ambition of the priestess.\\n\\nGo Beyond Tarot Meanings\\nLearn the basics of the ancient esoteric tradition of tarot by starting your initiation ritual! Our app teaches you with simple, easy to use exercises while exploring our academy. Sign up to get the link!\\n\\nSign up to our mailing list\\nEnter your email\\nSubscribe\\nUpright High Priestess Meaning\\nThe meaning of the High Priestess is related with inner knowledge. Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. When the High Priestess shows up it can depict an archetype known as the divine feminine - the mysterious female that understands and holds the answers to the deep unknowns; religion, self, nature. She represents someone that is intuitive, and beginning to open to her or his spirituality. Meditation, prayer and new spiritual work is indicated. ","meaning_rev":"When it comes to the High Priestess reversed, it can mean that you are finding it difficult to listen to your intuition. It is time for you to meditate and try new approach, for at this moment, the rational approach will not work. Something has been telling you to follow your gut, but you may be ignoring the call. There is a lot of confusion around you, and your actions may feel contrary to what you know is right. You must never be afraid to ask questions of yourself that may illuminate a new path forward for you, one that is more authentic to your inner self and your individual values.","desc":"She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother.\\nIn a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana."},{"type":"major","name_short":"ar03","name":"The Empress","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-empress-600x1024.png.webp","value":"3","value_int":3,"meaning_up":"The Empress shows us how deeply we are embedded to our femininity. Femininity could be associated with fertility, expression, creativity and nurturing among many other aspects. It therefore calls you to connect with beauty and bring happiness to your life. Understand yourself and get in touch with your sensuality so that you can attract life circumstances to bring happiness and joy. She is a signal that be kind to yourself, to take care of yourself.\\nThe Empress is also a strong indication of pregnancy and motherhood. You can look for other cards to confirm if this is truly pregnancy, or rather just an indication of a motherly, nurturing and caring attitude. The Empress card could also mean the birth of a new idea, business or project on your life. Owing to the good fortune that surrounds this card, you can be sure that such situations and projects would end successfully in your life. Discover and bring forth those ideas that have been clinging to you and make sure that you devote yourself towards accomplishing them. This card is a sign that they are going to be successful, and well taken care of. The Empress, as the archetype of the mother earth, also encourages you to spend time interacting with nature, the mother of all of us.\\n\\n","meaning_rev":"The Empress reversed indicates that you have lost too much of your own willpower and strength because you have started placing too much effort and concern to other people’s affairs. While the Empress\'s nature is of showering her loved ones with attention and care, this can sometimes go overboard. You might be neglecting your own needs, or even smothering the ones you love with your well-intentioned actions.\\n\\nIn a role reversal, perhaps a reversed Empress is finding her way into your life; it could also mean that you are relying on others to take care of you, and make decisions for you. You need to work towards removing this influence on your life, and build confidence in your own actions. Always try as much as you can to ensure that you solve matters on your own.","desc":"A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation.\\nIn another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth."},{"type":"major","name_short":"ar04","name":"The Emperor","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-emperor-600x1024.png.webp","value":"4","value_int":4,"meaning_up":"It’s all about control when it comes to the Emperor, for this card means authority, regulation, organization and a fatherliness. The Emperor represents a strategic thinker who sets out plans that he must see through. He is a symbol of the masculine principle - the paternal figure in life that gives structure, creates rules and systems, and imparts knowledge. Where the Empress\'s desire for their kingdom is to create happiness, the emperor desires to foster honor and discipline. He guides with a firm hand, following the calling of the crown above all else. Though he is a ruler, he understands that to reign is also to serve - thus he acts rationally and according to what is for the greater good of the kingdom.","meaning_rev":"The Emperor reversed is a sign of abused authoritative power. In your social life, it can manifest in the overreach of power from a father figure or a possessive partner. In career readings, it could be coming from a superior. It presents a man who wants to take control of your actions and makes you feel powerless.  It could also be that you are playing the part of a weak ruler, hatching a plan to avoid the tasks that come with having responsibility. Perhaps you aspire for a career that is more flexible than one that is governed by strict rules.\\n\\nLack of self-control and inability to handle situations can be represented by the Emperor on a personal level. When he is reversed, the structures, rules and systems that he creates are no longer working. His desire to inspire higher principles in his kingdom have turned to ruthlessness, tyranny and rigidity. He seeks to dominate, forgetting his call from the crown to do what is best for his people, fearing only for his loss of control and thus creating suffering.","desc":"He has a form of the Crux ansata for his sceptre and a globe in his left hand. He is a crowned monarch--commanding, stately, seated on a throne, the arms of which axe fronted by rams\' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta.\\nIt should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify also--and the male figure especially--the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are \\"full of strange experience,\\" but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being--but this is fantasy."},{"type":"major","name_short":"ar05","name":"The Hierophant","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-hierophant-600x1024.png.webp","value":"5","value_int":5,"meaning_up":"To see the Hierophant in a reading is to embrace the conventional, for it suggests that you have a certain desire to actually follow a process which has been well established. It also suggests that you want to stay within certain conventional bounds of what could be considered an orthodox approach. So, instead of being innovative, you will be adapting to certain beliefs and systems which are already put in place and are existing. \\n\\n","meaning_rev":"When you see the Hierophant in reverse, it may mean that you are feeling particularly restricted and even constrained from too many structures and rules. As a result, you have lost quite a lot of control as well as flexibility in your life. You have a particularly strong will and desire to go ahead and regain control as well as to break free from the shackles of convention. You are tempted to try unorthodox approaches or to function in a way which defies social ties and norms.\\n\\nThe Hierophant reversal meaning is mostly about questioning certain traditions and making sure that whatever it is that you do is the right thing for you in this certain moment.","desc":"He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested.\\nHe is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy-except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression."},{"type":"major","name_short":"ar06","name":"The Lovers","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-lovers-1-600x1024.png.webp","value":"6","value_int":6,"meaning_up":"The primary meaning within the Lovers is harmony, attractiveness, and perfection in a relationship. The trust and the unity that the lovers have gives each of them confidence and strength, empowering the other. The bond that they have created is very strong, and it can indicate that the two are joined in marriage, and other close and intimate relationships.\\n\\nAnother meaning behind the lovers card is the concept of choice - a choice between things that are opposing and mutually exclusive. This could be a dilemma that you need to think about carefully and make the best decision for your situation.\\n\\nA more personal Lovers meaning that can apply to individuals is the development of your own personal belief systems, regardless of what are the societal norms. We see this as a development from the Hierophant, who made decrees and passed on his knowledge through a standardized system. This is one of the times when you figure out what you are going to stand for, and what your philosophy in life will truly be. You must start making up your mind about what you find important and unimportant in your life. You should be as true to yourself as you can be, so you will be genuine and authentic to the people who are around you.","meaning_rev":"The Lovers reversed can point to both inner and outer conflicts that you are dealing with. The disharmony can make daily life difficult and could be putting pressure on your relationships. You should take time to think about what you are punishing yourself for, so you can fix them or let them go. At this time, you should also think about your personal values and belief system to make sure that they are aligned with what you want from your life.\\n\\nA break in communication could be another possible interpretation. The foundation for your relationships may be cut off, creating an imbalance between you and your partner or loved ones. The unity normally present within the card has become lopsided. \\n\\nThe Lovers reversed can also indicate that you have been avoiding responsibility for your actions. You could have made a decision that was based on your desire for immediate gratification but are now blaming others for the consequences that are catching up to you. So, you need to make amends or let go of the past and make better decisions in the future.","desc":"The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire. This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. In a very high sense, the card is a mystery of the Covenant and Sabbath.\\nThe suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism."},{"type":"major","name_short":"ar07","name":"The Chariot","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-chariot-600x1024.png.webp","value":"7","value_int":7,"meaning_up":"The Chariot tarot card is all about overcoming challenges and gaining victory through maintaining control of your surroundings. This perfect control and confidence allows the charioteer to emerge victorious in any situation. The use of strength and willpower are critical in ensuring that you overcome the obstacles that lie in your path. The Chariot\'s message comes to make you stronger as you strive to achieve your goals.\\n\\nThe key message that he brings to you is that you must maintain focus, confidence, and determination through a process that will be full of winding turns and detours. If you have a plan or a project that you seem not to be sure about, the Chariot shows that you should pursue the plan with a structured and ordered approach. Your boldness will ensure that you achieve all that you should in this goal.","meaning_rev":"The reversed Chariot\'s appearance in a reading can help you become aware of both your aggression, and your lack of willpower. It may either be saying that you are lacking in focus, motivation or direction, or that you are being warped by your obsession with your goals. In the former case, let the Chariot be a reminder that you can emerge victorious as long as you can gather the courage to do so. In the latter, your impulses may be another factor that you must rein in. To see the Chariot in reverse may suggest that you need to come to terms with the fact that you cannot always be in control.\\n\\nThe Chariot reversal meaning can also be an indication of lack of control and direction over your life. You are at the mercy of the opposing forces and the obstacles, and cannot seem to muster the strength to take over. You are taking everything lying down, and life is dragging in any direction that it pleases. It should serve as a wakeup call and reminder that you will need to tighten some loose ends and take charge of your destiny.","desc":"An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.\\nIt is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood."},{"type":"major","name_short":"ar08","name":"Strength","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-strength-600x1024.png.webp","value":"8","value_int":8,"meaning_up":"When you get the Strength card in an upright manner during your tarot reading, then it shows that you have inner strength and fortitude during moments of danger and distress. It shows that you have the ability to remain calm and strong even when your life is going through immense struggle. It also shows that you are a compassionate person and you always have time for other people even if it\'s at your own expense.\\nGetting the strength card means that you are a very patient individual who is likely to accomplish anything that they put their mind to. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind. This card also indicates this kind of compassion will always be rewarded with having a lot of stability in your life either presently on in the near future.\\n\\n","meaning_rev":"An upside down Strength card can mean that you are (or about to) experience an intense anger or fear in your life. You seem to be lacking the inner strength that this card normally represents, meaning you might be experiencing fear, and a lack of conviction and confidence in your own abilities. This can mean that you have forgotten all about your passions and the kind of joy, happiness, and fulfillment that came with doing what you love. \\n\\nA reversed strength card in a reading might also mean that one is experiencing depression because of a number of reasons and because of that, it is draining all of the happiness from their lives.\\n\\nOne might end up being withdrawn from society because of the unhappiness or depression since they may feel people are the reason why they are so sad. It can also be a sign of jealousy, especially when everyone seems to be happy or excelling in every aspect of life while you are stagnating. This card indicates that you must learn to gain confidence in order to re-harness your inner strength.\\n\\n","desc":"A woman, over whose head there broods the same symbol of life which we have seen in the card of the Magician, is closing the jaws of a lion. The only point in which this design differs from the conventional presentations is that her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of justice, which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. Fortitude, in one of its most exalted aspects, is connected with the Divine Mystery of Union; the virtue, of course, operates in all planes, and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation.\\nThese higher meanings are, however, matters of inference, and I do not suggest that they are transparent on the surface of the card. They are intimated in a concealed manner by the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden of Divine Law, when it has been taken into the heart of hearts. The card has nothing to do with self-confidence in the ordinary sense, though this has been suggested--but it concerns the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which the lion signifies the passions, and she who is called Strength is the higher nature in its liberation. It has walked upon the asp and the basilisk and has trodden down the lion and the dragon."},{"type":"major","name_short":"ar09","name":"The Hermit","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-hermit-600x1024.png.webp","value":"9","value_int":9,"meaning_up":"The Hermit is a seeker for the knowledge that comes from within. A lonely wanderer in the path of the night, he searches for that which can only be gained with long periods of solitude - the inner voice. To hear it, he must disconnect from the crowds whose voices and desires threaten to overcome his own. He walks through the dark night of his unconscious, guided only by the low light of the northern star, with his destination being his home, his self.\\nYou are currently contemplating that you need to be alone. Never be afraid to take this chance to reflect, as it could help you clear your mind of all the clutter that comes with everyday life. The Hermit may also refer to your effort in taking action that is authentic and aligned with your true self. You are perhaps searching your inner soul for guidance on what is right, and where your next steps are to be.\\n\\nThe hermit\'s appearance in a reading can also denote the appearance of someone who will come to your life that will be your mentor.","meaning_rev":"When reversed, you are perhaps in a situation where you\'d like to be alone; there is nothing wrong about that. However, there is a possibility that your seclusion may become harmful to both yourself and others. Though the Hermit sets forwards with noble intentions to search for his inner truth, his path inward may also be filled with great danger. Going inward may lead to madness and the abyss, for the unconscious is filled with images that he may not yet understand, lurking and waiting to lure you ever inside. Like a man that gets lost in his own dreams, the hermit may find himself stuck in a world of his own, alone, trapped, unreal. You must learn to balance your need for truth with connection to your fellow human.\\n\\nWhen it comes to work, the hermit reversal meaning refers to your preparedness to get to the bottom of something that has been troubling you for quite some time now. There is searching to be done, and it will be your responsibility to ask the question that will allow the other people to understand the circumstances.","desc":"The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that \\"where I am, you also may be.\\"\\nIt is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Éliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but--like the card itself--to the truth that the Divine Mysteries secure their own protection from those who are unprepared."},{"type":"major","name_short":"ar10","name":"Wheel Of Fortune","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-wheel-of-fortune-600x1024.png.webp","value":"10","value_int":10,"meaning_up":"The Wheel of Fortune turns evermore, seemingly to communicate that life is made up of both good and bad times, and that the cycle is one that we cannot control. It is something that is subjected to both kings and workers, and that nobody on earth can avoid what is fated. When you have good moments in your life, make sure that you enjoy to the fullest, for what comes up must always go down. The same is true in reverse - when you are in a bad situation, things will eventually become better again.Greater forces that are outside of human control are at work here. The same forces that govern the changing of the seasons, or the rising and setting of the sun is also the master of luck and the fate of individuals. Where it lands is as random as chance - you may find yourself at either the top or bottom, but remember that no matter what the outcome it may not last for very long, for the wheel always turns.","meaning_rev":"When the wheel is reversed, it means that luck has not been on your side and misfortunes have been following you. When it\'s associated with this card, you must understand that these are due to external influences that you cannot control. Like the wheel, our luck and our fate is always in motion, and sometimes we are on the bottom. Be assured that the wheel will turn again, and you will be okay again soon. \\n\\nWhat you shouldn\'t do however, is cling to the illusion of control. Perhaps in this turn of the wheel, the lesson is to learn to let go and release. There are things that cannot be moved by human will and action alone. When we do not let go, it can bring only more suffering, for you may blame yourself for actions that could not have altered the situation. When we learn to accept, we also learn to forgive ourselves. We learn to move on, and move forward - and eventually, we learn that this feeling of acceptance can push the wheel again forward, and move it towards a new cycle.\\n\\n","desc":"In this symbol I have again followed the reconstruction of Éliphas Lévi, who has furnished several variants. It is legitimate--as I have intimated--to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel occupy the angles of the card, and the wheel itself follows other indications of Lévi in respect of Ezekiel\'s vision, as illustrative of the particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged with the letters of the Divine Name--to shew that Providence is imphed through all. But this is the Divine intention within, and the similar intention without is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism by stultifying the essential idea of stability amidst movement.\\nBehind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, from the days of Lévi onward, the occult explanations of this card are--even for occultism itself--of a singularly fatuous kind. It has been said to mean principle, fecundity, virile honour, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane."},{"type":"major","name_short":"ar11","name":"Justice","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-justice-e1646572989637-600x1024.png.webp","value":"11","value_int":11,"meaning_up":"The decisions that you make now have long-term effects in all things, both for yourself and others. There will always come a time where you will be judged. The Justice tarot card appearing in a reading signals that a judgment will be made fairly and accordingly. The decisions that you have made in the past will be carefully weighed with fairness. Your feelings around this card may differ depending on your situation.\\n\\nIf you have been wronged, this card\'s appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning. Her appearance represents a chance for you to change your actions now for a better future. When a tarot card reading shows the figure of justice, it is time to account for your actions.Another meaning of the Justice card is truth. Truth must come to pass, and this cannot be found from the mouths and gossip of others. Instead, it\'s based on facts. Learn the truth about others and yourself, speak and know the truth before passing a judgment. During a reading, when you see the Justice Tarot card, you need to be fair in all your deeds. By following the right procedure to learn the truth, you will understand what your tasks are.\\n\\nAnother meaning of Justice Tarot card during a reading is to symbolize that attention is needed. It could be about your life, career or just an important decision that you need to make. If you have been unsure about something, it is time to get a solution once and for all.","meaning_rev":"A reversed Justice tarot card could indicate various things. One Justice reversal meaning is to show you are living in denial. You are not willing to accept the consequences of your actions or others. You are running from your guilt. You must however, be aware that these are actions that are in the past. Your future depends on your actions today - and what you will do to tip the scales in balance again. How can you make up for your wrongs? Taking action gives you a chance to change and stop judging yourself. In legal matters, this could represent an unfair outcome of a case that you will not accept.","desc":"As this card follows the traditional symbolism and carries above all its obvious meanings, there is little to say regarding it outside the few considerations collected in the first part, to which the reader is referred.\\nIt will be seen, however, that the figure is seated between pillars, like the High Priestess, and on this account it seems desirable to indicate that the moral principle which deals unto every man according to his works--while, of course, it is in strict analogy with higher things;--differs in its essence from the spiritual justice which is involved in the idea of election. The latter belongs to a mysterious order of Providence, in virtue of which it is possible for certain men to conceive the idea of dedication to the highest things. The operation of this is like the breathing of the Spirit where it wills, and we have no canon of criticism or ground of explanation concerning it. It is analogous to the possession of the fairy gifts and the high gifts and the gracious gifts of the poet: we have them or have not, and their presence is as much a mystery as their absence. The law of Justice is not however involved by either alternative. In conclusion, the pillars of Justice open into one world and the pillars of the High Priestess into another."},{"type":"major","name_short":"ar12","name":"The Hanged Man","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-hanged-man-600x1024.png.webp","value":"12","value_int":12,"meaning_up":"The hanged man understands that his position is a sacrifice that he needed to make in order to progress forward - whether as repentance for past wrongdoings, or a calculated step backward to recalculate his path onward. This time he spends here will not be wasted, he does this as part of his progression forward. His upside down state can also symbolize the feeling of those that walk a spiritual path, for they see the world differently. Where there are others that do not understand the need to sacrifice, you see it differently. This is a natural course of action for you as you walk the path alone.\\n\\nThe Hanged Man card reflects a particular need to suspend certain action. As a result, this might indicate a certain period of indecision. This means that certain actions or decisions which need to be properly implemented are likely to be postponed even if there is an urgency to act at this particular moment. In fact, it would be ultimately the best if you are capable of stalling certain actions in order to ensure that you have more time to reflect on making critical decisions, this will ultimately be the best.This is a card which is mainly designated towards waiting and suspension. This suggests that this might be the thing that you need to do in order to achieve success or to wait for the proper opportunity. Keep in mind that taking action is not always the best solution and in certain cases refraining from doing so might bring you just as much, if not more benefits.","meaning_rev":"The reversal meaning of the Hanged Man card represents a very specific period of time during which you feel as if you are sacrificing a significant amount of time while getting nothing in return. You might have felt as if certain things are at a state of an absolute standstill without any particular resolution or movement. It’s as if you are putting your entire effort and attention into something but nothing turns out as it should.","desc":"The gallows from which he is suspended forms a Tau cross, while the figure--from the position of the legs--forms a fylfot cross. There is a nimbus about the head of the seeming martyr. It should be noted (1) that the tree of sacrifice is living wood, with leaves thereon; (2) that the face expresses deep entrancement, not suffering; (3) that the figure, as a whole, suggests life in suspension, but life and not death. It is a card of profound significance, but all the significance is veiled. One of his editors suggests that Éliphas Lévi did not know the meaning, which is unquestionable nor did the editor himself. It has been called falsely a card of martyrdom, a card a of prudence, a card of the Great Work, a card of duty; but we may exhaust all published interpretations and find only vanity. I will say very simply on my own part that it expresses the relation, in one of its aspects, between the Divine and the Universe.\\nHe who can understand that the story of his higher nature is imbedded in this symbolism will receive intimations concerning a great awakening that is possible, and will know that after the sacred Mystery of Death there is a glorious Mystery of Resurrection."},{"type":"major","name_short":"ar13","name":"Death","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-death-600x1024.png.webp","value":"13","value_int":13,"meaning_up":"Death is one of the most feared cards in a Tarot Deck, and it is very misunderstood. Many people avoid mentioning this card because it has that much power. Most times, people take the name of the card literally. However, the real meaning within the Death card is one of the most positive in the whole deck.\\n\\nThe Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open. The past needs to be placed behind you, so you can focus your energy on what is ahead of you.\\n\\nAnother meaning is that you are going to go through a major change, transition, or transformation. The old version of you needs to ‘die’ to allow the new you to be created. This can be a scary time for you because you may be unsure of what will happen in the future. Even if you are scared, you should welcome the change because you are opening the door to new life events.\\n\\nDeath can also mean that you need to let go of any unhealthy attachments that you have in your life. This is an important part of life, so learning to keep moving forward is one of the lessons Death teaches us.","meaning_rev":"The Death reversal meaning is still about change, but that you have been resisting it. You could be worried about letting go of the past, or you could not be sure of the changes that you need to make to go forward. Resisting the change and holding onto the past can limit your future, which can cause you to feel like you are in limbo. You should take some time to assess the ways that you have been approaching changes in your life. You may find you have been halting the changes that you need due to fears of the unknown. While you can still be afraid, you should trust that you are taking the right steps and move forward. Life moves on, so fighting passing time is only going to leave you with regrets. Death does not have to be a card of regret, especially if you heed its warning.\\n\\n","desc":"The veil or mask of life is perpetuated in change, transformation and passage from lower to higher, and this is more fitly represented in the rectified Tarot by one of the apocalyptic visions than by the crude notion of the reaping skeleton. Behind it lies the whole world of ascent in the spirit. The mysterious horseman moves slowly, bearing a black banner emblazoned with the Mystic Rose, which signifies life. Between two pillars on the verge of the horizon there shines the sun of immortality. The horseman carries no visible weapon, but king and child and maiden fall before him, while a prelate with clasped hands awaits his end.\\nThere should be no need to point out that the suggestion of death which I have made in connection with the previous card is, of course, to be understood mystically, but this is not the case in the present instance. The natural transit of man to the next stage of his being either is or may be one form of his progress, but the exotic and almost unknown entrance, while still in this life, into the state of mystical death is a change in the form of consciousness and the passage into a state to which ordinary death is neither the path nor gate. The existing occult explanations of the 13th card are, on the whole, better than usual, rebirth, creation, destination, renewal, and the rest."},{"type":"major","name_short":"ar14","name":"Temperance","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-temperance-600x1024.png.webp","value":"14","value_int":14,"meaning_up":"In moments where there is anxiety or great stress, you have been able to remain calm throughout. You are a person who has mastered the art of not letting things get to you, and this allows you to achieve much progress in all areas you seek out to explore. The Temperance tarot card suggests moderation and balance, coupled with a lot of patience. Where this card appears, there is the suggestion that extremity in any situation is to be avoided.The Temperance card implies that you have a clear vision and know what you want to achieve. This is an indication of higher learning, which is a critical attribute in the journey of life. It reflects that you have found peace with what you are doing and everything is unfolding as it ought to. The Temperance card, in relation to other people, shows that you are able to adapt and work in harmony with your community, your coworkers and your loved ones. Your calmness in all matters gives them comfort and puts them at ease.\\n\\nTemperance may also indicate a time to evaluate and re-examine the priorities you have chosen. This will help you create a balance between your outer and inner self. At the end of it all, you will find greater purpose and meaning in your actions, for her message is that we cannot live fully in either. ","meaning_rev":"Temperance in reversed is a reflection of something that is out of balance and may be causing stress and anxiety. The real meaning of the Temperance card can be deciphered using the other cards in the spread to identify areas where this imbalance is being caused. A Temperance in reversal may also be used as a warning;  if you take a certain path, it would lead to turbulence and excess.\\n\\nLack of a long-term plan or vision may also be the Temperance reversal meaning. This creates a lack of purpose for you, leaving you feeling lopsided as you search here and there for what you should be doing. You must reflect and think carefully about what needs to change. Temperance reminds us that all things are only good in moderation, and that we must examine in which aspects of our lives we are breaking the balance.","desc":"A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary. I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from chalice to chalice. It has one foot upon the earth and one upon waters, thus illustrating the nature of the essences. A direct path goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein.\\nSo also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. It is, moreover, untrue to say that the figure symbolizes the genius of the sun, though it is the analogy of solar light, realized in the third part of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going."},{"type":"major","name_short":"ar15","name":"The Devil","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-devil-600x1024.png.webp","value":"15","value_int":15,"meaning_up":"Getting the devil card in your reading shows that you have feelings of entrapment, emptiness and lack of fulfillment in your life. It might also mean that you are a slave to materialism and opulence and no matter how hard you try, you just can’t seem to shake off the feeling of wanting to indulge in luxurious living. \\n\\nYou might be aware that this kind of lifestyle is leading you down the rabbit hole, but you have that feeling of not having any form of control over your actions or urges.\\nAddiction to substances or material pleasures can also be the reason for your feelings of powerlessness and entrapment. In situations such as these, you may feel as though you are a slave, unable to control your impulses or willpower to direct yourself towards something other than the satisfaction of these desires. ","meaning_rev":"The upside down meaning of the Devil card can be the moment when an individual becomes self-aware and breaks all of the chains that come with addiction and poor habits. It might be because they are tired of running in circles and are in need of change. \\n\\nBut one thing is usually clear – breaking off these chains, especially those of addiction is never easy. So, one has to be prepared to make the necessary changes that might initially seem painful to make the adjustments that will pay off in the end by being able to find your true self again. \\n\\nSelf-assessment is called for in this case and the individual needs to take some time and list all of the things that they need to get rid of. And once that has been done, and then it would be time for them to embark on the difficult journey of self-improvement.","desc":"The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch, inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof is the chain and fatality of the material life.\\nThe figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than his usual derision for the arts which he pretended to respect and interpret as a master therein, Éliphas Lévi affirms that the Baphometic figure is occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth therefrom who have eaten the forbidden fruit."},{"type":"major","name_short":"ar16","name":"The Tower","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-tower-600x1024.png.webp","value":"16","value_int":16,"meaning_up":"The Tower represents change in the most radical and momentous sense. It is for this reason that the card itself visually looks so unnerving. But it doesn\'t necessarily have to be truly frightening or ominous. Because at the heart of this card, its message is foundational, groundbreaking change.\\n\\nThe kind of event that the Tower card marks does not have to be something terrible, like a disaster or a great loss.  Change itself is a normal part of life that one has to embrace. But it can sometimes strike fear, for it means that we must abandon the truths that we have known prior to this event. The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.\\nBe positive, it is time for you to replace the old foundations of the past with something that is more genuine and will serve you better in what is to come.\\n\\nIn terms of work, there is an inevitable argument bound to happen. You need to be in control and keep your temper in check. Avoid saying something that may hurt other people. When it comes to your love life, your romantic relationship may be nearing its end. Take this as a warning - if you really value your relationship, then it is time for you to take damage control or open a communication to clear misunderstandings. In your finances, the tower meaning refers to the need to be assured on your transactions.","meaning_rev":"When you get the Tower card reversed, you can feel some crisis looming along the horizon, and you are struggling as much as you can to try and avoid its manifestation. What you have not realized is that these breakdowns can be beneficial in breaking down your reliance on something that is false. The tower is built on faulty foundations, and it must fall. Though the destruction will be painful, the humbleness resulting from it can bring us peace.\\n\\nWhat you relied on will no longer be there for you. Do not take this as a drastic and depressing change, it is time for you to become more self-reliant. ","desc":"Occult explanations attached to this card are meagre and mostly disconcerting. It is idle to indicate that it depicts min in all its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifies the materialization of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way the old truth that \\"except the Lord build the house, they labour in vain that build it.\\"\\nThere is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers. The one is the literal word made void and the other its false interpretation. In yet a deeper sense, it may signify also the end of a dispensation, but there is no possibility here for the consideration of this involved question."},{"type":"major","name_short":"ar17","name":"The Star","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-star-600x1024.png.webp","value":"17","value_int":17,"meaning_up":"The Star brings hope, renewed power, and strength to carry on with life. It shows how abundantly blessed you are by the universe as evidenced by the various things around you. It may not be directly evident at the moment, for this card follows the trauma of the Tower card. Remember that you hold within you all that you need for your fulfillment - the only thing that you need is courage. For this, you have all reasons to rejoice. To see this card is a message to have faith, for the universe will bless you and bring forth all that you need.\\nTo receive the Star in your reading means that you have gone and passed through a terrible life challenge. You have managed to go through this without losing your hope. While you suffered, you perhaps were not aware of your own strength, but you are now perhaps recognizing that the loss helped you discover your own resilience and inner power. It is only now that you can really appreciate all that you have.","meaning_rev":"When the Star card is reversed, it means that you are feeling as though everything has turned against you. The challenges that you would normally see as exciting seem instead to make you feel as though you cannot overcome them. You have lost faith in something, whether inside yourself or with something you normally find dear. \\n\\nWithout hope, without faith, we cannot find the motivation to progress forward in the challenges that we face. Where in your life are you feeling hopeless? In what ways do you already feel defeated? And how does that affect your actions? The star reversed asks us to nurture our sense of hope and positive energy to help propel our actions with joy instead of fear.","desc":"A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights. The figure expresses eternal youth and beauty. The star is l\'étoile flamboyante, which appears in Masonic symbolism, but has been confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has been said truly that the mottoes of this card are \\"Waters of Life freely\\" and \\"Gifts of the Spirit.\\"\\nThe summary of several tawdry explanations says that it is a card of hope. On other planes it has been certified as immortality and interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure that they can receive her influx."},{"type":"major","name_short":"ar18","name":"The Moon","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-moon-600x1024.png.webp","value":"18","value_int":18,"meaning_up":"On one hand, the Moon card can symbolize your imagination is taking the best of you. In the dark of the night, you are taking a path that you are unsure of, for there could be danger lurking in its depths. You are the crawfish embarking on the path in the card. The moon\'s light can bring you clarity and understanding and you should allow your intuition to guide you through this darkness. \\n\\nYou need to be aware of the situations that are causing fear and anxiety in your mind, whether it is now or in the future. It alerts you not to allow inner disturbances and self-deception to take the best of you. These deep memories and fears must be let go, and the negative energies must be released and turned into something constructive.\\n\\nAnother reading of the Moon card is the existence of illusion. Some hidden truth must be discovered, for what you are seeing now may just be a trick of the light. You must search for the hidden forces that must be unraveled.","meaning_rev":"A Moon reversal in a reading can sometimes indicate that the darker and more negative aspects of the moon are present in your life. It could represent confusion and unhappiness - you want to make progress, but you are not sure what is the right thing to do. You must deal with your anxiety and fears by overcoming them, for they are like shadows in the dark. It is time to believe in yourself and move forward. \\n\\nThe moon reversal meaning indicates that you are in an intuitive period or you have recently battled confusion, anxiety, and self-deception. It could be that you are misinterpreting how you have been feeling however you are starting to improve on this.\\n\\nAnother reversed moon meaning is that the forces of the night that are bringing you confusion are starting to dissipate. You have started managing your fears and anxiety. Whatever negative energies you have been facing are slowly fading away. It presents a liberating experience as you discover the positive side of things.\\n\\n","desc":"The distinction between this card and some of the conventional types is that the moon is increasing on what is called the side of mercy, to the right of the observer. It has sixteen chief and sixteen secondary rays. The card represents life of the imagination apart from life of the spirit. The path between the towers is the issue into the unknown. The dog and wolf are the fears of the natural mind in the presence of that place of exit, when there is only reflected light to guide it.\\nThe last reference is a key to another form of symbolism. The intellectual light is a reflection and beyond it is the unknown mystery which it cannot shew forth. It illuminates our animal nature, types of which are represented below--the dog, the wolf and that which comes up out of the deeps, the nameless and hideous tendency which is lower than the savage beast. It strives to attain manifestation, symbolized by crawling from the abyss of water to the land, but as a rule it sinks back whence it came. The face of the mind directs a calm gaze upon the unrest below; the dew of thought falls; the message is: Peace, be still; and it may be that there shall come a calm upon the animal nature, while the abyss beneath shall cease from giving up a form."},{"type":"major","name_short":"ar19","name":"The Sun","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-sun-600x1024.png.webp","value":"19","value_int":19,"meaning_up":"The Sun card represents success, abundance, and radiance. Like the sun itself, it gives strength and vitality to all those that are lucky enough to feel its rays. There is much joy and happiness that is coming to you.\\n\\nBecause of your own personal fulfillment, you provide others with inspiration and joy as well. People are drawn to you because they are capable of seeing the warm and beautiful energy which you bring into their lives. You are also in a position in which you are capable of sharing your qualities as well as achievements with other people. You radiate love and affection towards those you care about the most.The card shows that you have a significant sense of deserved confidence right now. Life is currently particularly good, and the sun is shining your way as you reach the goals that you set. The Sun is one of the cards in the tarot which provide nothing but good feelings and fulfillment. ","meaning_rev":"In the reversed position, the Sun indicates that you might have significant difficulties finding positive aspects to certain situations. The clouds might be blocking out the warmth and light that you need to progress. This might be preventing you from feeling confident and powerful. You may experience certain setbacks which are damaging your optimism and enthusiasm.\\n\\nOn the other hand, the Sun reversed might be indicative that you are being unrealistic. It might be a sign that you have an overly optimistic perception of certain situations. These are things that you need to take into account in order to ensure that you are on the right track and your successes continue as they do.","desc":"The naked child mounted on a white horse and displaying a red standard has been mentioned already as the better symbolism connected with this card. It is the destiny of the Supernatural East and the great and holy light which goes before the endless procession of humanity, coming out from the walled garden of the sensitive life and passing on the journey home. The card signifies, therefore, the transit from the manifest light of this world, represented by the glorious sun of earth, to the light of the world to come, which goes before aspiration and is typified by the heart of a child.\\nBut the last allusion is again the key to a different form or aspect of the symbolism. The sun is that of consciousness in the spirit - the direct as the antithesis of the reflected light. The characteristic type of humanity has become a little child therein--a child in the sense of simplicity and innocence in the sense of wisdom. In that simplicity, he bears the seal of Nature and of Art; in that innocence, he signifies the restored world. When the self-knowing spirit has dawned in the consciousness above the natural mind, that mind in its renewal leads forth the animal nature in a state of perfect conformity."},{"type":"major","name_short":"ar20","name":"The Last Judgment","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-judgement-600x1024.png.webp","value":"20","value_int":20,"meaning_up":"The traditional Judgement meaning focuses on the moment when we reflect and evaluate ourselves and our actions. It is through self-reflection that we can have a clearer and objective understanding about where we are now, and what we need to do in order to grow as humans. The Judgement card appearing in a reading signifies that you are coming close to this significant point in your life where you must start to evaluate yourself. \\n\\nTo see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection. You now have a clearer idea of what you need to change and how you need to be true yourself and your needs. This can mean making small changes to your daily life or making huge changes that not only affect you but the people close to you.The Judgement card reminds us that we all will be faced with choices that will have an astounding effect for your entire life. The card brings to mind moments where actions you have taken have changed the course of your path for good. There may have been a moment where there is no looking back. The consequences of those actions eventually will catch up to you, and this card seems to indicate that this is the time. You may have to let go of the past, so you can move forward with your plans to have a new life. ","meaning_rev":"The reversed Judgement card can mean that you doubt and judge yourself too harshly. This could be causing you to miss opportunities that were awaiting you. The lost momentum causes you to fall behind in your plans, which can make it difficult to move forward. This means that you should not be cautious, but you should be moving forward with pride and confidence.\\n\\nAnother reading of the Judgement reversal card can be a push to take time out of your busy routine to reflect upon your life to this point, and what you have learned so far. You are most likely not giving yourself the time or space to fully think about the matter and learn the lessons you need to to be able to progress with awareness. You could also be too critical of your past actions, so you are not giving yourself the forgiveness to move forward. The mistakes that we have made in the past are learning tools, so they help us move though life. Focusing too hard on these mistakes can cause us to trip and fall.","desc":"I have said that this symbol is essentially invariable in all Tarot sets, or at least the variations do not alter its character. The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. It should be noted that all the figures are as one in the wonder, adoration and ecstacy expressed by their attitudes. It is the card which registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within.\\nHerein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue to depict, for those who can see no further, the Last judgment and the resurrection in the natural body; but let those who have inward eyes look and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be compared with that which passes under the name of Temperance."},{"type":"major","name_short":"ar21","name":"The World","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-world-600x1024.png.webp","value":"21","value_int":21,"meaning_up":"To encounter the World in your cards is to encounter a great unity and wholeness. It symbolizes the moment when the inner and the outer worlds - self and other - become a single entity. In some traditions, this state is described as enlightenment, or nirvana. There is a recognition that the individual self is profoundly linked with all other things, and that we all dance and sway along the flow of life to one rhythm. Not only do you hear this rhythm, but you participate in it - following the dips and the rises, the joys and the sorrows.The meaning of the World card is fulfillment, achievement, and completion. This shows that all the efforts that you have been putting in place are starting to pay off. It reflects that you have completed a major milestone in your life and you have built the resilience to withstand challenges. The World may indicate completion of a long-term project, study or any other major event in your life. It may also mean the birth of a child, marriage, graduation or any other thing that you have accomplished.\\n\\nThe World card shows that you have a desire to give back to the community in various ways. You have a commitment to make the world a better place because you understand that everything is connected.  ","meaning_rev":"You are drawing near to something that marks the end of a journey or an era. You may have many accomplishments that have lined your path, but there is a strange emptiness that fills you when you look backwards upon it, as if you have all the pieces but they are not coming together. What is missing? Do you feel connected to what you\'re doing? Do you feel connected to others? What alienates you from feeling complete? From feeling whole?","desc":"As this final message of the Major Trumps is unchanged--and indeed unchangeable--in respect of its design, it has been partly described already regarding its deeper sense. It represents also the perfection and end of the Cosmos, the secret which is within it, the rapture of the universe when it understands itself in God. It is further the state of the soul in the consciousness of Divine Vision, reflected from the self-knowing spirit. But these meanings are without prejudice to that which I have said concerning it on the material side.\\nIt has more than one message on the macrocosmic side and is, for example, the state of the restored world when the law of manifestation shall have been carried to the highest degree of natural perfection. But it is perhaps more especially a story of the past, referring to that day when all was declared to be good, when the morning stars sang together and all the Sons of God shouted for joy. One of the worst explanations concerning it is that the figure symbolizes the Magus when he has reached the highest degree of initiation; another account says that it represents the absolute, which is ridiculous. The figure has been said to stand for Truth, which is, however, more properly allocated to the seventeenth card. Lastly, it has been called the Crown of the Magi."},{"name":"Page of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-page-of-wands-card-600x1024.jpg.webp","name_short":"wapa","value":"page","value_int":11,"suit":"wands","type":"minor","meaning_up":"When we see the Page of Wands, we see a youth with enormous excitement and curiosity for the world. He knows what to do, he has the passion to succeed, but due to his inexperience and maybe a little fear of the unknown, his ideas remain abstract. He identifies new worlds to explore, new opportunities he could take advantage of quite easily, and he is even gifted with the \\"big picture\\" vision needed to succeed. Even with all of this, he still has the tendency to either remain dormant, or get easily distracted with one idea after the other. If he doesn\'t learn to control this, it might be that he squanders the opportunities to advance himself.","meaning_rev":"With the Page of Wands reversed, it tends to emphasize the more negative character traits of the upright version. He tends to show up when your mind is filled with one great idea after another, and are unable to progress beyond the beginning planning stages. Perhaps you have started a project or a hobby expecting that it would grow to great levels and instead you end up nowhere. As painful as it is, it is a good way of telling you that you should venture into other meaningful projects and avoid wasting time.","desc":"In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange."},{"name":"Knight of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-knight-of-wands-600x1024.jpg.webp","name_short":"wakn","value":"knight","value_int":12,"suit":"wands","type":"minor","meaning_up":"The Knight of Wands\' symbolism is straightforward. When it appears, it means a great time to get away and travel. The person should feel charged up and full of life. One is also ready to get things done. He is adventurous and can find fun things to do no matter where he is. There is never a dull moment when the Knight of Wands is around. When the Knight of Wands shows up in a reading it seems to suggest that the seeker wants to complete important tasks. One wants to impress others with one’s knowledge and skill. The card also shows up when the person is planning to move to another place of residence.\\n\\nIf you are starting a creative project, then you should do so with lots of energy and enthusiasm. However, you should balance it with realistic and well-rounded views. You should also have a plan that takes into account the consequences of your actions.\\n\\nGetting the Knight of Wands in a reading can also mean that there is an event that you don’t expect to happen soon. If it is accompanied by the Eight of Wands, then you should expect a lot of changes in your life. More often than not, the Knight of Wands indicates a hasty change of job, residence, or anything in your life.","meaning_rev":"When you get a reversed Knight of Wands, it indicates frustrations and delays. You may feel angry and that you are not getting anywhere. A reversed Knight of Wands can translate to a loss of power. You may be trying to compensate for something that you don’t have total control over - this might lead to pessimism and loss of self-esteem.","desc":"He is shewn as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. The motion of the horse is a key to the character of its rider, and suggests the precipitate mood, or things connected therewith."},{"name":"Queen of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-queen-of-wands-600x1024.jpg.webp","name_short":"waqu","value":"queen","value_int":13,"suit":"wands","type":"minor","meaning_up":"In general, the Queen of wands in a reading meaning may depict a person of extreme focus and fiery passion. She is courageous and individualistic, though at times she may appear self-centered. They have a positive and an uplifting energy; they represent someone who is willing to be by your side and stand up for you.In terms of work, the Queen of wands signifies that you are planning to accomplish a significant amount of achievement in just a small amount of time. In the event that you are looking for a job, the appearance of this card may mean that a woman will play a major role in your career move. Generally speaking, in terms of your career, things are looking pretty good. The Queen of Wands in questions of love also sends a positive energy. For people who are searching for love, there is a possibility that you will find it soon.\\n\\nWhen it comes to your finances, there is a chance that you are being carried away on spending a significant amount of money. We advise you to keep your expenses on check, or you will regret it in the end. In terms of health and spirituality, the Queen of Wands meaning may pertain to a spiritual hunger, a quest, or a search for meaning. ","meaning_rev":"Regardless of its position (upright or reversed) the Queen of Wands symbolizes fertility, and all the feelings, emotions, and aspects that it brings. It may mean that there is someone who needs your help right now. In terms of work, there is a probability that you will encounter obstacles that will hamper your progress. Do not mind these obstacles and continue doing your job as you see fit. To see this card may also be a reminder to adhere to your rational side - to balance your sometimes chaotic energy with clear though, and you will be more successful.","desc":"The Wands throughout this suit are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen\'s personality corresponds to that of the King, but is more magnetic."},{"name":"King of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/king-of-wands-modern-way-tarot-600x1024.jpg.webp","name_short":"waki","value":"king","value_int":14,"suit":"wands","type":"minor","meaning_up":"The meaning of the upright position of the King of Wands represents pure energy. Unlike the other wands cards in the deck however, this particular one is not focused on pure creativity. Instead, this king is actually way more likely to take an idea and to decisively implement it himself. The King of Wands is a natural born leader of people, and he is also extremely capable. Once the king sets for himself a certain aim or a goal, he is going to conveniently stick to it in order to ensure that it becomes a reality.\\n\\n","meaning_rev":"The negative aspect of the card is associated, as you may guess, with a feeling of arrogance. He can even be rather aggressive in the actual pursuit of his goals, regardless of whether he’s actually conscious or not of it. He wouldn’t show restraint, nor even the humbleness to know when his assistance isn’t actually required.\\n\\nWhen reversed, the card depicts a personality which is prone to taking rash, impulsive and hasty decisions. This person could be pushy, overbearing as well as dominating at times. Even though he might rarely do this with a sense of malice or with an intention to make someone feel submissive, this is without a doubt a part of his character that one can be frustrated at.\\n\\nIn reversal, the card represents the worst spectrum of the qualities of the fire – selfishness and ruthlessness. He can be manipulative as long as you are serving his purpose. With this in mind, the card definitely points out strong and weak aspects, and reflecting on his image can help you dig deeper in your personality. ","desc":"The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne."},{"name":"Ace of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-ace-of-wands-card-600x1024.jpg.webp","name_short":"waac","value":"ace","value_int":1,"suit":"wands","type":"minor","meaning_up":"Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.","meaning_rev":"Fall, decadence, ruin, perdition, to perish also a certain clouded joy.","desc":"A hand issuing from a cloud grasps a stout wand or club."},{"name":"Two of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-two-of-wands-600x1024.jpg.webp","name_short":"wa02","value":"two","value_int":2,"suit":"wands","type":"minor","meaning_up":"Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world\'s wealth.","meaning_rev":"Surprise, wonder, enchantment, emotion, trouble, fear.","desc":"A tall man looks from a battlemented roof over sea and shore; he holds a globe in his right hand, while a staff in his left rests on the battlement; another is fixed in a ring. The Rose and Cross and Lily should be noticed on the left side."},{"name":"Three of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-three-of-wands-card-600x1024.jpg.webp","name_short":"wa03","value":"three","value_int":3,"suit":"wands","type":"minor","meaning_up":"He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.","meaning_rev":"The end of troubles, suspension or cessation of adversity, toil and disappointment.","desc":"A calm, stately personage, with his back turned, looking from a cliff\'s edge at ships passing over the sea. Three staves are planted in the ground, and he leans slightly on one of them."},{"name":"Four of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/four-of-wands-modern-way-tarot-card-600x1024.jpg.webp","name_short":"wa04","value":"four","value_int":4,"suit":"wands","type":"minor","meaning_up":"They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.","meaning_rev":"The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.","desc":"From the four great staves planted in the foreground there is a great garland suspended; two female figures uplift nosegays; at their side is a bridge over a moat, leading to an old manorial house."},{"name":"Five of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-five-of-wands-600x1024.jpg.webp","name_short":"wa05","value":"five","value_int":5,"suit":"wands","type":"minor","meaning_up":"Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.","meaning_rev":"Litigation, disputes, trickery, contradiction.","desc":"A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare, and hereto correspond the"},{"name":"Six of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-six-of-wands-600x1024.jpg.webp","name_short":"wa06","value":"six","value_int":6,"suit":"wands","type":"minor","meaning_up":"The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King\'s courier; it is expectation crowned with its own desire, the crown of hope, and so forth.","meaning_rev":"Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.","desc":"A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side."},{"name":"Seven of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/seven-of-wands-card-modern-way-tarot-600x1024.jpg.webp","name_short":"wa07","value":"seven","value_int":7,"suit":"wands","type":"minor","meaning_up":"It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.","meaning_rev":"Perplexity, embarrassments, anxiety. It is also a caution against indecision.","desc":"A young man on a craggy eminence brandishing a staff; six other staves are raised towards him from below."},{"name":"Eight of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-eight-of-wands-600x1024.jpg.webp","name_short":"wa08","value":"eight","value_int":8,"suit":"wands","type":"minor","meaning_up":"Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.","meaning_rev":"Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.","desc":"The card represents motion through the immovable-a flight of wands through an open country; but they draw to the term of their course. That which they signify is at hand; it may be even on the threshold."},{"name":"Nine of Wands","pic":"https://www.alittlesparkofjoy.com/wp-content/uploads/2021/05/nine-of-wands-modern-way-tarot-deck-594x1024.webp","name_short":"wa09","value":"nine","value_int":9,"suit":"wands","type":"minor","meaning_up":"The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.","meaning_rev":"Obstacles, adversity, calamity.","desc":"The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves--erect, in orderly disposition, like a palisade."},{"name":"Ten of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/ten-of-wands-modern-way-tarot-600x1024.jpg.webp","name_short":"wa10","value":"ten","value_int":10,"suit":"wands","type":"minor","meaning_up":"A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.","meaning_rev":"Contrarieties, difficulties, intrigues, and their analogies.","desc":"A man oppressed by the weight of the ten staves which he is carrying."},{"name":"Page of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-page-of-cups-card-600x1024.jpg.webp","name_short":"cupa","value":"page","value_int":11,"suit":"cups","type":"minor","meaning_up":"Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.","meaning_rev":"Taste, inclination, attachment, seduction, deception, artifice.","desc":"A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form."},{"name":"Knight of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-knight-of-cups-600x1024.jpg.webp","name_short":"cukn","value":"knight","value_int":12,"suit":"cups","type":"minor","meaning_up":"Arrival, approach--sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.","meaning_rev":"Trickery, artifice, subtlety, swindling, duplicity, fraud.","desc":"Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision."},{"name":"Queen of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-queen-of-cups-600x1024.jpg.webp","name_short":"cuqu","value":"queen","value_int":13,"suit":"cups","type":"minor","meaning_up":"Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.","meaning_rev":"The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.","desc":"Beautiful, fair, dreamy--as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream."},{"name":"King of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-king-of-cups-600x1024.jpg.webp","name_short":"cuki","value":"king","value_int":14,"suit":"cups","type":"minor","meaning_up":"Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.","meaning_rev":"Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.","desc":"He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards."},{"name":"Ace of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-ace-of-cups-card-600x1024.jpg.webp","name_short":"cuac","value":"ace","value_int":1,"suit":"cups","type":"minor","meaning_up":"House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.","meaning_rev":"House of the false heart, mutation, instability, revolution.","desc":"The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana."},{"name":"Two of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-two-of-cups-600x1024.jpg.webp","name_short":"cu02","value":"two","value_int":2,"suit":"cups","type":"minor","meaning_up":"Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and--as a suggestion apart from all offices of divination--that desire which is not in Nature, but by which Nature is sanctified.","meaning_rev":"Lust, cupidity, jealousy, wish, desire, but the card may also give, says W., \\"that desire which is not in nature, but by which nature is sanctified.\\"","desc":"A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion\'s head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place."},{"name":"Three of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-three-of-cups-card-600x1024.jpg.webp","name_short":"cu03","value":"three","value_int":3,"suit":"cups","type":"minor","meaning_up":"The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing,","meaning_rev":"Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.","desc":"Maidens in a garden-ground with cups uplifted, as if pledging one another."},{"name":"Four of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-four-of-cups-card-600x1024.jpg.webp","name_short":"cu04","value":"four","value_int":4,"suit":"cups","type":"minor","meaning_up":"Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.","meaning_rev":"Novelty, presage, new instruction, new relations.","desc":"A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment."},{"name":"Five of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-five-of-cups-card-600x1024.jpg.webp","name_short":"cu05","value":"five","value_int":5,"suit":"cups","type":"minor","meaning_up":"A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.","meaning_rev":"News, alliances, affinity, consanguinity, ancestry, return, false projects.","desc":"A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration. Reversed: News, alliances, affinity, consanguinity, ancestry, return, false projects"},{"name":"Six of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-six-of-cups-card-600x1024.jpg.webp","name_short":"cu06","value":"six","value_int":6,"suit":"cups","type":"minor","meaning_up":"A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.","meaning_rev":"The future, renewal, that which will come to pass presently.","desc":"Children in an old garden, their cups filled with flowers."},{"name":"Seven of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-seven-of-cups-1-600x1024.jpg.webp","name_short":"cu07","value":"seven","value_int":7,"suit":"cups","type":"minor","meaning_up":"Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.","meaning_rev":"Desire, will, determination, project.","desc":"Strange chalices of vision, but the images are more especially those of the fantastic spirit."},{"name":"Eight of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-eight-of-cups-600x1024.jpg.webp","name_short":"cu08","value":"eight","value_int":8,"suit":"cups","type":"minor","meaning_up":"The card speaks for itself on the surface, but other readings are entirely antithetical--giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence--either for good or evil.","meaning_rev":"Great joy, happiness, feasting.","desc":"A man of dejected aspect is deserting the cups of his felicity, enterprise, undertaking or previous concern."},{"name":"Nine of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-nine-of-cups-card-600x1024.jpg.webp","name_short":"cu09","value":"nine","value_int":9,"suit":"cups","type":"minor","meaning_up":"Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.","meaning_rev":"Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.","desc":"A goodly personage has feasted to his heart\'s content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects."},{"name":"Ten of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ten-of-cups-600x1024.jpg.webp","name_short":"cu10","value":"ten","value_int":10,"suit":"cups","type":"minor","meaning_up":"Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent\'s interests; also the town, village or country inhabited by the Querent.","meaning_rev":"Repose of the false heart, indignation, violence.","desc":"Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond."},{"name":"Page of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-page-of-pentacles-600x1024.jpg.webp","name_short":"pepa","value":"page","value_int":11,"suit":"pentacles","type":"minor","meaning_up":"Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.","meaning_rev":"Prodigality, dissipation, liberality, luxury; unfavourable news.","desc":"A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him."},{"name":"Knight of Pentacles","pic":"https://www.alittlesparkofjoy.com/wp-content/uploads/2021/05/knight-of-pentacles-modern-way-tarot-deck.webp","name_short":"pekn","value":"knight","value_int":12,"suit":"pentacles","type":"minor","meaning_up":"Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.","meaning_rev":"inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.","desc":"He rides a slow, enduring, heavy horse, to which his own aspect corresponds. He exhibits his symbol, but does not look therein."},{"name":"Queen of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/queen-of-pentacles-modern-way-tarot-card-600x1024.jpg.webp","name_short":"pequ","value":"queen","value_int":13,"suit":"pentacles","type":"minor","meaning_up":"Opulence, generosity, magnificence, security, liberty.","meaning_rev":"Evil, suspicion, suspense, fear, mistrust.","desc":"The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul; she has also the serious cast of intelligence; she contemplates her symbol and may see worlds therein."},{"name":"King of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-king-of-pentacles-600x1024.jpg.webp","name_short":"peki","value":"king","value_int":14,"suit":"pentacles","type":"minor","meaning_up":"Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.","meaning_rev":"Vice, weakness, ugliness, perversity, corruption, peril.","desc":"The figure calls for no special description the face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull\'s head should be noted as a recurrent symbol on the throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the correspondence of the four elements in human nature and that by which they may be governed. In many old Tarot packs this suit stood for current coin, money, deniers. I have not invented the substitution of pentacles and I have no special cause to sustain in respect of the alternative. But the consensus of divinatory meanings is on the side of some change, because the cards do not happen to deal especially with questions of money."},{"name":"Ace of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-ace-of-pentacles-600x1024.jpg.webp","name_short":"peac","value":"ace","value_int":1,"suit":"pentacles","type":"minor","meaning_up":"Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.","meaning_rev":"The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not.","desc":"A hand--issuing, as usual, from a cloud--holds up a pentacle."},{"name":"Two of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-two-of-pentacles-600x1024.jpg.webp","name_short":"pe02","value":"two","value_int":2,"suit":"pentacles","type":"minor","meaning_up":"On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.","meaning_rev":"Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.","desc":"A young man, in the act of dancing, has a pentacle in either hand, and they are joined by that endless cord which is like the number 8 reversed."},{"name":"Three of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-three-of-pentacles-600x1024.jpg.webp","name_short":"pe03","value":"three","value_int":3,"suit":"pentacles","type":"minor","meaning_up":"Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.","meaning_rev":"Mediocrity, in work and otherwise, puerility, pettiness, weakness.","desc":"A sculptor at his work in a monastery. Compare the design which illustrates the Eight of Pentacles. The apprentice or amateur therein has received his reward and is now at work in earnest."},{"name":"Four of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-four-of-pentacles-600x1024.jpg.webp","name_short":"pe04","value":"four","value_int":4,"suit":"pentacles","type":"minor","meaning_up":"The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.","meaning_rev":"Suspense, delay, opposition.","desc":"A crowned figure, having a pentacle over his crown, clasps another with hands and arms; two pentacles are under his feet. He holds to that which he has."},{"name":"Five of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/five-of-pentacles-modern-way-tarot-card-600x1024.jpg.webp","name_short":"pe05","value":"five","value_int":5,"suit":"pentacles","type":"minor","meaning_up":"The card foretells material trouble above all, whether in the form illustrated--that is, destitution--or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.","meaning_rev":"Disorder, chaos, ruin, discord, profligacy.","desc":"Two mendicants in a snow-storm pass a lighted casement."},{"name":"Six of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-six-of-pentacles-600x1024.jpg.webp","name_short":"pe06","value":"six","value_int":6,"suit":"pentacles","type":"minor","meaning_up":"Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.","meaning_rev":"Desire, cupidity, envy, jealousy, illusion.","desc":"A person in the guise of a merchant weighs money in a pair of scales and distributes it to the needy and distressed. It is a testimony to his own success in life, as well as to his goodness of heart."},{"name":"Seven of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-seven-of-pentacles-600x1024.jpg.webp","name_short":"pe07","value":"seven","value_int":7,"suit":"pentacles","type":"minor","meaning_up":"These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, purgation.","meaning_rev":"Cause for anxiety regarding money which it may be proposed to lend.","desc":"A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there."},{"name":"Eight of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/eight-of-pentacles-card-modern-way-tarot-600x1024.jpg.webp","name_short":"pe08","value":"eight","value_int":8,"suit":"pentacles","type":"minor","meaning_up":"Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.","meaning_rev":"Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.","desc":"An artist in stone at his work, which he exhibits in the form of trophies."},{"name":"Nine of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-nine-of-pentacles-600x1024.jpg.webp","name_short":"pe09","value":"nine","value_int":9,"suit":"pentacles","type":"minor","meaning_up":"Prudence, safety, success, accomplishment, certitude, discernment.","meaning_rev":"Roguery, deception, voided project, bad faith.","desc":"A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being."},{"name":"Ten of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ten-of-pentacles-600x1024.jpg.webp","name_short":"pe10","value":"ten","value_int":10,"suit":"pentacles","type":"minor","meaning_up":"Gain, riches; family matters, archives, extraction, the abode of a family.","meaning_rev":"Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.","desc":"A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground. The child\'s hand is on one of them."},{"name":"Page of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-page-of-swords-600x1024.jpg.webp","name_short":"swpa","value":"page","value_int":11,"suit":"swords","type":"minor","meaning_up":"Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.","meaning_rev":"More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.","desc":"A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment."},{"name":"Knight of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-knight-of-swords-600x1024.jpg.webp","name_short":"swkn","value":"knight","value_int":12,"suit":"swords","type":"minor","meaning_up":"Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.","meaning_rev":"Imprudence, incapacity, extravagance.","desc":"He is riding in full course, as if scattering his enemies. In the design he is really a prototypical hero of romantic chivalry. He might almost be Galahad, whose sword is swift and sure because he is clean of heart."},{"name":"Queen of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-queen-of-swords-600x1024.jpg.webp","name_short":"swqu","value":"queen","value_int":13,"suit":"swords","type":"minor","meaning_up":"Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.","meaning_rev":"Malice, bigotry, artifice, prudery, bale, deceit.","desc":"Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power."},{"name":"King of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-king-of-swords-600x1024.jpg.webp","name_short":"swki","value":"king","value_int":14,"suit":"swords","type":"minor","meaning_up":"Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.","meaning_rev":"Cruelty, perversity, barbarity, perfidy, evil intention.","desc":"He sits in judgment, holding the unsheathed sign of his suit. He recalls, of course, the conventional Symbol of justice in the Trumps Major, and he may represent this virtue, but he is rather the power of life and death, in virtue of his office."},{"name":"Ace of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ace-of-swords-600x1024.jpg.webp","name_short":"swac","value":"ace","value_int":1,"suit":"swords","type":"minor","meaning_up":"Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.","meaning_rev":"The same, but the results are disastrous; another account says--conception, childbirth, augmentation, multiplicity.","desc":"A hand issues from a cloud, grasping as word, the point of which is encircled by a crown."},{"name":"Two of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-two-of-swords-600x1024.jpg.webp","name_short":"sw02","value":"two","value_int":2,"suit":"swords","type":"minor","meaning_up":"Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.","meaning_rev":"Imposture, falsehood, duplicity, disloyalty.","desc":"A hoodwinked female figure balances two swords upon her shoulders."},{"name":"Three of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-three-of-swords-600x1024.jpg.webp","name_short":"sw03","value":"three","value_int":3,"suit":"swords","type":"minor","meaning_up":"Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.","meaning_rev":"Mental alienation, error, loss, distraction, disorder, confusion.","desc":"Three swords piercing a heart; cloud and rain behind."},{"name":"Four of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/four-of-swords-modern-way-tarot-card-600x1024.jpg.webp","name_short":"sw04","value":"four","value_int":4,"suit":"swords","type":"minor","meaning_up":"Vigilance, retreat, solitude, hermit\'s repose, exile, tomb and coffin. It is these last that have suggested the design.","meaning_rev":"Wise administration, circumspection, economy, avarice, precaution, testament.","desc":"The effigy of a knight in the attitude of prayer, at full length upon his tomb."},{"name":"Five of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-five-of-swords-card-600x1024.jpg.webp","name_short":"sw05","value":"five","value_int":5,"suit":"swords","type":"minor","meaning_up":"Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.","meaning_rev":"The same; burial and obsequies.","desc":"A disdainful man looks after two retreating and dejected figures. Their swords lie upon the ground. He carries two others on his left shoulder, and a third sword is in his right hand, point to earth. He is the master in possession of the field."},{"name":"Six of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-six-of-swords-600x1024.jpg.webp","name_short":"sw06","value":"six","value_int":6,"suit":"swords","type":"minor","meaning_up":"Journey by water, route, way, envoy, commissionary, expedient.","meaning_rev":"Declaration, confession, publicity; one account says that it is a proposal of love.","desc":"A ferryman carrying passengers in his punt to the further shore. The course is smooth, and seeing that the freight is light, it may be noted that the work is not beyond his strength."},{"name":"Seven of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-seven-of-swords-card-600x1024.jpg.webp","name_short":"sw07","value":"seven","value_int":7,"suit":"swords","type":"minor","meaning_up":"Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.","meaning_rev":"Good advice, counsel, instruction, slander, babbling.","desc":"A man in the act of carrying away five swords rapidly; the two others of the card remain stuck in the ground. A camp is close at hand."},{"name":"Eight of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-eight-of-swords-600x1024.jpg.webp","name_short":"sw08","value":"eight","value_int":8,"suit":"swords","type":"minor","meaning_up":"Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.","meaning_rev":"Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.","desc":"A woman, bound and hoodwinked, with the swords of the card about her. Yet it is rather a card of temporary durance than of irretrievable bondage."},{"name":"Nine of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-nine-of-swords-card-600x1024.jpg.webp","name_short":"sw09","value":"nine","value_int":9,"suit":"swords","type":"minor","meaning_up":"Death, failure, miscarriage, delay, deception, disappointment, despair.","meaning_rev":"Imprisonment, suspicion, doubt, reasonable fear, shame.","desc":"One seated on her couch in lamentation, with the swords over her. She is as one who knows no sorrow which is like unto hers. It is a card of utter desolation."},{"name":"Ten of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ten-of-swords-600x1024.jpg.webp","name_short":"sw10","value":"ten","value_int":10,"suit":"swords","type":"minor","meaning_up":"Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.","meaning_rev":"Advantage, profit, success, favour, but none of these are permanent; also power and authority.","desc":"A prostrate figure, pierced by all the swords belonging to the card."}]}');const{cards:g}=e(m),y=()=>{const e=[];for(let t=0;t<6;t+=1){let t=Math.floor(78*Math.random());for(;e.includes(g[t]);)t=Math.floor(78*Math.random());e.push(g[t])}return e};var w,v,b,T=w={};function _(){throw new Error("setTimeout has not been defined")}function I(){throw new Error("clearTimeout has not been defined")}function E(e){if(v===setTimeout)return setTimeout(e,0);if((v===_||!v)&&setTimeout)return v=setTimeout,setTimeout(e,0);try{return v(e,0)}catch(t){try{return v.call(null,e,0)}catch(t){return v.call(this,e,0)}}}!function(){try{v="function"==typeof setTimeout?setTimeout:_}catch(e){v=_}try{b="function"==typeof clearTimeout?clearTimeout:I}catch(e){b=I}}();var k,S=[],C=!1,A=-1;function N(){C&&k&&(C=!1,k.length?S=k.concat(S):A=-1,S.length&&D())}function D(){if(!C){var e=E(N);C=!0;for(var t=S.length;t;){for(k=S,S=[];++A<t;)k&&k[A].run();A=-1,t=S.length}k=null,C=!1,function(e){if(b===clearTimeout)return clearTimeout(e);if((b===I||!b)&&clearTimeout)return b=clearTimeout,clearTimeout(e);try{b(e)}catch(t){try{return b.call(null,e)}catch(t){return b.call(this,e)}}}(e)}}function R(e,t){this.fun=e,this.array=t}function x(){}T.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];S.push(new R(e,t)),1!==S.length||C||E(D)},R.prototype.run=function(){this.fun.apply(null,this.array)},T.title="browser",T.browser=!0,T.env={},T.argv=[],T.version="",T.versions={},T.on=x,T.addListener=x,T.once=x,T.off=x,T.removeListener=x,T.removeAllListeners=x,T.emit=x,T.prependListener=x,T.prependOnceListener=x,T.listeners=function(e){return[]},T.binding=function(e){throw new Error("process.binding is not supported")},T.cwd=function(){return"/"},T.chdir=function(e){throw new Error("process.chdir is not supported")},T.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},L={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,h=a?e[t+2]:0,c=s>>2,l=(3&s)<<4|o>>4;let u=(15&o)<<2|h>>6,d=63&h;a||(d=64,r||(u=64)),i.push(n[c],n[l],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(O(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new P;const h=s<<2|r>>4;if(i.push(h),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M=function(e){return function(e){const t=O(e);return L.encodeByteArray(t,!0)}(e).replace(/\./g,"")},F=function(e){try{return L.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,j=()=>{try{return U()||(()=>{if(void 0===w||void 0===w.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&F(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},V=e=>{var t,n;return null===(n=null===(t=j())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},q=e=>{const t=V(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},B=()=>{var e;return null===(e=j())||void 0===e?void 0:e.config},H=e=>{var t;return null===(t=j())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[M(JSON.stringify({alg:"none",type:"JWT"})),M(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function K(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function G(){const e=$();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Q(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(X,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Y(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const X=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ee(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(te(n)&&te(r)){if(!ee(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function te(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ie(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function se(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e,t){const n=new oe(e,t);return n.subscribe.bind(n)}class oe{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ae),void 0===i.error&&(i.error=ae),void 0===i.complete&&(i.complete=ae);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ae(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(e){return e&&e._delegate?e._delegate:e}class ce{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new W;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ue{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new le(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=[];var fe,pe;(pe=fe||(fe={}))[pe.DEBUG=0]="DEBUG",pe[pe.VERBOSE=1]="VERBOSE",pe[pe.INFO=2]="INFO",pe[pe.WARN=3]="WARN",pe[pe.ERROR=4]="ERROR",pe[pe.SILENT=5]="SILENT";const me={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ge=fe.INFO,ye={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},we=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ye[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class ve{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?me[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ge,this._logHandler=we,this._userLogHandler=null,de.push(this)}}let be,Te;const _e=new WeakMap,Ie=new WeakMap,Ee=new WeakMap,ke=new WeakMap,Se=new WeakMap;let Ce={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ie.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ee.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return De(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ae(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Te||(Te=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Re(this),t),De(_e.get(this))}:function(...t){return De(e.apply(Re(this),t))}:function(t,...n){const i=e.call(Re(this),t,...n);return Ee.set(i,t.sort?t.sort():[t]),De(i)}}function Ne(e){return"function"==typeof e?Ae(e):(e instanceof IDBTransaction&&function(e){if(Ie.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));Ie.set(e,t)}(e),t=e,(be||(be=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ce):e);var t}function De(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(De(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&_e.set(t,e)})).catch((()=>{})),Se.set(t,e),t}(e);if(ke.has(e))return ke.get(e);const t=Ne(e);return t!==e&&(ke.set(e,t),Se.set(t,e)),t}const Re=e=>Se.get(e);function xe(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=De(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(De(o.result),e.oldVersion,e.newVersion,De(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Oe=["get","getKey","getAll","getAllKeys","count"],Le=["put","add","delete","clear"],Pe=new Map;function Me(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Pe.get(t))return Pe.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Le.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Oe.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return Pe.set(t,r),r}Ce=(e=>({...e,get:(t,n,i)=>Me(t,n)||e.get(t,n,i),has:(t,n)=>!!Me(t,n)||e.has(t,n)}))(Ce);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ue=new ve("@firebase/app"),je={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ve=new Map,qe=new Map;function Be(e,t){try{e.container.addComponent(t)}catch(n){Ue.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function He(e){const t=e.name;if(qe.has(t))return Ue.debug(`There were multiple attempts to register component ${t}.`),!1;qe.set(t,e);for(const t of Ve.values())Be(t,e);return!0}function We(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ze=new J("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ce("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw ze.create("bad-app-name",{appName:String(s)});if(n||(n=B()),!n)throw ze.create("no-options");const r=Ve.get(s);if(r){if(ee(n,r.options)&&ee(i,r.config))return r;throw ze.create("duplicate-app",{appName:s})}const o=new ue(s);for(const e of qe.values())o.addComponent(e);const a=new $e(n,i,o);return Ve.set(s,a),a}function Ge(e="[DEFAULT]"){const t=Ve.get(e);if(!t&&"[DEFAULT]"===e&&B())return Ke();if(!t)throw ze.create("no-app",{appName:e});return t}function Qe(e,t,n){var i;let s=null!==(i=je[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ue.warn(e.join(" "))}He(new ce(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Ye=null;function Je(){return Ye||(Ye=xe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ze.create("idb-open",{originalErrorMessage:e.message})}))),Ye}async function Xe(e,t){try{const n=(await Je()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,Ze(e)),await n.done}catch(e){if(e instanceof Y)Ue.warn(e.message);else{const t=ze.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ue.warn(t.message)}}}function Ze(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=tt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=tt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),it(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),it(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=M(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function tt(){return(new Date).toISOString().substring(0,10)}class nt{async runIndexedDBEnvironmentCheck(){return!!Q()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Je();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ze(e))}catch(e){if(e instanceof Y)Ue.warn(e.message);else{const t=ze.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ue.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function it(e){return M(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;st="",He(new ce("platform-logger",(e=>new Fe(e)),"PRIVATE")),He(new ce("heartbeat",(e=>new et(e)),"PRIVATE")),Qe("@firebase/app","0.9.10",st),Qe("@firebase/app","0.9.10","esm2017"),Qe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qe("firebase","9.22.0","app");var rt,ot="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},at={},ht=ht||{},ct=ot||self;function lt(){}function ut(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function dt(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var ft="closure_uid_"+(1e9*Math.random()>>>0),pt=0;function mt(e,t,n){return e.call.apply(e.bind,arguments)}function gt(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function yt(e,t,n){return(yt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?mt:gt).apply(null,arguments)}function wt(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function vt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function bt(){this.s=this.s,this.o=this.o}bt.prototype.s=!1,bt.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,ft)&&e[ft]||(e[ft]=++pt))},bt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tt=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function _t(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function It(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(ut(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function Et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var kt=function(){if(!ct.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ct.addEventListener("test",lt,t),ct.removeEventListener("test",lt,t)}catch(e){}return e}();function St(e){return/^[\s\xa0]*$/.test(e)}var Ct=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function At(e,t){return e<t?-1:e>t?1:0}function Nt(){var e=ct.navigator;return e&&(e=e.userAgent)?e:""}function Dt(e){return-1!=Nt().indexOf(e)}function Rt(e){return Rt[" "](e),e}function xt(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}Rt[" "]=lt;var Ot,Lt,Pt=Dt("Opera"),Mt=Dt("Trident")||Dt("MSIE"),Ft=Dt("Edge"),Ut=Ft||Mt,jt=Dt("Gecko")&&!(-1!=Nt().toLowerCase().indexOf("webkit")&&!Dt("Edge"))&&!(Dt("Trident")||Dt("MSIE"))&&!Dt("Edge"),Vt=-1!=Nt().toLowerCase().indexOf("webkit")&&!Dt("Edge");function qt(){var e=ct.document;return e?e.documentMode:void 0}e:{var Bt="",Ht=(Lt=Nt(),jt?/rv:([^\);]+)(\)|;)/.exec(Lt):Ft?/Edge\/([\d\.]+)/.exec(Lt):Mt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Lt):Vt?/WebKit\/(\S+)/.exec(Lt):Pt?/(?:Version)[ \/]?(\S+)/.exec(Lt):void 0);if(Ht&&(Bt=Ht?Ht[1]:""),Mt){var Wt=qt();if(null!=Wt&&Wt>parseFloat(Bt)){Ot=String(Wt);break e}}Ot=Bt}var zt,$t={};if(ct.document&&Mt){var Kt=qt();zt=Kt||(parseInt(Ot,10)||void 0)}else zt=void 0;var Gt=zt;function Qt(e,t){if(Et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(jt){e:{try{Rt(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Yt[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Qt.$.h.call(this)}}vt(Qt,Et);var Yt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),Xt=0;function Zt(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Xt,this.fa=this.ia=!1}function en(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tn(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function nn(e){const t={};for(const n in e)t[n]=e[n];return t}const sn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rn(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<sn.length;t++)n=sn[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function on(e){this.src=e,this.g={},this.h=0}function an(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=Tt(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(en(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function hn(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}on.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=hn(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Zt(t,this.src,r,!!i,s)).ia=n,e.push(t)),t};var cn="closure_lm_"+(1e6*Math.random()|0),ln={};function un(e,t,n,i,s){if(i&&i.once)return fn(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)un(e,t[r],n,i,s);return null}return n=bn(n),e&&e[Jt]?e.O(t,n,dt(i)?!!i.capture:!!i,s):dn(e,t,n,!1,i,s)}function dn(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=dt(s)?!!s.capture:!!s,a=wn(e);if(a||(e[cn]=a=new on(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=yn;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)kt||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(gn(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function fn(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)fn(e,t[r],n,i,s);return null}return n=bn(n),e&&e[Jt]?e.P(t,n,dt(i)?!!i.capture:!!i,s):dn(e,t,n,!0,i,s)}function pn(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)pn(e,t[r],n,i,s);else i=dt(i)?!!i.capture:!!i,n=bn(n),e&&e[Jt]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=hn(r=e.g[t],n,i,s))&&(en(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=wn(e))&&(t=e.g[t.toString()],e=-1,t&&(e=hn(t,n,i,s)),(n=-1<e?t[e]:null)&&mn(n))}function mn(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Jt])an(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(gn(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=wn(t))?(an(n,e),0==n.h&&(n.src=null,t[cn]=null)):en(e)}}}function gn(e){return e in ln?ln[e]:ln[e]="on"+e}function yn(e,t){if(e.fa)e=!0;else{t=new Qt(t,this);var n=e.listener,i=e.la||e.src;e.ia&&mn(e),e=n.call(i,t)}return e}function wn(e){return(e=e[cn])instanceof on?e:null}var vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function bn(e){return"function"==typeof e?e:(e[vn]||(e[vn]=function(t){return e.handleEvent(t)}),e[vn])}function Tn(){bt.call(this),this.i=new on(this),this.S=this,this.J=null}function _n(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new Et(t,e);else if(t instanceof Et)t.target=t.target||e;else{var s=t;rn(t=new Et(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=In(o,i,!0,t)&&s}if(s=In(o=t.g=e,i,!0,t)&&s,s=In(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=In(o=t.g=n[r],i,!1,t)&&s}function In(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&an(e.i,o),s=!1!==a.call(h,i)&&s}}return s&&!i.defaultPrevented}vt(Tn,bt),Tn.prototype[Jt]=!0,Tn.prototype.removeEventListener=function(e,t,n,i){pn(this,e,t,n,i)},Tn.prototype.N=function(){if(Tn.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)en(n[i]);delete t.g[e],t.h--}}this.J=null},Tn.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Tn.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var En=ct.JSON.stringify;function kn(){var e=xn;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Sn,Cn=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new An),(e=>e.reset()));class An{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Nn(e){ct.setTimeout((()=>{throw e}),0)}function Dn(e,t){Sn||function(){var e=ct.Promise.resolve(void 0);Sn=function(){e.then(On)}}(),Rn||(Sn(),Rn=!0),xn.add(e,t)}var Rn=!1,xn=new class{add(e,t){const n=Cn.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function On(){for(var e;e=kn();){try{e.h.call(e.g)}catch(e){Nn(e)}var t=Cn;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rn=!1}function Ln(e,t){Tn.call(this),this.h=e||1,this.g=t||ct,this.j=yt(this.qb,this),this.l=Date.now()}function Pn(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Mn(e,t,n){if("function"==typeof e)n&&(e=yt(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=yt(e.handleEvent,e)}return 2147483647<Number(t)?-1:ct.setTimeout(e,t||0)}function Fn(e){e.g=Mn((()=>{e.g=null,e.i&&(e.i=!1,Fn(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}vt(Ln,Tn),(rt=Ln.prototype).ga=!1,rt.T=null,rt.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_n(this,"tick"),this.ga&&(Pn(this),this.start()))}},rt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},rt.N=function(){Ln.$.N.call(this),Pn(this),delete this.g};class Un extends bt{l(e){this.h=arguments,this.g?this.i=!0:Fn(this)}N(){super.N(),this.g&&(ct.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function jn(e){bt.call(this),this.h=e,this.g={}}vt(jn,bt);var Vn=[];function qn(e,t,n,i){Array.isArray(n)||(n&&(Vn[0]=n.toString()),n=Vn);for(var s=0;s<n.length;s++){var r=un(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Bn(e){tn(e.g,(function(e,t){this.g.hasOwnProperty(t)&&mn(e)}),e),e.g={}}function Hn(){this.g=!0}function Wn(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return En(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}jn.prototype.N=function(){jn.$.N.call(this),Bn(this)},jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Hn.prototype.Ea=function(){this.g=!1},Hn.prototype.info=function(){};var zn={},$n=null;function Kn(){return $n=$n||new Tn}function Gn(e){Et.call(this,zn.Ta,e)}function Qn(e){const t=Kn();_n(t,new Gn(t))}function Yn(e,t){Et.call(this,zn.STAT_EVENT,e),this.stat=t}function Jn(e){const t=Kn();_n(t,new Yn(t,e))}function Xn(e,t){Et.call(this,zn.Ua,e),this.size=t}function Zn(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ct.setTimeout((function(){e()}),t)}zn.Ta="serverreachability",vt(Gn,Et),zn.STAT_EVENT="statevent",vt(Yn,Et),zn.Ua="timingevent",vt(Xn,Et);var ei={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ti={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ni(){}function ii(e){return e.h||(e.h=e.i())}function si(){}ni.prototype.h=null;var ri,oi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ai(){Et.call(this,"d")}function hi(){Et.call(this,"c")}function ci(){}function li(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new jn(this),this.P=di,e=Ut?125:void 0,this.V=new Ln(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new ui}function ui(){this.i=null,this.g="",this.h=!1}vt(ai,Et),vt(hi,Et),vt(ci,ni),ci.prototype.g=function(){return new XMLHttpRequest},ci.prototype.i=function(){return{}},ri=new ci;var di=45e3,fi={},pi={};function mi(e,t,n){e.L=1,e.v=Li(Ni(t)),e.s=n,e.S=!0,gi(e,null)}function gi(e,t){e.G=Date.now(),bi(e),e.A=Ni(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Ki(n.i,"t",i),e.C=0,n=e.l.I,e.h=new ui,e.g=$s(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Un(yt(e.Pa,e,e.g),e.O)),qn(e.U,e.g,"readystatechange",e.nb),t=e.I?nn(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Qn(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var l=c[0];c=c[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function yi(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function wi(e,t,n){let i,s=!0;for(;!e.J&&e.C<n.length;){if(i=vi(e,n),i==pi){4==t&&(e.o=4,Jn(14),s=!1),Wn(e.j,e.m,null,"[Incomplete Response]");break}if(i==fi){e.o=4,Jn(15),Wn(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Wn(e.j,e.m,i,null),ki(e,i)}yi(e)&&i!=pi&&i!=fi&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Jn(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Us(t),t.L=!0,Jn(11))):(Wn(e.j,e.m,n,"[Invalid Chunked Response]"),Ei(e),Ii(e))}function vi(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?pi:(n=Number(t.substring(n,i)),isNaN(n)?fi:(i+=1)+n>t.length?pi:(t=t.substr(i,n),e.C=i+n,t))}function bi(e){e.Y=Date.now()+e.P,Ti(e,e.P)}function Ti(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Zn(yt(e.lb,e),t)}function _i(e){e.B&&(ct.clearTimeout(e.B),e.B=null)}function Ii(e){0==e.l.H||e.J||qs(e.l,e)}function Ei(e){_i(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,Pn(e.V),Bn(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function ki(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Zi(n.h,e)))if(!e.K&&Zi(n.h,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Vs(n),Ds(n)}Fs(n),Jn(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&0==n.A&&!n.v&&(n.v=Zn(yt(n.ib,n),6e3));if(1>=Xi(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else Hs(n,11)}else if((e.K||n.g==e)&&Vs(n),!St(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.J=c[1],n.oa=c[2];const t=c[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const s=c[4];null!=s&&(n.Ga=s,n.j.info("SVER="+n.Ga));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=e.g;if(u){const e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(es(r,r.h),r.h=null))}if(i.F){const e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,Oi(i.G,i.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=zs(i,i.I?i.oa:null,i.Y),o.K){ts(i.h,o);var a=o,h=i.K;h&&a.setTimeout(h),a.B&&(_i(a),bi(a)),i.g=o}else Ms(i);0<n.i.length&&xs(n)}else"stop"!=c[0]&&"close"!=c[0]||Hs(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Hs(n,7):Ns(n):"noop"!=c[0]&&n.l&&n.l.Aa(c),n.A=0)}Qn()}catch(e){}}function Si(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ut(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(ut(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(ut(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(rt=li.prototype).setTimeout=function(e){this.P=e},rt.nb=function(e){e=e.target;const t=this.M;t&&3==Is(e)?t.l():this.Pa(e)},rt.Pa=function(e){try{if(e==this.g)e:{const l=Is(this.g);var t=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||Ut||this.g&&(this.h.h||this.g.ja()||Es(this.g)))){this.J||4!=l||7==t||Qn(),_i(this);var n=this.g.da();this.aa=n;t:if(yi(this)){var i=Es(this.g);e="";var s=i.length,r=4==Is(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ei(this),Ii(this);var o="";break t}this.h.i=new ct.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!St(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,Jn(12),Ei(this),Ii(this);break e}Wn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,n)}this.S?(wi(this,l,o),Ut&&this.i&&3==l&&(qn(this.U,this.V,"tick",this.mb),this.V.start())):(Wn(this.j,this.m,o,null),ki(this,o)),4==l&&Ei(this),this.i&&!this.J&&(4==l?qs(this.l,this):(this.i=!1,bi(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Jn(12)):(this.o=0,Jn(13)),Ei(this),Ii(this)}}}catch(e){}},rt.mb=function(){if(this.g){var e=Is(this.g),t=this.g.ja();this.C<t.length&&(_i(this),wi(this,e,t),this.i&&4!=e&&bi(this))}},rt.cancel=function(){this.J=!0,Ei(this)},rt.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Qn(),Jn(17)),Ei(this),this.o=2,Ii(this)):Ti(this,this.Y-e)};var Ci=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ai(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ai){this.h=void 0!==t?t:e.h,Di(this,e.j),this.s=e.s,this.g=e.g,Ri(this,e.m),this.l=e.l,t=e.i;var n=new Hi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xi(this,n),this.o=e.o}else e&&(n=String(e).match(Ci))?(this.h=!!t,Di(this,n[1]||"",!0),this.s=Pi(n[2]||""),this.g=Pi(n[3]||"",!0),Ri(this,n[4]),this.l=Pi(n[5]||"",!0),xi(this,n[6]||"",!0),this.o=Pi(n[7]||"")):(this.h=!!t,this.i=new Hi(null,this.h))}function Ni(e){return new Ai(e)}function Di(e,t,n){e.j=n?Pi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ri(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xi(e,t,n){t instanceof Hi?(e.i=t,function(e,t){t&&!e.j&&(Wi(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(zi(this,t),Ki(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Mi(t,qi)),e.i=new Hi(t,e.h))}function Oi(e,t,n){e.i.set(t,n)}function Li(e){return Oi(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Pi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Mi(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Fi),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Fi(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ai.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Mi(t,Ui,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Mi(t,Ui,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Mi(n,"/"==n.charAt(0)?Vi:ji,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Mi(n,Bi)),e.join("")};var Ui=/[#\/\?@]/g,ji=/[#\?:]/g,Vi=/[#\?]/g,qi=/[#\?@]/g,Bi=/#/g;function Hi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Wi(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function zi(e,t){Wi(e),t=Gi(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $i(e,t){return Wi(e),t=Gi(e,t),e.g.has(t)}function Ki(e,t,n){zi(e,t),0<n.length&&(e.i=null,e.g.set(Gi(e,t),_t(n)),e.h+=n.length)}function Gi(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(rt=Hi.prototype).add=function(e,t){Wi(this),this.i=null,e=Gi(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},rt.forEach=function(e,t){Wi(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},rt.sa=function(){Wi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},rt.Z=function(e){Wi(this);let t=[];if("string"==typeof e)$i(this,e)&&(t=t.concat(this.g.get(Gi(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},rt.set=function(e,t){return Wi(this),this.i=null,$i(this,e=Gi(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},rt.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},rt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Qi(e){this.l=e||Yi,ct.PerformanceNavigationTiming?e=0<(e=ct.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ct.g&&ct.g.Ka&&ct.g.Ka()&&ct.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yi=10;function Ji(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xi(e){return e.h?1:e.g?e.g.size:0}function Zi(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function es(e,t){e.g?e.g.add(t):e.h=t}function ts(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ns(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return _t(e.i)}function is(){}function ss(){this.g=new is}function rs(e,t,n){const i=n||"";try{Si(e,(function(e,n){let s=e;dt(e)&&(s=En(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function os(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function as(e){this.l=e.fc||null,this.j=e.ob||!1}function hs(e,t){Tn.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=cs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qi.prototype.cancel=function(){if(this.i=ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},is.prototype.stringify=function(e){return ct.JSON.stringify(e,void 0)},is.prototype.parse=function(e){return ct.JSON.parse(e,void 0)},vt(as,ni),as.prototype.g=function(){return new hs(this.l,this.j)},as.prototype.i=function(e){return function(){return e}}({}),vt(hs,Tn);var cs=0;function ls(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function us(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ds(e)}function ds(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(rt=hs.prototype).open=function(e,t){if(this.readyState!=cs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ds(this)},rt.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||ct).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},rt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,us(this)),this.readyState=cs},rt.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==ct.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ls(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},rt.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?us(this):ds(this),3==this.readyState&&ls(this)}},rt.Za=function(e){this.g&&(this.response=this.responseText=e,us(this))},rt.Ya=function(e){this.g&&(this.response=e,us(this))},rt.ka=function(){this.g&&us(this)},rt.setRequestHeader=function(e,t){this.v.append(e,t)},rt.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},rt.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var fs=ct.JSON.parse;function ps(e){Tn.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ms,this.L=this.M=!1}vt(ps,Tn);var ms="",gs=/^https?$/i,ys=["POST","PUT"];function ws(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,vs(e),Ts(e)}function vs(e){e.F||(e.F=!0,_n(e,"complete"),_n(e,"error"))}function bs(e){if(e.h&&void 0!==ht&&(!e.C[1]||4!=Is(e)||2!=e.da()))if(e.v&&4==Is(e))Mn(e.La,0,e);else if(_n(e,"readystatechange"),4==Is(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.I).match(Ci)[1]||null;if(!s&&ct.self&&ct.self.location){var r=ct.self.location.protocol;s=r.substr(0,r.length-1)}i=!gs.test(s?s.toLowerCase():"")}n=i}if(n)_n(e,"complete"),_n(e,"success");else{e.m=6;try{var o=2<Is(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",vs(e)}}finally{Ts(e)}}}function Ts(e,t){if(e.g){_s(e);const n=e.g,i=e.C[0]?lt:null;e.g=null,e.C=null,t||_n(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function _s(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(ct.clearTimeout(e.A),e.A=null)}function Is(e){return e.g?e.g.readyState:0}function Es(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ms:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ks(e){let t="";return tn(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ss(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ks(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Oi(e,t,n))}function Cs(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function As(e){this.Ga=0,this.i=[],this.j=new Hn,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Cs("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Cs("baseRetryDelayMs",5e3,e),this.hb=Cs("retryDelaySeedMs",1e4,e),this.eb=Cs("forwardChannelMaxRetries",2,e),this.xa=Cs("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Qi(e&&e.concurrentRequestLimit),this.Ja=new ss,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Ns(e){if(Rs(e),3==e.H){var t=e.W++,n=Ni(e.G);Oi(n,"SID",e.J),Oi(n,"RID",t),Oi(n,"TYPE","terminate"),Ls(e,n),(t=new li(e,e.j,t,void 0)).L=2,t.v=Li(Ni(n)),n=!1,ct.navigator&&ct.navigator.sendBeacon&&(n=ct.navigator.sendBeacon(t.v.toString(),"")),!n&&ct.Image&&((new Image).src=t.v,n=!0),n||(t.g=$s(t.l,null),t.g.ha(t.v)),t.G=Date.now(),bi(t)}Ws(e)}function Ds(e){e.g&&(Us(e),e.g.cancel(),e.g=null)}function Rs(e){Ds(e),e.u&&(ct.clearTimeout(e.u),e.u=null),Vs(e),e.h.cancel(),e.m&&("number"==typeof e.m&&ct.clearTimeout(e.m),e.m=null)}function xs(e){Ji(e.h)||e.m||(e.m=!0,Dn(e.Na,e),e.C=0)}function Os(e,t){var n;n=t?t.m:e.W++;const i=Ni(e.G);Oi(i,"SID",e.J),Oi(i,"RID",n),Oi(i,"AID",e.V),Ls(e,i),e.o&&e.s&&Ss(i,e.o,e.s),n=new li(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Ps(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),es(e.h,n),mi(n,i,t)}function Ls(e,t){e.ma&&tn(e.ma,(function(e,n){Oi(t,n,e)})),e.l&&Si({},(function(e,n){Oi(t,n,e)}))}function Ps(e,t,n){n=Math.min(e.i.length,n);var i=e.l?yt(e.l.Va,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{rs(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,i}function Ms(e){e.g||e.u||(e.ba=1,Dn(e.Ma,e),e.A=0)}function Fs(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Zn(yt(e.Ma,e),Bs(e,e.A)),e.A++,!0)}function Us(e){null!=e.B&&(ct.clearTimeout(e.B),e.B=null)}function js(e){e.g=new li(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Ni(e.wa);Oi(t,"RID","rpc"),Oi(t,"SID",e.J),Oi(t,"CI",e.M?"0":"1"),Oi(t,"AID",e.V),Oi(t,"TYPE","xmlhttp"),Ls(e,t),e.o&&e.s&&Ss(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Li(Ni(t)),n.s=null,n.S=!0,gi(n,e)}function Vs(e){null!=e.v&&(ct.clearTimeout(e.v),e.v=null)}function qs(e,t){var n=null;if(e.g==t){Vs(e),Us(e),e.g=null;var i=2}else{if(!Zi(e.h,t))return;n=t.F,ts(e.h,t),i=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;_n(i=Kn(),new Xn(i,n)),xs(e)}else Ms(e);else if(3==(s=t.o)||0==s&&0<e.ta||!(1==i&&function(e,t){return!(Xi(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Zn(yt(e.Na,e,t),Bs(e,e.C)),e.C++,0)))}(e,t)||2==i&&Fs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Hs(e,5);break;case 4:Hs(e,10);break;case 3:Hs(e,6);break;default:Hs(e,2)}}function Bs(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Hs(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=yt(e.pb,e);n||(n=new Ai("//www.google.com/images/cleardot.gif"),ct.location&&"http"==ct.location.protocol||Di(n,"https"),Li(n)),function(e,t){const n=new Hn;if(ct.Image){const i=new Image;i.onload=wt(os,n,i,"TestLoadImage: loaded",!0,t),i.onerror=wt(os,n,i,"TestLoadImage: error",!1,t),i.onabort=wt(os,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=wt(os,n,i,"TestLoadImage: timeout",!1,t),ct.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Jn(2);e.H=0,e.l&&e.l.za(t),Ws(e),Rs(e)}function Ws(e){if(e.H=0,e.pa=[],e.l){const t=ns(e.h);0==t.length&&0==e.i.length||(It(e.pa,t),It(e.pa,e.i),e.h.i.length=0,_t(e.i),e.i.length=0),e.l.ya()}}function zs(e,t,n){var i=n instanceof Ai?Ni(n):new Ai(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),Ri(i,i.m);else{var s=ct.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Ai(null,void 0);i&&Di(r,i),t&&(r.g=t),s&&Ri(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&Oi(i,n,t),Oi(i,"VER",e.qa),Ls(e,i),i}function $s(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new ps(new as({ob:!0})):new ps(e.va)).Oa(e.I),t}function Ks(){}function Gs(){if(Mt&&!(10<=Number(Gt)))throw Error("Environmental error: no available transport.")}function Qs(e,t){Tn.call(this),this.g=new As(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!St(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!St(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Xs(this)}function Ys(e){ai.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Js(){hi.call(this),this.status=1}function Xs(e){this.g=e}function Zs(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function er(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(t^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}function tr(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=0|e[s];i&&r==t||(n[s]=r,i=!1)}this.g=n}(rt=ps.prototype).Oa=function(e){this.M=e},rt.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ri.g(),this.C=this.u?ii(this.u):ii(ri),this.g.onreadystatechange=yt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void ws(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=ct.FormData&&e instanceof ct.FormData,!(0<=Tt(ys,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_s(this),0<this.B&&((this.L=function(e){return Mt&&xt($t,9,(function(){let e=0;const t=Ct(String(Ot)).split("."),n=Ct("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=At(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||At(0==s[2].length,0==r[2].length)||At(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.ua,this)):this.A=Mn(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ws(this,e)}},rt.ua=function(){void 0!==ht&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_n(this,"timeout"),this.abort(8))},rt.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_n(this,"complete"),_n(this,"abort"),Ts(this))},rt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ts(this,!0)),ps.$.N.call(this)},rt.La=function(){this.s||(this.G||this.v||this.l?bs(this):this.kb())},rt.kb=function(){bs(this)},rt.da=function(){try{return 2<Is(this)?this.g.status:-1}catch(e){return-1}},rt.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},rt.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),fs(t)}},rt.Ia=function(){return this.m},rt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(rt=As.prototype).qa=8,rt.H=1,rt.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new li(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=nn(r),rn(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ps(this,s,t),Oi(n=Ni(this.G),"RID",e),Oi(n,"CVER",22),this.F&&Oi(n,"X-HTTP-Session-Id",this.F),Ls(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(ks(r)))+"&"+t:this.o&&Ss(n,this.o,r)),es(this.h,s),this.bb&&Oi(n,"TYPE","init"),this.P?(Oi(n,"$req",t),Oi(n,"SID","null"),s.ba=!0,mi(s,n,null)):mi(s,n,t),this.H=2}}else 3==this.H&&(e?Os(this,e):0==this.i.length||Ji(this.h)||Os(this))},rt.Ma=function(){if(this.u=null,js(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Zn(yt(this.jb,this),e)}},rt.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Jn(10),Ds(this),js(this))},rt.ib=function(){null!=this.v&&(this.v=null,Ds(this),Fs(this),Jn(19))},rt.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Jn(2)):(this.j.info("Failed to ping google.com"),Jn(1))},(rt=Ks.prototype).Ba=function(){},rt.Aa=function(){},rt.za=function(){},rt.ya=function(){},rt.Va=function(){},Gs.prototype.g=function(e,t){return new Qs(e,t)},vt(Qs,Tn),Qs.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Jn(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=zs(e,null,e.Y),xs(e)},Qs.prototype.close=function(){Ns(this.g)},Qs.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=En(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&xs(t)},Qs.prototype.N=function(){this.g.l=null,delete this.j,Ns(this.g),delete this.g,Qs.$.N.call(this)},vt(Ys,ai),vt(Js,hi),vt(Xs,Ks),Xs.prototype.Ba=function(){_n(this.g,"a")},Xs.prototype.Aa=function(e){_n(this.g,new Ys(e))},Xs.prototype.za=function(e){_n(this.g,new Js)},Xs.prototype.ya=function(){_n(this.g,"b")},vt(Zs,(function(){this.blockSize=-1})),Zs.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Zs.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(0==s)for(;r<=n;)er(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){er(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){er(this,i),s=0;break}}this.h=s,this.i+=t},Zs.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var nr={};function ir(e){return-128<=e&&128>e?xt(nr,e,(function(e){return new tr([0|e],0>e?-1:0)})):new tr([0|e],0>e?-1:0)}function sr(e){if(isNaN(e)||!isFinite(e))return or;if(0>e)return ur(sr(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=rr;return new tr(t,0)}var rr=4294967296,or=ir(0),ar=ir(1),hr=ir(16777216);function cr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function lr(e){return-1==e.h}function ur(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new tr(n,~e.h).add(ar)}function dr(e,t){return e.add(ur(t))}function fr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function pr(e,t){this.g=e,this.h=t}function mr(e,t){if(cr(t))throw Error("division by zero");if(cr(e))return new pr(or,or);if(lr(e))return t=mr(ur(e),t),new pr(ur(t.g),ur(t.h));if(lr(t))return t=mr(e,ur(t)),new pr(ur(t.g),t.h);if(30<e.g.length){if(lr(e)||lr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ar,i=t;0>=i.X(e);)n=gr(n),i=gr(i);var s=yr(n,1),r=yr(i,1);for(i=yr(i,2),n=yr(n,2);!cr(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=yr(i,1),n=yr(n,1)}return t=dr(e,s.R(t)),new pr(s,t)}for(s=or;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=sr(n)).R(t);lr(o)||0<o.X(e);)o=(r=sr(n-=i)).R(t);cr(r)&&(r=ar),s=s.add(r),e=dr(e,o)}return new pr(s,e)}function gr(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new tr(n,e.h)}function yr(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new tr(s,e.h)}(rt=tr.prototype).ea=function(){if(lr(this))return-ur(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:rr+i)*t,t*=rr}return e},rt.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(cr(this))return"0";if(lr(this))return"-"+ur(this).toString(e);for(var t=sr(Math.pow(e,6)),n=this,i="";;){var s=mr(n,t).g,r=((0<(n=dr(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(cr(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},rt.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},rt.X=function(e){return lr(e=dr(this,e))?-1:cr(e)?0:1},rt.abs=function(){return lr(this)?ur(this):this},rt.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(65535&this.D(s))+(65535&e.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new tr(n,-2147483648&n[n.length-1]?-1:0)},rt.R=function(e){if(cr(this)||cr(e))return or;if(lr(this))return lr(e)?ur(this).R(ur(e)):ur(ur(this).R(e));if(lr(e))return ur(this.R(ur(e)));if(0>this.X(hr)&&0>e.X(hr))return sr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=e.D(s)>>>16,h=65535&e.D(s);n[2*i+2*s]+=o*h,fr(n,2*i+2*s),n[2*i+2*s+1]+=r*h,fr(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,fr(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,fr(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new tr(n,0)},rt.gb=function(e){return mr(this,e).h},rt.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new tr(n,this.h&e.h)},rt.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new tr(n,this.h|e.h)},rt.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new tr(n,this.h^e.h)},Gs.prototype.createWebChannel=Gs.prototype.g,Qs.prototype.send=Qs.prototype.u,Qs.prototype.open=Qs.prototype.m,Qs.prototype.close=Qs.prototype.close,ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,ti.COMPLETE="complete",si.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Tn.prototype.listen=Tn.prototype.O,ps.prototype.listenOnce=ps.prototype.P,ps.prototype.getLastError=ps.prototype.Sa,ps.prototype.getLastErrorCode=ps.prototype.Ia,ps.prototype.getStatus=ps.prototype.da,ps.prototype.getResponseJson=ps.prototype.Wa,ps.prototype.getResponseText=ps.prototype.ja,ps.prototype.send=ps.prototype.ha,ps.prototype.setWithCredentials=ps.prototype.Oa,Zs.prototype.digest=Zs.prototype.l,Zs.prototype.reset=Zs.prototype.reset,Zs.prototype.update=Zs.prototype.j,tr.prototype.add=tr.prototype.add,tr.prototype.multiply=tr.prototype.R,tr.prototype.modulo=tr.prototype.gb,tr.prototype.compare=tr.prototype.X,tr.prototype.toNumber=tr.prototype.ea,tr.prototype.toString=tr.prototype.toString,tr.prototype.getBits=tr.prototype.D,tr.fromNumber=sr,tr.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return ur(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=sr(Math.pow(n,8)),s=or,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=sr(Math.pow(n,o)),s=s.R(o).add(sr(a))):s=(s=s.R(i)).add(sr(a))}return s};var wr=at.createWebChannelTransport=function(){return new Gs},vr=at.getStatEventTarget=function(){return Kn()},br=at.ErrorCode=ei,Tr=at.EventType=ti,_r=at.Event=zn,Ir=at.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Er=at.FetchXmlHttpFactory=as,kr=at.WebChannel=si,Sr=at.XhrIo=ps,Cr=at.Md5=Zs,Ar=at.Integer=tr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nr{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}Nr.UNAUTHENTICATED=new Nr(null),Nr.GOOGLE_CREDENTIALS=new Nr("google-credentials-uid"),Nr.FIRST_PARTY=new Nr("first-party-uid"),Nr.MOCK_USER=new Nr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Dr="9.22.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new ve("@firebase/firestore");function xr(){return Rr.logLevel}function Or(e,...t){if(Rr.logLevel<=fe.DEBUG){const n=t.map(Mr);Rr.debug(`Firestore (${Dr}): ${e}`,...n)}}function Lr(e,...t){if(Rr.logLevel<=fe.ERROR){const n=t.map(Mr);Rr.error(`Firestore (${Dr}): ${e}`,...n)}}function Pr(e,...t){if(Rr.logLevel<=fe.WARN){const n=t.map(Mr);Rr.warn(`Firestore (${Dr}): ${e}`,...n)}}function Mr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e="Unexpected state"){const t=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function Ur(e,t){e||Fr()}function jr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qr extends Y{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Nr.UNAUTHENTICATED)))}shutdown(){}}class zr{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class $r{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Br,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Or("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Or("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Br)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Or("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ur("string"==typeof t.accessToken),new Hr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ur(null===e||"string"==typeof e),new Nr(e)}constructor(e){this.t=e,this.currentUser=Nr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Kr{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Nr.FIRST_PARTY,this.g=new Map}}class Gr{getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Nr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Qr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yr{start(e,t){const n=e=>{null!=e.error&&Or("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Or("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Or("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):Or("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Ur("string"==typeof e.token),this.T=e.token,new Qr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Jr(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Zr(e,t){return e<t?-1:e>t?1:0}function eo(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{static now(){return to.fromMillis(Date.now())}static fromDate(e){return to.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new to(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Zr(this.nanoseconds,e.nanoseconds):Zr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new qr(Vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static fromTimestamp(e){return new no(e)}static min(){return new no(new to(0,0))}static max(){return new no(new to(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{get length(){return this.len}isEqual(e){return 0===io.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof io?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Fr(),void 0===n?n=e.length-t:n>e.length-t&&Fr(),this.segments=e,this.offset=t,this.len=n}}class so extends io{construct(e,t,n){return new so(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new qr(Vr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new so(t)}static emptyPath(){return new so([])}}const ro=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oo extends io{construct(e,t,n){return new oo(e,t,n)}static isValidIdentifier(e){return ro.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oo.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oo(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new qr(Vr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new qr(Vr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new qr(Vr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new qr(Vr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oo(t)}static emptyPath(){return new oo([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static fromPath(e){return new ao(so.fromString(e))}static fromName(e){return new ao(so.fromString(e).popFirst(5))}static empty(){return new ao(so.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===so.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return so.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ao(new so(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}ho.UNKNOWN_ID=-1;function co(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=no.fromTimestamp(1e9===i?new to(n+1,0):new to(n,i));return new uo(s,ao.empty(),t)}function lo(e){return new uo(e.readTime,e.key,-1)}class uo{static min(){return new uo(no.min(),ao.empty(),-1)}static max(){return new uo(no.max(),ao.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function fo(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ao.comparator(e.documentKey,t.documentKey),0!==n?n:Zr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mo{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(e){if(e.code!==Vr.FAILED_PRECONDITION||e.message!==po)throw e;Or("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Fr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new yo(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof yo?t:yo.resolve(t)}catch(e){return yo.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):yo.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):yo.reject(t)}static resolve(e){return new yo(((t,n)=>{t(e)}))}static reject(e){return new yo(((t,n)=>{n(e)}))}static waitFor(e){return new yo(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=yo.resolve(!1);for(const n of e)t=t.next((e=>e?yo.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new yo(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const h=a;t(e[h]).next((e=>{r[h]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new yo(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vo{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function bo(e){return null==e}function To(e){return 0===e&&1/e==-1/0}function _o(e){return"number"==typeof e&&Number.isInteger(e)&&!To(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vo.ct=-1;const Io=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Eo=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ko=Eo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function So(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Co(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ao(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{insert(e,t){return new No(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ro.BLACK,null,null))}remove(e){return new No(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ro.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Do(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Do(this.root,e,this.comparator,!1)}getReverseIterator(){return new Do(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Do(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Ro.EMPTY}}class Do{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Ro{copy(e,t,n,i,s){return new Ro(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ro.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Ro.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ro.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ro.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Fr();if(this.right.isRed())throw Fr();const e=this.left.check();if(e!==this.right.check())throw Fr();return e+(this.isRed()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Ro.RED,this.left=null!=i?i:Ro.EMPTY,this.right=null!=s?s:Ro.EMPTY,this.size=this.left.size+1+this.right.size}}Ro.EMPTY=null,Ro.RED=!0,Ro.BLACK=!1,Ro.EMPTY=new class{get key(){throw Fr()}get value(){throw Fr()}get color(){throw Fr()}get left(){throw Fr()}get right(){throw Fr()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ro(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Oo(this.data.getIterator())}getIteratorFrom(e){return new Oo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof xo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xo(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new No(this.comparator)}}class Oo{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lo{static empty(){return new Lo([])}unionWith(e){let t=new xo(oo.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Lo(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(oo.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Po("Invalid base64 string: "+e):e}}(e);return new Fo(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fo(t)}[Mo](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Zr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Fo.EMPTY_BYTE_STRING=new Fo("");const Uo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jo(e){if(Ur(!!e),"string"==typeof e){let t=0;const n=Uo.exec(e);if(Ur(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Vo(e.seconds),nanos:Vo(e.nanos)}}function Vo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function qo(e){return"string"==typeof e?Fo.fromBase64String(e):Fo.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ho(e){const t=e.mapValue.fields.__previous_value__;return Bo(t)?Ho(t):t}function Wo(e){const t=jo(e.mapValue.fields.__local_write_time__.timestampValue);return new to(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,n,i,s,r,o,a,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class $o{static empty(){return new $o("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof $o&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Go(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Bo(e)?4:ha(e)?9007199254740991:10:Fr()}function Qo(e,t){if(e===t)return!0;const n=Go(e);if(n!==Go(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Wo(e).isEqual(Wo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=jo(e.timestampValue),i=jo(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,qo(e.bytesValue).isEqual(qo(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Vo(e.geoPointValue.latitude)===Vo(t.geoPointValue.latitude)&&Vo(e.geoPointValue.longitude)===Vo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Vo(e.integerValue)===Vo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Vo(e.doubleValue),i=Vo(t.doubleValue);return n===i?To(n)===To(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return eo(e.arrayValue.values||[],t.arrayValue.values||[],Qo);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(So(n)!==So(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Qo(n[e],i[e])))return!1;return!0}(e,t);default:return Fr()}var i}function Yo(e,t){return void 0!==(e.values||[]).find((e=>Qo(e,t)))}function Jo(e,t){if(e===t)return 0;const n=Go(e),i=Go(t);if(n!==i)return Zr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Vo(e.integerValue||e.doubleValue),i=Vo(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Xo(e.timestampValue,t.timestampValue);case 4:return Xo(Wo(e),Wo(t));case 5:return Zr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=qo(e),i=qo(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Zr(n[e],i[e]);if(0!==t)return t}return Zr(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Zr(Vo(e.latitude),Vo(t.latitude));return 0!==n?n:Zr(Vo(e.longitude),Vo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Jo(n[e],i[e]);if(t)return t}return Zr(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ko.mapValue&&t===Ko.mapValue)return 0;if(e===Ko.mapValue)return 1;if(t===Ko.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=Zr(i[e],r[e]);if(0!==t)return t;const o=Jo(n[i[e]],s[r[e]]);if(0!==o)return o}return Zr(i.length,r.length)}(e.mapValue,t.mapValue);default:throw Fr()}}function Xo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Zr(e,t);const n=jo(e),i=jo(t),s=Zr(n.seconds,i.seconds);return 0!==s?s:Zr(n.nanos,i.nanos)}function Zo(e){return ea(e)}function ea(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=jo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?qo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ao.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=ea(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${ea(e.fields[s])}`;return n+"}"}(e.mapValue):Fr()}function ta(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function na(e){return!!e&&"integerValue"in e}function ia(e){return!!e&&"arrayValue"in e}function sa(e){return!!e&&"nullValue"in e}function ra(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function oa(e){return!!e&&"mapValue"in e}function aa(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Co(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=aa(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=aa(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ha(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{static empty(){return new ca({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!oa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(t)}setAll(e){let t=oo.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=aa(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());oa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];oa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Co(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new ca(aa(this.value))}constructor(e){this.value=e}}function la(e){const t=[];return Co(e.fields,((e,n)=>{const i=new oo([e]);if(oa(n)){const e=la(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Lo(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ua{static newInvalidDocument(e){return new ua(e,0,no.min(),no.min(),no.min(),ca.empty(),0)}static newFoundDocument(e,t,n,i){return new ua(e,1,t,no.min(),n,i,0)}static newNoDocument(e,t){return new ua(e,2,t,no.min(),no.min(),ca.empty(),0)}static newUnknownDocument(e,t){return new ua(e,3,t,no.min(),no.min(),ca.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(no.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ca.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ca.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=no.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ua&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ua(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.position=e,this.inclusive=t}}function fa(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?ao.comparator(ao.fromName(o.referenceValue),n.key):Jo(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function pa(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Qo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t="asc"){this.field=e,this.dir=t}}function ga(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{}class wa extends ya{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Sa(e,t,n):"array-contains"===t?new Da(e,n):"in"===t?new Ra(e,n):"not-in"===t?new xa(e,n):"array-contains-any"===t?new Oa(e,n):new wa(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ca(e,n):new Aa(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Jo(t,this.value)):null!==t&&Go(this.value)===Go(t)&&this.matchesComparison(Jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Fr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class va extends ya{static create(e,t){return new va(e,t)}matches(e){return ba(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}}function ba(e){return"and"===e.op}function Ta(e){return _a(e)&&ba(e)}function _a(e){for(const t of e.filters)if(t instanceof va)return!1;return!0}function Ia(e){if(e instanceof wa)return e.field.canonicalString()+e.op.toString()+Zo(e.value);if(Ta(e))return e.filters.map((e=>Ia(e))).join(",");{const t=e.filters.map((e=>Ia(e))).join(",");return`${e.op}(${t})`}}function Ea(e,t){return e instanceof wa?(n=e,(i=t)instanceof wa&&n.op===i.op&&n.field.isEqual(i.field)&&Qo(n.value,i.value)):e instanceof va?function(e,t){return t instanceof va&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&Ea(n,t.filters[i])),!0)}(e,t):void Fr();var n,i}function ka(e){return e instanceof wa?`${(t=e).field.canonicalString()} ${t.op} ${Zo(t.value)}`:e instanceof va?function(e){return e.op.toString()+" {"+e.getFilters().map(ka).join(" ,")+"}"}(e):"Filter";var t}class Sa extends wa{matches(e){const t=ao.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=ao.fromName(n.referenceValue)}}class Ca extends wa{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Na("in",t)}}class Aa extends wa{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Na("not-in",t)}}function Na(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ao.fromName(e.referenceValue)))}class Da extends wa{matches(e){const t=e.data.field(this.field);return ia(t)&&Yo(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Ra extends wa{matches(e){const t=e.data.field(this.field);return null!==t&&Yo(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class xa extends wa{matches(e){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Yo(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Oa extends wa{matches(e){const t=e.data.field(this.field);return!(!ia(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Yo(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.dt=null}}function Pa(e,t=null,n=[],i=[],s=null,r=null,o=null){return new La(e,t,n,i,s,r,o)}function Ma(e){const t=jr(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Ia(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),bo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Zo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Zo(e))).join(",")),t.dt=e}return t.dt}function Fa(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ga(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ea(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!pa(e.startAt,t.startAt)&&pa(e.endAt,t.endAt)}function Ua(e){return ao.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Va(e,t,n,i,s,r,o,a){return new ja(e,t,n,i,s,r,o,a)}function qa(e){return new ja(e)}function Ba(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ha(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Wa(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function za(e){return null!==e.collectionGroup}function $a(e){const t=jr(e);if(null===t.wt){t.wt=[];const e=Wa(t),n=Ha(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new ma(e)),t.wt.push(new ma(oo.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new ma(oo.keyField(),e))}}}return t.wt}function Ka(e){const t=jr(e);if(!t._t)if("F"===t.limitType)t._t=Pa(t.path,t.collectionGroup,$a(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of $a(t)){const t="desc"===n.dir?"asc":"desc";e.push(new ma(n.field,t))}const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;t._t=Pa(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function Ga(e,t){t.getFirstInequalityField(),Wa(e);const n=e.filters.concat([t]);return new ja(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Qa(e,t,n){return new ja(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ya(e,t){return Fa(Ka(e),Ka(t))&&e.limitType===t.limitType}function Ja(e){return`${Ma(Ka(e))}|lt:${e.limitType}`}function Xa(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ka(e))).join(", ")}]`),bo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Zo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Zo(e))).join(",")),`Target(${t})`}(Ka(e))}; limitType=${e.limitType})`}function Za(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ao.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of $a(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=fa(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,$a(n),i)||n.endAt&&!function(e,t,n){const i=fa(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,$a(n),i)));var n,i}function eh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function th(e){return(t,n)=>{let i=!1;for(const s of $a(e)){const e=nh(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function nh(e,t,n){const i=e.field.isKeyField()?ao.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Jo(i,s):Fr()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Fr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Co(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Ao(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new No(ao.comparator);function rh(){return sh}const oh=new No(ao.comparator);function ah(...e){let t=oh;for(const n of e)t=t.insert(n.key,n);return t}function hh(e){let t=oh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ch(){return uh()}function lh(){return uh()}function uh(){return new ih((e=>e.toString()),((e,t)=>e.isEqual(t)))}const dh=new No(ao.comparator),fh=new xo(ao.comparator);function ph(...e){let t=fh;for(const n of e)t=t.add(n);return t}const mh=new xo(Zr);function gh(){return mh}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(t)?"-0":t}}function wh(e){return{integerValue:""+e}}function vh(e,t){return _o(t)?wh(t):yh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this._=void 0}}function Th(e,t,n){return e instanceof Eh?kh(e,t):e instanceof Sh?Ch(e,t):n}function _h(e,t){var n,i;return e instanceof Ah?na(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class Ih extends bh{}class Eh extends bh{constructor(e){super(),this.elements=e}}function kh(e,t){const n=Dh(t);for(const t of e.elements)n.some((e=>Qo(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Sh extends bh{constructor(e){super(),this.elements=e}}function Ch(e,t){let n=Dh(t);for(const t of e.elements)n=n.filter((e=>!Qo(e,t)));return{arrayValue:{values:n}}}class Ah extends bh{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Nh(e){return Vo(e.integerValue||e.doubleValue)}function Dh(e){return ia(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.version=e,this.transformResults=t}}class xh{static none(){return new xh}static exists(e){return new xh(void 0,e)}static updateTime(e){return new xh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function Oh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Lh{}function Ph(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zh(e.key,xh.none()):new Vh(e.key,e.data,xh.none());{const n=e.data,i=ca.empty();let s=new xo(oo.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new qh(e.key,i,new Lo(s.toArray()),xh.none())}}function Mh(e,t,n){var i;e instanceof Vh?function(e,t,n){const i=e.value.clone(),s=Hh(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof qh?function(e,t,n){if(!Oh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Hh(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Bh(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function Fh(e,t,n,i){return e instanceof Vh?function(e,t,n,i){if(!Oh(e.precondition,t))return n;const s=e.value.clone(),r=Wh(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof qh?function(e,t,n,i){if(!Oh(e.precondition,t))return n;const s=Wh(e.fieldTransforms,i,t),r=t.data;return r.setAll(Bh(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(s=t,r=n,Oh(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function Uh(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=_h(i.transform,e||null);null!=s&&(null===n&&(n=ca.empty()),n.set(i.field,s))}return n||null}function jh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&eo(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof Eh&&i instanceof Eh||n instanceof Sh&&i instanceof Sh?eo(n.elements,i.elements,Qo):n instanceof Ah&&i instanceof Ah?Qo(n.gt,i.gt):n instanceof Ih&&i instanceof Ih);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class Vh extends Lh{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class qh extends Lh{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Bh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Hh(e,t,n){const i=new Map;Ur(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Th(o,a,n[s]))}return i}function Wh(e,t,n){const i=new Map;for(const a of e){const e=a.transform,h=n.data.field(a.field);i.set(a.field,(r=h,o=t,(s=e)instanceof Ih?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Bo(t)&&(t=Ho(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof Eh?kh(s,r):s instanceof Sh?Ch(s,r):function(e,t){const n=_h(e,t),i=Nh(n)+Nh(e.gt);return na(n)&&na(e.gt)?wh(i):yh(e.serializer,i)}(s,r)))}var s,r,o;return i}class zh extends Lh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class $h extends Lh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&Mh(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Fh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Fh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=lh();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=Ph(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(no.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ph())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,((e,t)=>jh(e,t)))&&eo(this.baseMutations,e.baseMutations,((e,t)=>jh(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class Gh{static from(e,t,n){Ur(e.mutations.length===n.length);let i=dh;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Gh(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yh{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jh,Xh;function Zh(e){switch(e){default:return Fr();case Vr.CANCELLED:case Vr.UNKNOWN:case Vr.DEADLINE_EXCEEDED:case Vr.RESOURCE_EXHAUSTED:case Vr.INTERNAL:case Vr.UNAVAILABLE:case Vr.UNAUTHENTICATED:return!1;case Vr.INVALID_ARGUMENT:case Vr.NOT_FOUND:case Vr.ALREADY_EXISTS:case Vr.PERMISSION_DENIED:case Vr.FAILED_PRECONDITION:case Vr.ABORTED:case Vr.OUT_OF_RANGE:case Vr.UNIMPLEMENTED:case Vr.DATA_LOSS:return!0}}function ec(e){if(void 0===e)return Lr("GRPC error has no .code"),Vr.UNKNOWN;switch(e){case Jh.OK:return Vr.OK;case Jh.CANCELLED:return Vr.CANCELLED;case Jh.UNKNOWN:return Vr.UNKNOWN;case Jh.DEADLINE_EXCEEDED:return Vr.DEADLINE_EXCEEDED;case Jh.RESOURCE_EXHAUSTED:return Vr.RESOURCE_EXHAUSTED;case Jh.INTERNAL:return Vr.INTERNAL;case Jh.UNAVAILABLE:return Vr.UNAVAILABLE;case Jh.UNAUTHENTICATED:return Vr.UNAUTHENTICATED;case Jh.INVALID_ARGUMENT:return Vr.INVALID_ARGUMENT;case Jh.NOT_FOUND:return Vr.NOT_FOUND;case Jh.ALREADY_EXISTS:return Vr.ALREADY_EXISTS;case Jh.PERMISSION_DENIED:return Vr.PERMISSION_DENIED;case Jh.FAILED_PRECONDITION:return Vr.FAILED_PRECONDITION;case Jh.ABORTED:return Vr.ABORTED;case Jh.OUT_OF_RANGE:return Vr.OUT_OF_RANGE;case Jh.UNIMPLEMENTED:return Vr.UNIMPLEMENTED;case Jh.DATA_LOSS:return Vr.DATA_LOSS;default:return Fr()}}(Xh=Jh||(Jh={}))[Xh.OK=0]="OK",Xh[Xh.CANCELLED=1]="CANCELLED",Xh[Xh.UNKNOWN=2]="UNKNOWN",Xh[Xh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xh[Xh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xh[Xh.NOT_FOUND=5]="NOT_FOUND",Xh[Xh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xh[Xh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xh[Xh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xh[Xh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xh[Xh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xh[Xh.ABORTED=10]="ABORTED",Xh[Xh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xh[Xh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xh[Xh.INTERNAL=13]="INTERNAL",Xh[Xh.UNAVAILABLE=14]="UNAVAILABLE",Xh[Xh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{static get instance(){return nc}static getOrCreateInstance(){return null===nc&&(nc=new tc),nc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let nc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Ar([4294967295,4294967295],0);function rc(e){const t=ic().encode(e),n=new Cr;return n.update(t),new Uint8Array(n.digest())}function oc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Ar([n,i],0),new Ar([s,r],0)]}class ac{Et(e,t,n){let i=e.add(t.multiply(Ar.fromNumber(n)));return 1===i.compare(sc)&&(i=new Ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=rc(e),[n,i]=oc(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),r=new ac(s,i,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.It)return;const t=rc(e),[n,i]=oc(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new hc(`Invalid padding: ${t}`);if(n<0)throw new hc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new hc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new hc(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Ar.fromNumber(this.It)}}class hc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,lc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new cc(no.min(),i,new No(Zr),rh(),ph())}constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}}class lc{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lc(n,t,ph(),ph(),ph())}constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,n,i){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=i}}class dc{constructor(e,t){this.targetId=e,this.Vt=t}}class fc{constructor(e,t,n=Fo.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class pc{get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ph(),t=ph(),n=ph();return this.Dt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Fr()}})),new lc(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=yc()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}constructor(){this.St=0,this.Dt=yc(),this.Ct=Fo.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}}class mc{Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:Fr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,i=e.Vt.count,s=this.se(n);if(s){const r=s.target;if(Ua(r))if(0===i){const e=new ao(r.path);this.Yt(n,e,ua.newNoDocument(e,no.min()))}else Ur(1===i);else{const s=this.ie(n);if(s!==i){const i=this.re(e,s);if(0!==i){this.ee(n);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=tc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var i,s,r,o,a,h;const c={localCacheCount:t,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(c.bloomFilter={applied:0===e,hashCount:null!==(i=null==l?void 0:l.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(r=null===(s=null==l?void 0:l.bits)||void 0===s?void 0:s.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(h=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==h?h:0}),c}(i,s,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:i}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=n;let a,h;try{a=qo(s).toUint8Array()}catch(e){if(e instanceof Po)return Pr("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{h=new ac(a,r,o)}catch(e){return Pr(e instanceof hc?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===h.It?1:i!==t-this.oe(e.targetId,h)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const s=this.Gt.ue(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.vt(r)||(this.Yt(e,n,null),i++)})),i}ce(e){const t=new Map;this.Qt.forEach(((n,i)=>{const s=this.se(i);if(s){if(n.current&&Ua(s.target)){const t=new ao(s.target.path);null!==this.jt.get(t)||this.ae(i,t)||this.Yt(i,t,ua.newNoDocument(t,e))}n.Mt&&(t.set(i,n.Ot()),n.Ft())}}));let n=ph();this.zt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const i=new cc(e,t,this.Wt,this.jt,n);return this.jt=rh(),this.zt=gc(),this.Wt=new No(Zr),i}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new pc,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new xo(Zr),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Or("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new pc),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Gt=e,this.Qt=new Map,this.jt=rh(),this.zt=gc(),this.Wt=new No(Zr)}}function gc(){return new No(ao.comparator)}function yc(){return new No(ao.comparator)}const wc={asc:"ASCENDING",desc:"DESCENDING"},vc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bc={and:"AND",or:"OR"};class Tc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _c(e,t){return e.useProto3Json||bo(t)?t:{value:t}}function Ic(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ec(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function kc(e,t){return Ic(e,t.toTimestamp())}function Sc(e){return Ur(!!e),no.fromTimestamp(function(e){const t=jo(e);return new to(t.seconds,t.nanos)}(e))}function Cc(e,t){return(n=e,new so(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Ac(e){const t=so.fromString(e);return Ur(Kc(t)),t}function Nc(e,t){return Cc(e.databaseId,t.path)}function Dc(e,t){const n=Ac(t);if(n.get(1)!==e.databaseId.projectId)throw new qr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new qr(Vr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ao(Lc(n))}function Rc(e,t){return Cc(e.databaseId,t)}function xc(e){const t=Ac(e);return 4===t.length?so.emptyPath():Lc(t)}function Oc(e){return new so(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Lc(e){return Ur(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Pc(e,t,n){return{name:Nc(e,t),fields:n.value.mapValue.fields}}function Mc(e,t){let n;if(t instanceof Vh)n={update:Pc(e,t.key,t.value)};else if(t instanceof zh)n={delete:Nc(e,t.key)};else if(t instanceof qh)n={update:Pc(e,t.key,t.data),updateMask:$c(t.fieldMask)};else{if(!(t instanceof $h))return Fr();n={verify:Nc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ih)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Eh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Sh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ah)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Fr()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:kc(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Fr())),n;var i,s}function Fc(e,t){return{documents:[Rc(e,t.path)]}}function Uc(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Rc(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Rc(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0!==e.length)return zc(va.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>{return{field:Hc((t=e).field),direction:qc(t.dir)};var t}))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=_c(e,t.limit);var a,h;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt={before:!(h=t.endAt).inclusive,values:h.position}),n}function jc(e){let t=xc(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ur(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=Vc(e);return t instanceof va&&Ta(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new ma(Wc((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,bo(t)?null:t}(n.limit));let h=null;n.startAt&&(h=function(e){const t=!!e.before,n=e.values||[];return new da(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new da(n,t)}(n.endAt)),Va(t,s,o,r,a,"F",h,c)}function Vc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Wc(e.unaryFilter.field);return wa.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Wc(e.unaryFilter.field);return wa.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wc(e.unaryFilter.field);return wa.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Wc(e.unaryFilter.field);return wa.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Fr()}}(e):void 0!==e.fieldFilter?(n=e,wa.create(Wc(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Fr()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,va.create(t.compositeFilter.filters.map((e=>Vc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Fr()}}(t.compositeFilter.op))):Fr();var t,n}function qc(e){return wc[e]}function Bc(e){return vc[e]}function Hc(e){return{fieldPath:e.canonicalString()}}function Wc(e){return oo.fromServerFormat(e.fieldPath)}function zc(e){return e instanceof wa?function(e){if("=="===e.op){if(ra(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NAN"}};if(sa(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ra(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NOT_NAN"}};if(sa(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hc(e.field),op:Bc(e.op),value:e.value}}}(e):e instanceof va?function(e){const t=e.getFilters().map((e=>zc(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,bc[n]),filters:t}};var n}(e):Fr()}function $c(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Kc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{withSequenceNumber(e){return new Gc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,i,s=no.min(),r=no.min(),o=Fo.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.fe=e}}function Yc(e){const t=jc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Qa(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Vo(e.integerValue));else if("doubleValue"in e){const n=Vo(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),To(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(qo(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?ha(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):Fr()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),ao.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}constructor(){}}Jc.Ve=new Jc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{addToCollectionParentIndex(e,t){return this.rn.add(t),yo.resolve()}getCollectionParents(e,t){return yo.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return yo.resolve()}deleteFieldIndex(e,t){return yo.resolve()}getDocumentsMatchingTarget(e,t){return yo.resolve(null)}getIndexType(e,t){return yo.resolve(0)}getFieldIndexes(e,t){return yo.resolve([])}getNextCollectionGroupToUpdate(e){return yo.resolve(null)}getMinOffset(e,t){return yo.resolve(uo.min())}getMinOffsetFromCollectionGroup(e,t){return yo.resolve(uo.min())}updateCollectionGroup(e,t,n){return yo.resolve()}updateIndexEntries(e,t){return yo.resolve()}constructor(){this.rn=new Zc}}class Zc{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new xo(so.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new xo(so.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class el{static withCacheSize(e){return new el(e,el.DEFAULT_COLLECTION_PERCENTILE,el.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */el.DEFAULT_COLLECTION_PERCENTILE=10,el.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,el.DEFAULT=new el(41943040,el.DEFAULT_COLLECTION_PERCENTILE,el.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),el.DISABLED=new el(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{next(){return this.Nn+=2,this.Nn}static kn(){return new tl(0)}static Mn(){return new tl(-1)}constructor(e){this.Nn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ua.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?yo.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new ih((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Fh(n.mutation,e,Lo.empty(),to.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,ph()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=ph()){const i=ch();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=ah();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ch();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ph())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=rh();const r=uh(),o=uh();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof qh)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),Fh(o.mutation,t,o.mutation.getFieldMask(),to.now())):r.set(t.key,Lo.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new il(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=uh();let i=new No(((e,t)=>e-t)),s=ph();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||Lo.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||ph()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,h=i.value,c=lh();h.forEach((e=>{if(!s.has(e)){const i=Ph(t.get(e),n.get(e));null!==i&&c.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,c))}return yo.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,ao.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):za(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):yo.resolve(ch());let o=-1,a=s;return r.next((t=>yo.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?yo.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,ph()))).next((e=>({batchId:o,changes:hh(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ao(t)).next((e=>{let t=ah();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=ah();return this.indexManager.getCollectionParents(e,i).next((r=>yo.forEach(r,(r=>{const o=(a=t,h=r.child(i),new ja(h,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,h;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,ua.newInvalidDocument(i)))}));let n=ah();return e.forEach(((e,s)=>{const r=i.get(e);void 0!==r&&Fh(r.mutation,s,Lo.empty(),to.now()),Za(t,s)&&(n=n.insert(e,s))})),n}))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{getBundleMetadata(e,t){return yo.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Sc(n.createTime)}),yo.resolve()}getNamedQuery(e,t){return yo.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:(n=t).name,query:Yc(n.bundledQuery),readTime:Sc(n.readTime)}),yo.resolve();var n}constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{getOverlay(e,t){return yo.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ch();return yo.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.we(e,t,i)})),yo.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),yo.resolve()}getOverlaysForCollection(e,t,n){const i=ch(),s=t.length+1,r=new ao(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return yo.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new No(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=ch(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ch(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return yo.resolve(o)}we(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Qh(t,n));let s=this.ls.get(t);void 0===s&&(s=ph(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}constructor(){this.overlays=new No(ao.comparator),this.ls=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new hl(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new hl(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new ao(new so([])),n=new hl(t,e),i=new hl(t,e+1),s=[];return this.ws.forEachInRange([n,i],(e=>{this.ys(e),s.push(e.key)})),s}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new ao(new so([])),n=new hl(t,e),i=new hl(t,e+1);let s=ph();return this.ws.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new hl(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.fs=new xo(hl.ds),this.ws=new xo(hl._s)}}class hl{static ds(e,t){return ao.comparator(e.key,t.key)||Zr(e.As,t.As)}static _s(e,t){return Zr(e.As,t.As)||ao.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.As=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{checkEmpty(e){return yo.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Kh(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.Rs=this.Rs.add(new hl(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return yo.resolve(r)}lookupMutationBatch(e,t){return yo.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.bs(n),s=i<0?0:i;return yo.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return yo.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return yo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new hl(t,0),i=new hl(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,i],(e=>{const t=this.Ps(e.As);s.push(t)})),yo.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new xo(Zr);return t.forEach((e=>{const t=new hl(e,0),i=new hl(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,i],(e=>{n=n.add(e.As)}))})),yo.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;ao.isDocumentKey(s)||(s=s.child(""));const r=new hl(new ao(s),0);let o=new xo(Zr);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.As)),!0)}),r),yo.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Ur(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return yo.forEach(t.mutations,(i=>{const s=new hl(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new hl(t,0),i=this.Rs.firstAfterOrEqual(n);return yo.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,yo.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new xo(hl.ds)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return yo.resolve(n?n.document.mutableCopy():ua.newInvalidDocument(t))}getEntries(e,t){let n=rh();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ua.newInvalidDocument(e))})),yo.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=rh();const r=t.path,o=new ao(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||fo(lo(o),n)<=0||(i.has(o.key)||Za(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return yo.resolve(s)}getAllFromCollectionGroup(e,t,n,i){Fr()}Cs(e,t){return yo.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ul(this)}getSize(e){return yo.resolve(this.size)}constructor(e){this.Ds=e,this.docs=new No(ao.comparator),this.size=0}}class ul extends nl{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(n)})),yo.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}constructor(e){super(),this.os=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),yo.resolve()}getLastRemoteSnapshotVersion(e){return yo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return yo.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),yo.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),yo.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new tl(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,yo.resolve()}updateTargetData(e,t){return this.Fn(t),yo.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,yo.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),yo.waitFor(s).next((()=>i))}getTargetCount(e){return yo.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return yo.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),yo.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),yo.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),yo.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return yo.resolve(n)}containsKey(e,t){return yo.resolve(this.ks.containsKey(t))}constructor(e){this.persistence=e,this.xs=new ih((e=>Ma(e)),Fa),this.lastRemoteSnapshotVersion=no.min(),this.highestTargetId=0,this.Ns=0,this.ks=new al,this.targetCount=0,this.Ms=tl.kn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ol,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new cl(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Or("MemoryPersistence","Starting transaction:",e);const i=new pl(this.Os.next());return this.referenceDelegate.Us(),n(i).next((e=>this.referenceDelegate.Ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gs(e,t){return yo.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.$s={},this.overlays={},this.Os=new vo(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new dl(this),this.indexManager=new Xc,this.remoteDocumentCache=new ll((e=>this.referenceDelegate.Ls(e))),this.serializer=new Qc(t),this.qs=new rl(this.serializer)}}class pl extends mo{constructor(e){super(),this.currentSequenceNumber=e}}class ml{static zs(e){return new ml(e)}get Ws(){if(this.js)return this.js;throw Fr()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),yo.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),yo.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),yo.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return yo.forEach(this.Ws,(n=>{const i=ao.fromPath(n);return this.Hs(e,i).next((e=>{e||t.removeEntry(i,no.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return yo.or([()=>yo.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}constructor(e){this.persistence=e,this.Qs=new al,this.js=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{static Li(e,t){let n=ph(),i=ph();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new gl(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ki(e,t).next((s=>s||this.Gi(e,t,i,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Ba(t))return yo.resolve(null);let n=Ka(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Qa(t,null,"F"),n=Ka(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=ph(...i);return this.Ui.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.ji(t,i);return this.zi(t,r,s,n.readTime)?this.Ki(e,Qa(t,null,"F")):this.Wi(e,r,t,n)}))))})))))}Gi(e,t,n,i){return Ba(t)||i.isEqual(no.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((s=>{const r=this.ji(t,s);return this.zi(t,r,n,i)?this.Qi(e,t):(xr()<=fe.DEBUG&&Or("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xa(t)),this.Wi(e,r,t,co(i,-1)))}))}ji(e,t){let n=new xo(th(e));return t.forEach(((t,i)=>{Za(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return xr()<=fe.DEBUG&&Or("QueryEngine","Using full collection scan to execute query:",Xa(t)),this.Ui.getDocumentsMatchingQuery(e,t,uo.min())}Wi(e,t,n,i){return this.Ui.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.qi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sl(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new No(Zr),this.Yi=new ih((e=>Ma(e)),Fa),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}}function vl(e,t,n,i){return new wl(e,t,n,i)}async function bl(e,t){const n=jr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=ph();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function Tl(e){const t=jr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function _l(e,t,n){let i=ph(),s=ph();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=rh();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(no.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):Or("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:i,sr:s}}))}function Il(e,t){const n=jr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function El(e,t){const n=jr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Bs.getTargetData(e,t).next((s=>s?(i=s,yo.resolve(i)):n.Bs.allocateTargetId(e).next((s=>(i=new Gc(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function kl(e,t,n){const i=jr(e),s=i.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!wo(e))throw e;Or("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(s.target)}function Sl(e,t,n){const i=jr(e);let s=no.min(),r=ph();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=jr(e),s=i.Yi.get(n);return void 0!==s?yo.resolve(i.Ji.get(s)):i.Bs.getTargetData(t,n)}(i,e,Ka(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?s:no.min(),n?r:ph()))).next((e=>(Cl(i,eh(t),e),{documents:e,ir:r})))))}function Cl(e,t,n){let i=e.Xi.get(t)||no.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Xi.set(t,i)}class Al{lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=gh()}}class Nl{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Al,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Hr=new Al,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Or("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Or("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl=null;function Ol(){return null===xl?xl=268435456+Math.round(2147483648*Math.random()):xl++,"0x"+xl.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ll={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}constructor(e){this.ro=e.ro,this.oo=e.oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends class{get po(){return!1}Io(e,t,n,i,s){const r=Ol(),o=this.To(e,t);Or("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.Eo(a,i,s),this.Ao(e,o,a,n).then((t=>(Or("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw Pr("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,s,r){return this.Io(e,t,n,i,s)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Dr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=Ll[e];return`${this.mo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Ao(e,t,n,i){const s=Ol();return new Promise(((r,o)=>{const a=new Sr;a.setWithCredentials(!0),a.listenOnce(Tr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case br.NO_ERROR:const t=a.getResponseJson();Or("WebChannelConnection",`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case br.TIMEOUT:Or("WebChannelConnection",`RPC '${e}' ${s} timed out`),o(new qr(Vr.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=a.getStatus();if(Or("WebChannelConnection",`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Vr).indexOf(t)>=0?t:Vr.UNKNOWN}(t.status);o(new qr(e,t.message))}else o(new qr(Vr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new qr(Vr.UNAVAILABLE,"Connection failed."));break;default:Fr()}}finally{Or("WebChannelConnection",`RPC '${e}' ${s} completed.`)}}));const h=JSON.stringify(i);Or("WebChannelConnection",`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",h,n,15)}))}Ro(e,t,n){const i=Ol(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=wr(),o=vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.xmlHttpFactory=new Er({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");Or("WebChannelConnection",`Creating RPC '${e}' stream ${i}: ${c}`,a);const l=r.createWebChannel(c,a);let u=!1,d=!1;const f=new Pl({ro:t=>{d?Or("WebChannelConnection",`Not sending because RPC '${e}' stream ${i} is closed:`,t):(u||(Or("WebChannelConnection",`Opening RPC '${e}' stream ${i} transport.`),l.open(),u=!0),Or("WebChannelConnection",`RPC '${e}' stream ${i} sending:`,t),l.send(t))},oo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,kr.EventType.OPEN,(()=>{d||Or("WebChannelConnection",`RPC '${e}' stream ${i} transport opened.`)})),p(l,kr.EventType.CLOSE,(()=>{d||(d=!0,Or("WebChannelConnection",`RPC '${e}' stream ${i} transport closed`),f.wo())})),p(l,kr.EventType.ERROR,(t=>{d||(d=!0,Pr("WebChannelConnection",`RPC '${e}' stream ${i} transport errored:`,t),f.wo(new qr(Vr.UNAVAILABLE,"The operation could not be completed")))})),p(l,kr.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];Ur(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Or("WebChannelConnection",`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Jh[e];if(void 0!==t)return ec(t)}(t),s=o.message;void 0===n&&(n=Vr.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new qr(n,s)),l.close()}else Or("WebChannelConnection",`RPC '${e}' stream ${i} received:`,s),f._o(s)}})),p(o,_r.STAT_EVENT,(t=>{t.stat===Ir.PROXY?Or("WebChannelConnection",`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Ir.NOPROXY&&Or("WebChannelConnection",`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(e){return new Tc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-n);i>0&&Or("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(e,t,n=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===Vr.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===Vr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new qr(Vr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Or("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Or("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,s,r,o,a){this.ii=e,this.$o=n,this.Oo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new jl(e,t)}}class ql extends Vl{eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Fr(),r=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Ur(void 0===t||"string"==typeof t),Fo.fromBase64String(t||"")):(Ur(void 0===t||t instanceof Uint8Array),Fo.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,h=a&&function(e){const t=void 0===e.code?Vr.UNKNOWN:ec(e.code);return new qr(t,e.message||"")}(a);n=new fc(s,r,o,h||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Dc(e,i.document.name),r=Sc(i.document.updateTime),o=i.document.createTime?Sc(i.document.createTime):no.min(),a=new ca({mapValue:{fields:i.document.fields}}),h=ua.newFoundDocument(s,r,o,a),c=i.targetIds||[],l=i.removedTargetIds||[];n=new uc(c,l,h.key,h)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Dc(e,i.document),r=i.readTime?Sc(i.readTime):no.min(),o=ua.newNoDocument(s,r),a=i.removedTargetIds||[];n=new uc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Dc(e,i.document),r=i.removedTargetIds||[];n=new uc([],r,s,null)}else{if(!("filter"in t))return Fr();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,r=new Yh(i,s),o=e.targetId;n=new dc(o,r)}}var i;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return no.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?no.min():t.readTime?Sc(t.readTime):no.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Oc(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=Ua(i)?{documents:Fc(e,i)}:{query:Uc(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ec(e,t.resumeToken);const i=_c(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(no.min())>0){n.readTime=Ic(e,t.snapshotVersion.toTimestamp());const i=_c(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Fr()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Oc(this.serializer),t.removeTarget=e,this.Wo(t)}constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}}class Bl extends Vl{get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(Ur(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Ur(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Sc(e.updateTime):Sc(t);return n.isEqual(no.min())&&(n=Sc(t)),new Rh(n,e.transformResults||[])}(e,n)))):[]),s=Sc(e.commitTime);return this.listener.cu(s,i)}var t,n;return Ur(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Oc(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Mc(this.serializer,e)))};this.Wo(t)}constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.ru=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends class{}{fu(){if(this.lu)throw new qr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Io(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new qr(Vr.UNKNOWN,e.toString())}))}vo(e,t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.vo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new qr(Vr.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.lu=!1}}class Wl{gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Lr(t),this.mu=!1):Or("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{eu(this)&&(Or("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=jr(e);t.vu.add(4),await Kl(t),t.bu.set("Unknown"),t.vu.delete(4),await $l(t)}(this))}))})),this.bu=new Wl(n,i)}}async function $l(e){if(eu(e))for(const t of e.Ru)await t(!0)}async function Kl(e){for(const t of e.Ru)await t(!1)}function Gl(e,t){const n=jr(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Zl(n)?Xl(n):wu(n).Ko()&&Yl(n,t))}function Ql(e,t){const n=jr(e),i=wu(n);n.Au.delete(t),i.Ko()&&Jl(n,t),0===n.Au.size&&(i.Ko()?i.jo():eu(n)&&n.bu.set("Unknown"))}function Yl(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(no.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}wu(e).su(t)}function Jl(e,t){e.Vu.qt(t),wu(e).iu(t)}function Xl(e){e.Vu=new mc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),wu(e).start(),e.bu.gu()}function Zl(e){return eu(e)&&!wu(e).Uo()&&e.Au.size>0}function eu(e){return 0===jr(e).vu.size}function tu(e){e.Vu=void 0}async function nu(e){e.Au.forEach(((t,n)=>{Yl(e,t)}))}async function iu(e,t){tu(e),Zl(e)?(e.bu.Iu(t),Xl(e)):e.bu.set("Unknown")}async function su(e,t,n){if(e.bu.set("Online"),t instanceof fc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Au.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Au.delete(i),e.Vu.removeTarget(i))}(e,t)}catch(n){Or("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ru(e,n)}else if(t instanceof uc?e.Vu.Ht(t):t instanceof dc?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(no.min()))try{const t=await Tl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Au.get(i);s&&e.Au.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.Au.get(t);if(!i)return;e.Au.set(t,i.withResumeToken(Fo.EMPTY_BYTE_STRING,i.snapshotVersion)),Jl(e,t);const s=new Gc(i.target,t,n,i.sequenceNumber);Yl(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Or("RemoteStore","Failed to raise snapshot:",t),await ru(e,t)}}async function ru(e,t,n){if(!wo(t))throw t;e.vu.add(1),await Kl(e),e.bu.set("Offline"),n||(n=()=>Tl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Or("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await $l(e)}))}function ou(e,t){return t().catch((n=>ru(e,n,t)))}async function au(e){const t=jr(e),n=vu(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;hu(t);)try{const e=await Il(t.localStore,i);if(null===e){0===t.Eu.length&&n.jo();break}i=e.batchId,cu(t,e)}catch(e){await ru(t,e)}lu(t)&&uu(t)}function hu(e){return eu(e)&&e.Eu.length<10}function cu(e,t){e.Eu.push(t);const n=vu(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function lu(e){return eu(e)&&!vu(e).Uo()&&e.Eu.length>0}function uu(e){vu(e).start()}async function du(e){vu(e).hu()}async function fu(e){const t=vu(e);for(const n of e.Eu)t.uu(n.mutations)}async function pu(e,t,n){const i=e.Eu.shift(),s=Gh.from(i,t,n);await ou(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await au(e)}async function mu(e,t){t&&vu(e).ou&&await async function(e,t){if(Zh(n=t.code)&&n!==Vr.ABORTED){const n=e.Eu.shift();vu(e).Qo(),await ou(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await au(e)}var n}(e,t),lu(e)&&uu(e)}async function gu(e,t){const n=jr(e);n.asyncQueue.verifyOperationInProgress(),Or("RemoteStore","RemoteStore received new credentials");const i=eu(n);n.vu.add(3),await Kl(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await $l(n)}async function yu(e,t){const n=jr(e);t?(n.vu.delete(2),await $l(n)):t||(n.vu.add(2),await Kl(n),n.bu.set("Unknown"))}function wu(e){return e.Su||(e.Su=function(e,t,n){const i=jr(e);return i.fu(),new ql(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:nu.bind(null,e),ao:iu.bind(null,e),nu:su.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Zl(e)?Xl(e):e.bu.set("Unknown")):(await e.Su.stop(),tu(e))}))),e.Su}function vu(e){return e.Du||(e.Du=function(e,t,n){const i=jr(e);return i.fu(),new Bl(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:du.bind(null,e),ao:mu.bind(null,e),au:fu.bind(null,e),cu:pu.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await au(e)):(await e.Du.stop(),e.Eu.length>0&&(Or("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class bu{static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new bu(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new qr(Vr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function Tu(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),wo(e))return new qr(Vr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{static emptySet(e){return new _u(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _u))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new _u;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ao.comparator(t.key,n.key):(e,t)=>ao.comparator(e.key,t.key),this.keyedMap=ah(),this.sortedSet=new No(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):Fr():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Cu=new No(ao.comparator)}}class Eu{static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new Eu(e,t,_u.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,s,r,o,a,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=h}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.Nu=void 0,this.listeners=[]}}class Su{constructor(){this.queries=new ih((e=>Ja(e)),Ya),this.onlineState="Unknown",this.ku=new Set}}async function Cu(e,t){const n=jr(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new ku),s)try{r.Nu=await n.onListen(i)}catch(e){const n=Tu(e,`Initialization of query '${Xa(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&Ru(n)}async function Au(e,t){const n=jr(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Nu(e,t){const n=jr(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.$u(e)&&(i=!0);s.Nu=e}}i&&Ru(n)}function Du(e,t,n){const i=jr(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function Ru(e){e.ku.forEach((e=>{e.next()}))}class xu{$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Eu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Eu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(e){this.key=e}}class Lu{constructor(e){this.key=e}}class Pu{get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Iu,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,h="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),l=Za(this.query,t)?t:null,u=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?u!==d&&(n.track({type:3,doc:l}),f=!0):this.rc(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.tc(l,a)>0||h&&this.tc(l,h)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||h)&&(o=!0)),f&&(l?(r=r.add(l),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ec:r,ic:n,zi:o,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Fr()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const r=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==s.length||a?{snapshot:new Eu(this.query,e.ec,i,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Iu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ph(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new Lu(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Ou(n))})),t}hc(e){this.Yu=e.ir,this.Zu=ph();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Eu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ph(),this.mutatedKeys=ph(),this.tc=th(e),this.ec=new _u(this.tc)}}class Mu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Fu{constructor(e){this.key=e,this.fc=!1}}class Uu{get isPrimaryClient(){return!0===this.vc}constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new ih((e=>Ja(e)),Ya),this._c=new Map,this.mc=new Set,this.gc=new No(ao.comparator),this.yc=new Map,this.Ic=new al,this.Tc={},this.Ec=new Map,this.Ac=tl.Mn(),this.onlineState="Unknown",this.vc=void 0}}async function ju(e,t){const n=id(e);let i,s;const r=n.wc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const e=await El(n.localStore,Ka(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await Vu(n,t,i,"current"===r,e.resumeToken),n.isPrimaryClient&&Gl(n.remoteStore,e)}return s}async function Vu(e,t,n,i,s){e.Rc=(t,n,i)=>async function(e,t,n,i){let s=t.view.sc(n);s.zi&&(s=await Sl(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return Ju(e,t.targetId,o.cc),o.snapshot}(e,t,n,i);const r=await Sl(e.localStore,t,!0),o=new Pu(t,r.ir),a=o.sc(r.documents),h=lc.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,h);Ju(e,n,c.cc);const l=new Mu(t,n,o);return e.wc.set(t,l),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function qu(e,t){const n=jr(e),i=n.wc.get(t),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter((e=>!Ya(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await kl(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ql(n.remoteStore,i.targetId),Qu(n,i.targetId)})).catch(go)):(Qu(n,i.targetId),await kl(n.localStore,i.targetId,!0))}async function Bu(e,t){const n=jr(e);try{const e=await function(e,t){const n=jr(e),i=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const o=[];t.targetChanges.forEach(((r,a)=>{const h=s.get(a);if(!h)return;o.push(n.Bs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,r.addedDocuments,a))));let c=h.withSequenceNumber(e.currentSequenceNumber);var l,u,d;null!==t.targetMismatches.get(a)?c=c.withResumeToken(Fo.EMPTY_BYTE_STRING,no.min()).withLastLimboFreeSnapshotVersion(no.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),u=c,d=r,(0===(l=h).resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Bs.updateTargetData(e,c))}));let a=rh(),h=ph();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(_l(e,r,t.documentUpdates).next((e=>{a=e.nr,h=e.sr}))),!i.isEqual(no.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return yo.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,h))).next((()=>a))})).then((e=>(n.Ji=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.yc.get(t);i&&(Ur(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.fc=!0:e.modifiedDocuments.size>0?Ur(i.fc):e.removedDocuments.size>0&&(Ur(i.fc),i.fc=!1))})),await ed(n,e,t)}catch(e){await go(e)}}function Hu(e,t,n){const i=jr(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wc.forEach(((n,i)=>{const s=i.view.Mu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=jr(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(i=!0)})),i&&Ru(n)}(i.eventManager,t),e.length&&i.dc.nu(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Wu(e,t,n){const i=jr(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.yc.get(t),r=s&&s.key;if(r){let e=new No(ao.comparator);e=e.insert(r,ua.newNoDocument(r,no.min()));const n=ph().add(r),s=new cc(no.min(),new Map,new No(Zr),e,n);await Bu(i,s),i.gc=i.gc.remove(r),i.yc.delete(t),Zu(i)}else await kl(i.localStore,t,!1).then((()=>Qu(i,t,n))).catch(go)}async function zu(e,t){const n=jr(e),i=t.batch.batchId;try{const e=await function(e,t){const n=jr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=yo.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);Ur(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ph();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Gu(n,i,null),Ku(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ed(n,e)}catch(e){await go(e)}}async function $u(e,t,n){const i=jr(e);try{const e=await function(e,t){const n=jr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Ur(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Gu(i,t,n),Ku(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await ed(i,e)}catch(e){await go(e)}}function Ku(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Gu(e,t,n){const i=jr(e);let s=i.Tc[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Tc[i.currentUser.toKey()]=s}}function Qu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.wc.delete(i),n&&e.dc.Pc(i,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Yu(e,t)}))}function Yu(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Ql(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Zu(e))}function Ju(e,t,n){for(const i of n)i instanceof Ou?(e.Ic.addReference(i.key,t),Xu(e,i)):i instanceof Lu?(Or("SyncEngine","Document no longer in limbo: "+i.key),e.Ic.removeReference(i.key,t),e.Ic.containsKey(i.key)||Yu(e,i.key)):Fr()}function Xu(e,t){const n=t.key,i=n.path.canonicalString();e.gc.get(n)||e.mc.has(i)||(Or("SyncEngine","New document in limbo: "+n),e.mc.add(i),Zu(e))}function Zu(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new ao(so.fromString(t)),i=e.Ac.next();e.yc.set(i,new Fu(n)),e.gc=e.gc.insert(n,i),Gl(e.remoteStore,new Gc(Ka(qa(n.path)),i,"TargetPurposeLimboResolution",vo.ct))}}async function ed(e,t,n){const i=jr(e),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach(((e,a)=>{o.push(i.Rc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=gl.Li(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.dc.nu(s),await async function(e,t){const n=jr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>yo.forEach(t,(t=>yo.forEach(t.Fi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>yo.forEach(t.Bi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!wo(e))throw e;Or("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,s)}}}(i.localStore,r))}async function td(e,t){const n=jr(e);if(!n.currentUser.isEqual(t)){Or("SyncEngine","User change. New user:",t.toKey());const e=await bl(n.localStore,t);n.currentUser=t,(i=n).Ec.forEach((e=>{e.forEach((e=>{e.reject(new qr(Vr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Ec.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ed(n,e.er)}var i}function nd(e,t){const n=jr(e),i=n.yc.get(t);if(i&&i.fc)return ph().add(i.key);{let e=ph();const i=n._c.get(t);if(!i)return e;for(const t of i){const i=n.wc.get(t);e=e.unionWith(i.view.nc)}return e}}function id(e){const t=jr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Wu.bind(null,t),t.dc.nu=Nu.bind(null,t.eventManager),t.dc.Pc=Du.bind(null,t.eventManager),t}function sd(e){const t=jr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$u.bind(null,t),t}class rd{async initialize(e){this.serializer=Ul(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return vl(this.persistence,new yl,e.initialUser,this.serializer)}createPersistence(e){return new fl(ml.zs,this.serializer)}createSharedClientState(e){return new Nl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class od{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Hu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=td.bind(null,this.syncEngine),await yu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Su}createDatastore(e){const t=Ul(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Ml(i));var i,s,r;return s=e.authCredentials,r=e.appCheckCredentials,new Hl(s,r,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Hu(this.syncEngine,e,0),r=Rl.D()?new Rl:new Dl,new zl(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new Uu(e,t,n,i,s,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=jr(e);Or("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Kl(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ad{next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hd{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qr(Vr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Nr.UNAUTHENTICATED,this.clientId=Xr.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Or("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Or("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function cd(e,t){e.asyncQueue.verifyOperationInProgress(),Or("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await bl(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function ld(e,t){e.asyncQueue.verifyOperationInProgress();const n=await dd(e);Or("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>gu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>gu(t.remoteStore,n))),e._onlineComponents=t}function ud(e){return"FirebaseError"===e.name?e.code===Vr.FAILED_PRECONDITION||e.code===Vr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function dd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Or("FirestoreClient","Using user provided OfflineComponentProvider");try{await cd(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!ud(n))throw n;Pr("Error using user provided cache. Falling back to memory cache: "+n),await cd(e,new rd)}}else Or("FirestoreClient","Using default OfflineComponentProvider"),await cd(e,new rd);return e._offlineComponents}async function fd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Or("FirestoreClient","Using user provided OnlineComponentProvider"),await ld(e,e._uninitializedComponentsProvider._online)):(Or("FirestoreClient","Using default OnlineComponentProvider"),await ld(e,new od))),e._onlineComponents}function pd(e){return fd(e).then((e=>e.syncEngine))}async function md(e){const t=await fd(e),n=t.eventManager;return n.onListen=ju.bind(null,t.syncEngine),n.onUnlisten=qu.bind(null,t.syncEngine),n}function gd(e,t,n={}){const i=new Br;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new ad({next:n=>{t.enqueueAndForget((()=>Au(e,o))),n.fromCache&&"server"===i.source?s.reject(new qr(Vr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new xu(n,r,{includeMetadataChanges:!0,Ku:!0});return Cu(e,o)}(await md(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yd(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const wd=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(e,t,n){if(!n)throw new qr(Vr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bd(e){if(!ao.isDocumentKey(e))throw new qr(Vr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Td(e){if(ao.isDocumentKey(e))throw new qr(Vr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function _d(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Fr()}function Id(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qr(Vr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_d(e);throw new qr(Vr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ed{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new qr(Vr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new qr(Vr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new qr(Vr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yd(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new qr(Vr.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new qr(Vr.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new qr(Vr.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class kd{get app(){if(!this._app)throw new qr(Vr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new qr(Vr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ed(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Wr;switch(e.type){case"firstParty":return new Gr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new qr(Vr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=wd.get(e);t&&(Or("ComponentProvider","Removing Datastore"),wd.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ed({}),this._settingsFrozen=!1}}function Sd(e,t,n,i={}){var s;const r=(e=Id(e,kd))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&Pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Nr.MOCK_USER;else{t=z(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new qr(Vr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Nr(r)}e._authCredentials=new zr(new Hr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Cd(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Ad{withConverter(e){return new Ad(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Nd extends Ad{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Cd(this.firestore,null,new ao(e))}withConverter(e){return new Nd(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,qa(n)),this._path=n,this.type="collection"}}function Dd(e,t,...n){if(e=he(e),vd("collection","path",t),e instanceof kd){const i=so.fromString(t,...n);return Td(i),new Nd(e,null,i)}{if(!(e instanceof Cd||e instanceof Nd))throw new qr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(so.fromString(t,...n));return Td(i),new Nd(e.firestore,null,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rd{get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Fl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Br;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!wo(e))throw e;Or("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;throw Lr("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=bu.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(i),i}Zc(){this.Wc&&Fr()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new jl(this,"async_queue_retry"),this.Xc=()=>{const e=Fl();e&&Or("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Fl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}}class xd extends kd{_terminate(){return this._firestoreClient||Pd(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Rd,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function Od(e,t){const n="string"==typeof e?e:t||"(default)",i=We("object"==typeof e?e:Ge(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=q("firestore");e&&Sd(i,...e)}return i}function Ld(e){return e._firestoreClient||Pd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Pd(e){var t,n,i;const s=e._freezeSettings(),r=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",h=e._persistenceKey,new zo(o,a,h,(c=s).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,yd(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,h,c;e._firestoreClient=new hd(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Md{static fromBase64String(e){try{return new Md(Fo.fromBase64String(e))}catch(e){throw new qr(Vr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Md(Fo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new qr(Vr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oo(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ud{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Zr(this._lat,e._lat)||Zr(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new qr(Vr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new qr(Vr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=/^__.*__$/;class qd{toMutation(e,t){return null!==this.fieldMask?new qh(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vh(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function Bd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Fr()}}class Hd{get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.fa(e),i}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return tf(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Bd(this.ca)&&Vd.test(e))throw this._a('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Wd{ya(e,t,n,i=!1){return new Hd({ca:e,methodName:t,ga:n,path:oo.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ul(e)}}function zd(e){const t=e._freezeSettings(),n=Ul(e._databaseId);return new Wd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $d(e,t,n,i,s,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,s);Jd("Data must be an object, but it was:",o,i);const a=Qd(i,o);let h,c;if(r.merge)h=new Lo(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Xd(t,i,n);if(!o.contains(s))throw new qr(Vr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);nf(e,s)||e.push(s)}h=new Lo(e),c=o.fieldTransforms.filter((e=>h.covers(e.field)))}else h=null,c=o.fieldTransforms;return new qd(new ca(a),h,c)}function Kd(e,t,n,i=!1){return Gd(n,e.ya(i?4:3,t))}function Gd(e,t){if(Yd(e=he(e)))return Jd("Unsupported field value:",t,e),Qd(e,t);if(e instanceof Ud)return function(e,t){if(!Bd(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=Gd(s,t.wa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=he(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return vh(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=to.fromDate(e);return{timestampValue:Ic(t.serializer,n)}}if(e instanceof to){const n=new to(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ic(t.serializer,n)}}if(e instanceof jd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Md)return{bytesValue:Ec(t.serializer,e._byteString)};if(e instanceof Cd){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Cc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${_d(e)}`)}(e,t)}function Qd(e,t){const n={};return Ao(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Co(e,((e,i)=>{const s=Gd(i,t.ha(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Yd(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof to||e instanceof jd||e instanceof Md||e instanceof Cd||e instanceof Ud)}function Jd(e,t,n){if(!Yd(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=_d(n);throw"an object"===i?t._a(e+" a custom object"):t._a(e+" "+i)}var i}function Xd(e,t,n){if((t=he(t))instanceof Fd)return t._internalPath;if("string"==typeof t)return ef(e,t);throw tf("Field path arguments must be of type string or ",e,!1,void 0,n)}const Zd=new RegExp("[~\\*/\\[\\]]");function ef(e,t,n){if(t.search(Zd)>=0)throw tf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Fd(...t.split("."))._internalPath}catch(i){throw tf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tf(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${i}`),o&&(h+=` in document ${s}`),h+=")"),new qr(Vr.INVALID_ARGUMENT,a+e+h)}function nf(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{get id(){return this._key.path.lastSegment()}get ref(){return new Cd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new rf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(of("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}}class rf extends sf{data(){return super.data()}}function of(e,t){return"string"==typeof t?ef(e,t):t instanceof Fd?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new qr(Vr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hf{}class cf extends hf{}function lf(e,t,...n){let i=[];t instanceof hf&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof ff)).length,n=e.filter((e=>e instanceof uf)).length;if(t>1||t>0&&n>0)throw new qr(Vr.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const t of i)e=t._apply(e);return e}class uf extends cf{static _create(e,t,n){return new uf(e,t,n)}_apply(e){const t=this._parse(e);return gf(e._query,t),new Ad(e.firestore,e.converter,Ga(e._query,t))}_parse(e){const t=zd(e.firestore);return function(e,t,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new qr(Vr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){mf(o,r);const t=[];for(const n of o)t.push(pf(i,e,n));a={arrayValue:{values:t}}}else a=pf(i,e,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||mf(o,r),a=Kd(n,"where",o,"in"===r||"not-in"===r);return wa.create(s,r,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}}function df(e,t,n){const i=t,s=of("where",e);return uf._create(s,i,n)}class ff extends hf{static _create(e,t){return new ff(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:va.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const e of i)gf(n,e),n=Ga(n,e)}(e._query,t),new Ad(e.firestore,e.converter,Ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}function pf(e,t,n){if("string"==typeof(n=he(n))){if(""===n)throw new qr(Vr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!za(t)&&-1!==n.indexOf("/"))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(so.fromString(n));if(!ao.isDocumentKey(i))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ta(e,new ao(i))}if(n instanceof Cd)return ta(e,n._key);throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_d(n)}.`)}function mf(e,t){if(!Array.isArray(e)||0===e.length)throw new qr(Vr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gf(e,t){if(t.isInequality()){const n=Wa(e),i=t.field;if(null!==n&&!n.isEqual(i))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const s=Ha(e);null!==s&&yf(e,i,s)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new qr(Vr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new qr(Vr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function yf(e,t,n){if(!n.isEqual(t))throw new qr(Vr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class wf{convertValue(e,t="none"){switch(Go(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Fr()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Co(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new jd(Vo(e.latitude),Vo(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ho(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const t=jo(e);return new to(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=so.fromString(e);Ur(Kc(n));const i=new $o(n.get(1),n.get(3)),s=new ao(n.popFirst(5));return i.isEqual(t)||Lr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bf{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Tf extends sf{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _f(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(of("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}}class _f extends Tf{data(e={}){return super.data(e)}}class If{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new _f(this._firestore,this._userDataWriter,n.key,n,new bf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new qr(Vr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new _f(e._firestore,e._userDataWriter,n.doc.key,n.doc,new bf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new _f(e._firestore,e._userDataWriter,t.doc.key,t.doc,new bf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:Ef(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new bf(i.hasPendingWrites,i.fromCache),this.query=n}}function Ef(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Fr()}}class kf extends wf{convertBytes(e){return new Md(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Cd(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Sf(e){e=Id(e,Ad);const t=Id(e.firestore,xd),n=Ld(t),i=new kf(t);return af(e._query),gd(n,e._query).then((n=>new If(t,i,e,n)))}function Cf(e,t){const n=Id(e.firestore,xd),i=function(e,t,...n){if(e=he(e),1===arguments.length&&(t=Xr.A()),vd("doc","path",t),e instanceof kd){const i=so.fromString(t,...n);return bd(i),new Cd(e,null,new ao(i))}{if(!(e instanceof Cd||e instanceof Nd))throw new qr(Vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(so.fromString(t,...n));return bd(i),new Cd(e.firestore,e instanceof Nd?e.converter:null,new ao(i))}}(e),s=vf(e.converter,t);return Af(n,[$d(zd(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,xh.exists(!1))]).then((()=>i))}function Af(e,t){return function(e,t){const n=new Br;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=sd(e);try{const e=await function(e,t){const n=jr(e),i=to.now(),s=t.reduce(((e,t)=>e.add(t.key)),ph());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=rh(),h=ph();return n.Zi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(h=h.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=Uh(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new qh(e.key,t,la(t.value.mapValue),xh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,h);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:hh(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Tc[e.currentUser.toKey()];i||(i=new No(Zr)),i=i.insert(t,n),e.Tc[e.currentUser.toKey()]=i}(i,e.batchId,n),await ed(i,e.changes),await au(i.remoteStore)}catch(e){const t=Tu(e,"Failed to persist write");n.reject(t)}}(await pd(e),t,n))),n.promise}(Ld(e),t)}!function(e,t=!0){Dr="9.22.0",He(new ce("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new xd(new $r(e.getProvider("auth-internal")),new Yr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new qr(Vr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),Qe("@firebase/firestore","3.12.0",e),Qe("@firebase/firestore","3.12.0","esm2017")}();function Nf(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function Df(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rf=Df,xf=new J("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Of=new ve("@firebase/auth");function Lf(e,...t){Of.logLevel<=fe.ERROR&&Of.error(`Auth (9.22.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(e,...t){throw Uf(e,...t)}function Mf(e,...t){return Uf(e,...t)}function Ff(e,t,n){const i=Object.assign(Object.assign({},Rf()),{[t]:n});return new J("auth","Firebase",i).create(t,{appName:e.name})}function Uf(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return xf.create(e,...t)}function jf(e,t,...n){if(!e)throw Uf(t,...n)}function Vf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Lf(t),new Error(t)}function qf(e,t){e||Vf(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Hf(){return"http:"===Wf()||"https:"===Wf()}function Wf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Hf()||K()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $f{get(){return zf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,qf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(e,t){qf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Vf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Vf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Vf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Yf=new $f(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xf(e,t,n,i,s={}){return Zf(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=ne(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Gf.fetch()(tp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function Zf(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Qf),t);try{const t=new np(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw ip(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ip(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw ip(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw ip(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ff(e,a,o);Pf(e,a)}}catch(t){if(t instanceof Y)throw t;Pf(e,"network-request-failed",{message:String(t)})}}async function ep(e,t,n,i,s={}){const r=await Xf(e,t,n,i,s);return"mfaPendingCredential"in r&&Pf(e,"multi-factor-auth-required",{_serverResponse:r}),r}function tp(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Kf(e.config,s):`${e.config.apiScheme}://${s}`}class np{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Mf(this.auth,"network-request-failed"))),Yf.get())}))}}function ip(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Mf(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(e){return 1e3*Number(e)}function op(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Lf("JWT malformed, contained fewer than 3 sections"),null;try{const e=F(n);return e?JSON.parse(e):(Lf("Failed to decode base64 JWT payload"),null)}catch(e){return Lf("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ap(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Y&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class hp{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{_initializeTime(){this.lastSignInTime=sp(this.lastLoginAt),this.creationTime=sp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(e){var t;const n=e.auth,i=await e.getIdToken(),s=await ap(e,async function(e,t){return Xf(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));jf(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=Nf(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(h=e.providerData,c=o,[...h.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var h,c;const l=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!l&&u,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new cp(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class up{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){jf(e.idToken,"internal-error"),jf(void 0!==e.idToken,"internal-error"),jf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=op(e);return jf(t,"internal-error"),jf(void 0!==t.exp,"internal-error"),jf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return jf(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Zf(e,{},(async()=>{const n=ne({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=tp(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Gf.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new up;return n&&(jf("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(jf("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(jf("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new up,this.toJSON())}_performRefresh(){return Vf("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(e,t){jf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class fp{async getIdToken(e){const t=await ap(this,this.stsTokenManager.getToken(this.auth,e));return jf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=he(e),i=await n.getIdToken(t),s=op(i);jf(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:sp(rp(s.auth_time)),issuedAtTime:sp(rp(s.iat)),expirationTime:sp(rp(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=he(e);await lp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(jf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){jf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await lp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ap(this,async function(e,t){return Xf(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,h,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(h=t.createdAt)&&void 0!==h?h:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:w,emailVerified:v,isAnonymous:b,providerData:T,stsTokenManager:_}=t;jf(w&&_,e,"internal-error");const I=up.fromJSON(this.name,_);jf("string"==typeof w,e,"internal-error"),dp(l,e.name),dp(u,e.name),jf("boolean"==typeof v,e,"internal-error"),jf("boolean"==typeof b,e,"internal-error"),dp(d,e.name),dp(f,e.name),dp(p,e.name),dp(m,e.name),dp(g,e.name),dp(y,e.name);const E=new fp({uid:w,auth:e,email:u,emailVerified:v,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return T&&Array.isArray(T)&&(E.providerData=T.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new up;i.updateFromServerResponse(t);const s=new fp({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await lp(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cp(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function mp(e){qf(e instanceof Function,"Expected a class definition");let t=pp.get(e);return t?(qf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pp.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}gp.type="NONE";const yp=gp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e,t,n){return`firebase:${e}:${t}:${n}`}class vp{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new vp(mp(yp),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||mp(yp);const r=wp(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=fp._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new vp(s,e,n)):new vp(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=wp(this.userKey,i.apiKey,s),this.fullPersistenceKey=wp("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ep(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Tp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sp(t))return"Blackberry";if(Cp(t))return"Webos";if(_p(t))return"Safari";if((t.includes("chrome/")||Ip(t))&&!t.includes("edge/"))return"Chrome";if(kp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Tp(e=$()){return/firefox\//i.test(e)}function _p(e=$()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ip(e=$()){return/crios\//i.test(e)}function Ep(e=$()){return/iemobile/i.test(e)}function kp(e=$()){return/android/i.test(e)}function Sp(e=$()){return/blackberry/i.test(e)}function Cp(e=$()){return/webos/i.test(e)}function Ap(e=$()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Np(){return G()&&10===document.documentMode}function Dp(e=$()){return Ap(e)||kp(e)||Cp(e)||Sp(e)||/windows phone/i.test(e)||Ep(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rp(e,t=[]){let n;switch(e){case"Browser":n=bp($());break;case"Worker":n=`${bp($())}-${e}`;break;default:n=e}return`${n}/JsCore/9.22.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(e,t){return Xf(e,"GET","/v2/recaptchaConfig",Jf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(e){return void 0!==e&&void 0!==e.enterprise}class Lp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Mf("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function Mp(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Fp{async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;Op(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{xp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Lp(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&Op(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Pp("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=qp(e)}}async function Up(e,t,n,i=!1){const s=new Fp(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mp(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await vp.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return jf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lp(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?he(e):null;return t&&jf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&jf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(mp(e))}))}async initializeRecaptchaConfig(){const e=await xp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Lp(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Fp(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new J("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mp(e)||this._popupRedirectResolver;jf(t,this,"argument-error"),this.redirectPersistenceManager=await vp.create(this,[mp(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return jf(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return jf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Of.logLevel<=fe.WARN&&Of.warn(`Auth (9.22.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.beforeStateQueue=new jp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function qp(e){return he(e)}class Bp{get next(){return jf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=re((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(e,t,n){const i=qp(e);jf(i._canInitEmulator,i,"emulator-config-failed"),jf(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=Wp(t),{host:o,port:a}=function(e){const t=Wp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:zp(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:zp(t)}}}(t),h=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Wp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class $p{toJSON(){return Vf("not implemented")}_getIdTokenResponse(e){return Vf("not implemented")}_linkToIdToken(e,t){return Vf("not implemented")}_getReauthenticationResolver(e){return Vf("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(e,t){return Xf(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gp(e,t){return ep(e,"POST","/v1/accounts:signInWithPassword",Jf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qp extends $p{static _fromEmailAndPassword(e,t){return new Qp(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qp(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Up(e,n,"signInWithPassword");return Gp(e,t)}return Gp(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Up(e,n,"signInWithPassword");return Gp(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ep(e,"POST","/v1/accounts:signInWithEmailLink",Jf(e,t))}(e,{email:this._email,oobCode:this._password});default:Pf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Kp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ep(e,"POST","/v1/accounts:signInWithEmailLink",Jf(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Pf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(e,t){return ep(e,"POST","/v1/accounts:signInWithIdp",Jf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends $p{static _fromParams(e){const t=new Jp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Nf(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Jp(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return Yp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Yp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ne(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zp extends $p{static _fromVerification(e,t){return new Zp({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Zp({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ep(e,"POST","/v1/accounts:signInWithPhoneNumber",Jf(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ep(e,"POST","/v1/accounts:signInWithPhoneNumber",Jf(e,t));if(n.temporaryProof)throw ip(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ep(e,"POST","/v1/accounts:signInWithPhoneNumber",Jf(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Xp)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Zp({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static parseLink(e){const t=function(e){const t=ie(se(e)).link,n=t?ie(se(t)).deep_link_id:null,i=ie(se(e)).deep_link_id;return(i?ie(se(i)).link:null)||i||n||t||e}(e);try{return new em(t)}catch(e){return null}}constructor(e){var t,n,i,s,r,o;const a=ie(se(e)),h=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);jf(h&&c&&l,"argument-error"),this.apiKey=h,this.operation=l,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tm{static credential(e,t){return Qp._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=em.parseLink(t);return jf(n,"argument-error"),Qp._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=tm.PROVIDER_ID}}tm.PROVIDER_ID="password",tm.EMAIL_PASSWORD_SIGN_IN_METHOD="password",tm.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nm{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im extends nm{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sm extends im{static credential(e){return Jp._fromParams({providerId:sm.PROVIDER_ID,signInMethod:sm.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sm.credentialFromTaggedObject(e)}static credentialFromError(e){return sm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sm.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}sm.FACEBOOK_SIGN_IN_METHOD="facebook.com",sm.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rm extends im{static credential(e,t){return Jp._fromParams({providerId:rm.PROVIDER_ID,signInMethod:rm.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rm.credentialFromTaggedObject(e)}static credentialFromError(e){return rm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rm.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}rm.GOOGLE_SIGN_IN_METHOD="google.com",rm.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class om extends im{static credential(e){return Jp._fromParams({providerId:om.PROVIDER_ID,signInMethod:om.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return om.credentialFromTaggedObject(e)}static credentialFromError(e){return om.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return om.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}om.GITHUB_SIGN_IN_METHOD="github.com",om.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class am extends im{static credential(e,t){return Jp._fromParams({providerId:am.PROVIDER_ID,signInMethod:am.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return am.credentialFromTaggedObject(e)}static credentialFromError(e){return am.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return am.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function hm(e,t){return ep(e,"POST","/v1/accounts:signUp",Jf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */am.TWITTER_SIGN_IN_METHOD="twitter.com",am.PROVIDER_ID="twitter.com";class cm{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await fp._fromIdTokenResponse(e,n,i),r=lm(n);return new cm({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=lm(n);return new cm({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function lm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class um extends Y{static _fromErrorAndOperation(e,t,n,i){return new um(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,um.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function dm(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw um._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(e,t,n=!1){const i=await ap(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cm._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function pm(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await ap(e,dm(i,s,t,e),n);jf(r.idToken,i,"internal-error");const o=op(r.idToken);jf(o,i,"internal-error");const{sub:a}=o;return jf(e.uid===a,i,"user-mismatch"),cm._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Pf(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(e,t,n=!1){const i="signIn",s=await dm(e,i,t),r=await cm._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function gm(e,t){return mm(qp(e),t)}async function ym(e,t,n){var i;const s=qp(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await Up(s,r,"signUpPassword");o=hm(s,e)}else o=hm(s,r).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Up(s,r,"signUpPassword");return hm(s,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),h=await cm._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(h.user),h}function wm(e,t,n){return gm(he(e),tm.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(e,t,n,i){return he(e).onAuthStateChanged(t,n,i)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bm{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends bm{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Np()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=$();return _p(e)||Ap(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Dp(),this._shouldAllowMigration=!0}}Tm.type="LOCAL";const _m=Tm;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends bm{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Im.type="SESSION";const Em=Im;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class km{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new km(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sm(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */km.receivers=[];class Cm{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const h=Sm("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===h)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nm(){return void 0!==Am().WorkerGlobalScope&&"function"==typeof Am().importScripts}class Dm{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Rm(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function xm(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Dm(e).toPromise()}(),t(await xm()))}))}))}async function Om(e,t,n){const i=Rm(e,!0).put({fbase_key:t,value:n});return new Dm(i).toPromise()}function Lm(e,t){const n=Rm(e,!0).delete(t);return new Dm(n).toPromise()}class Pm{async _openDb(){return this.db||(this.db=await xm()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=km._getInstance(Nm()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Cm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xm();return await Om(e,"__sak","1"),await Lm(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Om(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Rm(e,!1).get(t),i=await new Dm(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Lm(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Rm(e,!1).getAll();return new Dm(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Pm.type="LOCAL";const Mm=Pm;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Mp("rcb"),new $f(3e4,6e4);async function Fm(e,t,n){var i;const s=await n.verify();try{let r;if(jf("string"==typeof s,e,"argument-error"),jf("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){jf("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Xf(e,"POST","/v2/accounts/mfaEnrollment:start",Jf(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{jf("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;jf(n,e,"missing-multi-factor-info");const o=await function(e,t){return Xf(e,"POST","/v2/accounts/mfaSignIn:start",Jf(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Xf(e,"POST","/v1/accounts:sendVerificationCode",Jf(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Um{verifyPhoneNumber(e,t){return Fm(this.auth,e,he(t))}static credential(e,t){return Zp._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Um.credentialFromTaggedObject(t)}static credentialFromError(e){return Um.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Zp._fromTokenResponse(t,n):null}constructor(e){this.providerId=Um.PROVIDER_ID,this.auth=qp(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jm(e,t){return t?mp(t):(jf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Um.PROVIDER_ID="phone",Um.PHONE_SIGN_IN_METHOD="phone";class Vm extends $p{_getIdTokenResponse(e){return Yp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function qm(e){return mm(e.auth,new Vm(e),e.bypassAuthState)}function Bm(e){const{auth:t,user:n}=e;return jf(n,t,"internal-error"),pm(n,new Vm(e),e.bypassAuthState)}async function Hm(e){const{auth:t,user:n}=e;return jf(n,t,"internal-error"),fm(n,new Vm(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qm;case"linkViaPopup":case"linkViaRedirect":return Hm;case"reauthViaPopup":case"reauthViaRedirect":return Bm;default:Pf(this.auth,"internal-error")}}resolve(e){qf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new $f(2e3,1e4);class $m extends Wm{async executeNotNull(){const e=await this.execute();return jf(e,this.auth,"internal-error"),e}async onExecution(){qf(1===this.filter.length,"Popup operations only handle one event");const e=Sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Mf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Mf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$m.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Mf(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,zm.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,$m.currentPopupAction&&$m.currentPopupAction.cancel(),$m.currentPopupAction=this}}$m.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Km=new Map;class Gm extends Wm{async execute(){let e=Km.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Jm(t),i=Ym(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Km.set(this.auth._key(),e)}return this.bypassAuthState||Km.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Qm(e,t){Km.set(e._key(),t)}function Ym(e){return mp(e._redirectPersistence)}function Jm(e){return wp("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(e,t,n=!1){const i=qp(e),s=jm(i,t),r=new Gm(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Zm{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tg(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!tg(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Mf(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(eg(e))}saveEventToCache(e){this.cachedEventUids.add(eg(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function eg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function tg({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ng=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ig=/^https?/;async function sg(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Xf(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(rg(e))return}catch(e){}Pf(e,"unauthorized-domain")}function rg(e){const t=Bf(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!ig.test(n))return!1;if(ng.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new $f(3e4,6e4);function ag(){const e=Am().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let hg=null;function cg(e){return hg=hg||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){ag(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ag(),n(Mf(e,"network-request-failed"))},timeout:og.get()})}if(null===(s=null===(i=Am().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Am().gapi)||void 0===r?void 0:r.load)){const t=Mp("iframefcb");return Am()[t]=()=>{gapi.load?o():n(Mf(e,"network-request-failed"))},Pp(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw hg=null,e}))}(e),hg}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new $f(5e3,15e3),ug={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fg(e){const t=e.config;jf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Kf(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.22.0"},s=dg.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ne(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class mg{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function gg(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const h=Object.assign(Object.assign({},pg),{width:i.toString(),height:s.toString(),top:r,left:o}),c=$().toLowerCase();n&&(a=Ip(c)?"_blank":n),Tp(c)&&(t=t||"http://localhost",h.scrollbars="yes");const l=Object.entries(h).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=$()){var t;return Ap(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new mg(null);const u=window.open(t||"",a,l);jf(u,e,"popup-blocked");try{u.focus()}catch(e){}return new mg(u)}const yg=encodeURIComponent("fac");async function wg(e,t,n,i,s,r){jf(e.config.authDomain,e,"auth-domain-config-required"),jf(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.22.0",eventId:s};if(t instanceof nm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Z(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof im){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const h=await e._getAppCheckToken(),c=h?`#${yg}=${encodeURIComponent(h)}`:"";return`${function({config:e}){return e.emulator?Kf(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ne(a).slice(1)}${c}`}const vg=class{async _openPopup(e,t,n,i){var s;qf(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return gg(e,await wg(e,t,n,Bf(),i),Sm())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){Am().location.href=e}(await wg(e,t,n,Bf(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(qf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await cg(e),n=Am().gapi;return jf(n,e,"internal-error"),t.open({where:document.body,url:fg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ug,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=Mf(e,"network-request-failed"),r=Am().setTimeout((()=>{i(s)}),lg.get());function o(){Am().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Zm(e);return t.register("authEvent",(t=>{jf(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),Pf(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dp()||_p()||Ap()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Em,this._completeRedirectFn=Xm,this._overrideRedirectResult=Qm}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bg{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){jf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tg=H("authIdTokenMaxAge")||300;let _g=null;function Ig(e=Ge()){const t=We(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=We(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ee(n.getOptions(),null!=t?t:{}))return e;Pf(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:vg,persistence:[Mm,_m,Em]}),i=H("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Tg)return;const i=null==t?void 0:t.token;_g!==i&&(_g=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){he(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){he(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=V("auth");return r&&Hp(n,`http://${r}`),n}var Eg;Eg="Browser",He(new ce("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;jf(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:Eg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rp(Eg)},h=new Vp(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(mp);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(h,t),h}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),He(new ce("auth-internal",(e=>{const t=qp(e.getProvider("auth").getImmediate());return new bg(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Qe("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Eg)),Qe("@firebase/auth","0.23.2","esm2017");Ke({apiKey:"AIzaSyCJxy5vpXS7f1dJ93rKe4eeCdNHYRq7lSc",authDomain:"fate-compass-6afb9.firebaseapp.com",projectId:"fate-compass-6afb9",storageBucket:"fate-compass-6afb9.appspot.com",messagingSenderId:"37313764377",appId:"1:37313764377:web:285a6a927584aaec30de88"});const kg=Od(),Sg=Ig(),Cg=Dd(kg,"reads");let Ag,Ng=[];const Dg={startBtn:document.querySelector(".tarot-button"),tarotRead:document.querySelector(".tarot-cards"),tarotDescr:document.querySelector(".cards-descr")};Dg.startBtn.addEventListener("click",(e=>{Dg.tarotRead.innerHTML="",Dg.tarotDescr.innerHTML="";const t=y();xg(t),Dg.startBtn.style.marginBottom="50px",Rg(t)}));const Rg=e=>{const t=e.map((({pic:e,name:t})=>`<li class="item">\n                <img width="360" src="${e}" alt="${t}"/>\n                <p class="card-name">${t}</p>\n            </li>`)).join("");Dg.tarotRead.insertAdjacentHTML("beforeend",t);const n=e.map((({name:e,meaning_up:t,meaning_rev:n})=>`<li class="item">\n                <h3>${e}</h3>\n                <p><b>Meaning up:</b> ${t}</p>\n                <p><b>Meaning reversed:</b> ${n}</p>\n            </li>`)).join("");Dg.tarotDescr.insertAdjacentHTML("beforeend",n)},xg=e=>{Cf(Cg,{email:Ag,card1:{name:e[0].name,meanUp:e[0].meaning_up,meanRev:e[0].meaning_rev},card2:{name:e[1].name,meanUp:e[1].meaning_up,meanRev:e[1].meaning_rev},card3:{name:e[2].name,meanUp:e[2].meaning_up,meanRev:e[2].meaning_rev},card4:{name:e[3].name,meanUp:e[3].meaning_up,meanRev:e[3].meaning_rev},card5:{name:e[4].name,meanUp:e[4].meaning_up,meanRev:e[4].meaning_rev},card6:{name:e[5].name,meanUp:e[5].meaning_up,meanRev:e[5].meaning_rev}})};vm(Sg,(e=>{if(null===e)return;Ag=e.email;Sf(lf(Cg,df("email","==",Ag))).then((e=>{e.docs.forEach((e=>{Ng.push({...e.data()})})),console.log(Ng)})),Ng=[]}));Ke({apiKey:"AIzaSyCJxy5vpXS7f1dJ93rKe4eeCdNHYRq7lSc",authDomain:"fate-compass-6afb9.firebaseapp.com",projectId:"fate-compass-6afb9",storageBucket:"fate-compass-6afb9.appspot.com",messagingSenderId:"37313764377",appId:"1:37313764377:web:285a6a927584aaec30de88"});const Og=Od(),Lg=Ig(),Pg=Dd(Og,"users");let Mg=[],Fg=!1;const Ug={signInForm:document.querySelector(".signin-form"),logInForm:document.querySelector(".login-form"),logOut:document.querySelector(".logout"),logOutBtn:document.querySelector(".logout-btn"),tarotRead:document.querySelector(".tarot-read"),matrixRead:document.querySelector(".matrix-read"),logIn:document.querySelector(".login"),signIn:document.querySelector(".signin"),haveAccount:document.querySelector(".have-account"),profileBtn:document.querySelector(".profile-btn"),backdrop:document.querySelector(".backdrop"),closeBtn:document.querySelector("[data-close]")},{signInForm:jg,logInForm:Vg,logOut:qg,logOutBtn:Bg,tarotRead:Hg,matrixRead:Wg,logIn:zg,signIn:$g,haveAccount:Kg,profileBtn:Gg,backdrop:Qg,closeBtn:Yg}=Ug;jg.addEventListener("submit",(e=>{e.preventDefault();const t=jg.email.value,n=jg.password.value,i=Math.random()>=.5;if(n!==$g.passwordMatch.value)return $g.reset();ym(Lg,t,n).then((e=>{console.log(`Welcome to the gay club, ${e.user.email}`),Cf(Pg,{email:t.toLowerCase(),password:n,vipAccount:i}).then((()=>{jg.reset()}))})).catch((e=>console.log(e.message)))})),Vg.addEventListener("submit",(e=>{e.preventDefault();const t=Vg.email.value,n=Vg.password.value;wm(Lg,t,n).then((e=>{console.log("Welcome back",e.user.email);Sf(lf(Pg,df("email","==",e.user.email))).then((e=>{e.docs.forEach((e=>{Mg.push({...e.data()})})),localStorage.setItem("isVip",JSON.stringify(Mg[0].vipAccount))})),Mg=[],Vg.reset()})).catch((e=>{console.log(e.message)})),console.log("signed in")})),Bg.addEventListener("click",(()=>{var e;(e=Lg,he(e).signOut()).then((()=>{console.log("signed out")})).catch((e=>{console.log(e.message)}))})),vm(Lg,(e=>{null===e&&localStorage.removeItem("isVip");const t=document.querySelector("[data-user]");if(null===e)t.textContent="",qg.classList.add("hidden"),zg.classList.remove("hidden");else{t.textContent=`Welcome ${e.email}`,qg.classList.remove("hidden"),zg.classList.add("hidden"),$g.classList.add("hidden"),Kg.classList.add("hidden");setTimeout((()=>{Fg=localStorage.getItem("isVip"),Fg&&(Wg.classList.remove("hidden"),Hg.classList.remove("hidden"))}),1e3)}})),Kg.addEventListener("click",(()=>{zg.classList.toggle("hidden"),$g.classList.toggle("hidden")})),Gg.addEventListener("click",(()=>{Qg.classList.remove("hidden")})),Yg.addEventListener("click",(()=>{Qg.classList.add("hidden")}));
//# sourceMappingURL=index.1a9f7127.js.map
