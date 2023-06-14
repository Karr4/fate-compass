function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=e=>{if(e)for(const t of e)t.remove()},i=e=>{if(e>22){let t=0;e=e.toString().split("");for(let n of e)t+=parseInt(n);return i(t)}return e},s=(e,t,n)=>{const s=[],o=i(e+t+n),r=i(e+t+n+o),a=i(e+t),h=i(t+n),u=i(n+o),c=i(o+e),l=i(r+e),d=i(r+t),f=i(r+n),m=i(r+o),p=i(r+a),g=i(r+h),y=i(r+u),w=i(r+c),v=i(e+l),b=i(t+d),T=i(n+f),k=i(o+m),_=i(p+a),I=i(g+h),E=i(y+u),S=i(w+c),C=i(f+m),A=i(C+f),N=i(C+m),D=i(l+r),R=i(d+r);return s.push(e,t,n,o,r,a,h,u,c,l,d,f,m,p,g,y,w,v,b,T,k,_,I,E,S,C,A,N,D,R),s},o=([e,t,n,s,o,,,,,r,a,h,u,,,,,c,l,,,,,,,,,,d,f])=>{const m={physic:[e,c,r,d,o,h,n],energy:[t,l,a,f,o,u,s],emotions:[i(e+t),i(c+l),i(r+a),i(d+f),i(o+o),i(h+u),i(n+s)]},{physic:p,energy:g,emotions:y}=m;return p.push(i(p.reduce(((e,t)=>e+t)))),g.push(i(g.reduce(((e,t)=>e+t)))),y.push(i(y.reduce(((e,t)=>e+t)))),m},r=([e,t,n,s,o,r,a,h,u])=>{const c=[i(t+s),i(e+n),i(a+u),i(r+h)];return c.push(i(c[0]+c[1])),c.push(i(c[2]+c[3])),c},a={matrix:document.querySelector(".matrix"),matrixForm:document.querySelector(".matrix-form"),physicChart:document.querySelector(".physic"),energyChart:document.querySelector(".energy"),emotionsChart:document.querySelector(".emotions"),matrixShit:document.querySelector(".matrix-data"),skySmth:document.querySelector(".sky-smth-list")},{matrix:h,matrixForm:u,physicChart:c,energyChart:l,emotionsChart:d,matrixShit:f,skySmth:m}=a;u.addEventListener("submit",(e=>{e.preventDefault();const t=u.birthday.value.trim();if(!t)return void u.reset();f.classList.remove("hidden");const a=document.querySelectorAll("[data-delete]");n(a);let h=t.split(".");const c=i(parseInt(h[0])),l=i(parseInt(h[1])),d=i(parseInt(h[2])),m=s(c,l,d),w=o(m),v=r(m);p(m),g(w),y(v)}));const p=e=>{const t=e.map((e=>`<li class="matrix__number" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");h.insertAdjacentHTML("beforeend",t)},g=({physic:e,energy:t,emotions:n})=>{const i=e.map((e=>`<li class="chart__element" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");c.insertAdjacentHTML("beforeend",i);const s=t.map((e=>`<li class="chart__element" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");l.insertAdjacentHTML("beforeend",s);const o=n.map((e=>`<li class="chart__element" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");d.insertAdjacentHTML("beforeend",o)},y=e=>{const t=e.map((e=>`<li class="sky__item" data-delete>\n            <p>${e}</p>\n        </li>`)).join("");m.insertAdjacentHTML("beforeend",t)};var w;w=JSON.parse('{"nhits":78,"cards":[{"type":"major","name_short":"ar00","name":"The Fool","pic":"https://www.modernwaytarot.com/wp-content/uploads/2021/09/modern-way-tarot-card-the-fool-meaning-600x1024.png.webp","value":"ZERO","value_int":0,"meaning_up":"The Fool card is numbered 0, which is considered to be a number of infinite potential. Consider him a blank slate, for The Fool has yet to develop a clear personality. He is the symbol of innocence - his journey to come will shape his character yet.To see the The Fool generally means a beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed. He leads a simple life, having no worries, and does not seem troubled by the fact that he cannot tell what he will encounter ahead.","meaning_rev":"When you land on the reversed Fool in your reading, you can generally find his more negative characteristics being on display. It can mean that you are literally acting like a fool by disregarding the repercussions of your actions. Like the youth depicted in the card, you don\'t see how dangerous of a position you find yourself in. A reversed Fool card can show that you are living in the moment and not planning for the future. The reversed Fool meaning serves as caution that you should be more aware so as not to be taken advantage of. Like the dog in the Rider Waite version, this card is here to alert you on anything that may sound too good to be true.","desc":"With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it.In his Manual of Cartomancy, Grand Orient has a curious suggestion of the office of Mystic Fool, as apart of his process in higher divination; but it might call for more than ordinary gifts to put it into operation. We shall see how the card fares according to the common arts of fortune-telling, and it will be an example, to those who can discern, of the fact, otherwise so evident, that the Trumps Major had no place originally in the arts of psychic gambling, when cards are used as the counters and pretexts. Of the circumstances under which this art arose we know, however, very little. The conventional explanations say that the Fool signifies the flesh, the sensitive life, and by a peculiar satire its subsidiary name was at one time the alchemist, as depicting folly at the most insensate stage."},{"type":"major","name_short":"ar01","name":"The Magician","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-magician-meaning-600x1024.png.webp","value":"1","value_int":1,"meaning_up":"The Magician is the representation of pure willpower. With the power of the elements and the suits, he takes the potential innate in the fool and molds it into being with the power of desire. He is the connecting force between heaven and earth, for he understands the meaning behind the words \\"as above so below\\" - that mind and world are only reflections of one another. Remember that you are powerful, create your inner world, and the outer will follow.","meaning_rev":"When you obtain the Magician reversed, it might mean its time for you to implement some changes. While right side up, the Magician represents true power, the reversed Magician is a master of illusion. The magic that he performs is one of deception and trickery. You may be lured in by the showmanship of his arts, but behind that there may be an intention to manipulate for selfish gain. Getting this card might mean that there is someone who pretends to have your best interests at hand when the opposite is true.Consider whether this reversed the magician is in your circle, or perhaps might also represent your current state of emotions. It may mean you may become obsessed with power and that might lead to wrong, reckless decisions that will lead to your eventual downfall.","desc":"A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician\'s right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \\"unto the Ogdoad.\\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ."},{"type":"major","name_short":"ar02","name":"The High Priestess","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-high-priestess-600x1024.png.webp","value":"2","value_int":2,"meaning_up":"unconscious, intuition, mystery, spirituality, higher power, inner voice, repressed intuition, hidden motives, superficiality, confusion, cognitive dissonance. You\'ve most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. When you encounter her, you will see her sitting on a cubic stone between the two pillars at Solomon’s Temple, Jachin, and Boaz. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive.The High Priestess\'s location between the two suggests that it is her responsibility to serve as a mediator between the depths of the reality. She is the third pillar - the path between. She believes that both pillars are equal and there is knowledge to be learned in both worlds. You will also notice that she wears the crown of Isis which can mean that she is a believer of magic. The high priestess wearing of the solar cross denotes that she is connected to the season of the earth and the earth itself. The crescent moon at her feet is seen also in many depictions of the Virgin Mary, and means that she has a complete grasp over her emotion and the pomegranates refer to the ambition of the priestess. The meaning of the High Priestess is related with inner knowledge. Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. When the High Priestess shows up it can depict an archetype known as the divine feminine - the mysterious female that understands and holds the answers to the deep unknowns; religion, self, nature. She represents someone that is intuitive, and beginning to open to her or his spirituality. Meditation, prayer and new spiritual work is indicated. ","meaning_rev":"When it comes to the High Priestess reversed, it can mean that you are finding it difficult to listen to your intuition. It is time for you to meditate and try new approach, for at this moment, the rational approach will not work. Something has been telling you to follow your gut, but you may be ignoring the call. There is a lot of confusion around you, and your actions may feel contrary to what you know is right. You must never be afraid to ask questions of yourself that may illuminate a new path forward for you, one that is more authentic to your inner self and your individual values.","desc":"She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother. In a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana."},{"type":"major","name_short":"ar03","name":"The Empress","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-empress-600x1024.png.webp","value":"3","value_int":3,"meaning_up":"The Empress shows us how deeply we are embedded to our femininity. Femininity could be associated with fertility, expression, creativity and nurturing among many other aspects. It therefore calls you to connect with beauty and bring happiness to your life. Understand yourself and get in touch with your sensuality so that you can attract life circumstances to bring happiness and joy. She is a signal that be kind to yourself, to take care of yourself. The Empress is also a strong indication of pregnancy and motherhood. You can look for other cards to confirm if this is truly pregnancy, or rather just an indication of a motherly, nurturing and caring attitude. The Empress card could also mean the birth of a new idea, business or project on your life. Owing to the good fortune that surrounds this card, you can be sure that such situations and projects would end successfully in your life. Discover and bring forth those ideas that have been clinging to you and make sure that you devote yourself towards accomplishing them. This card is a sign that they are going to be successful, and well taken care of. The Empress, as the archetype of the mother earth, also encourages you to spend time interacting with nature, the mother of all of us.","meaning_rev":"The Empress reversed indicates that you have lost too much of your own willpower and strength because you have started placing too much effort and concern to other people’s affairs. While the Empress\'s nature is of showering her loved ones with attention and care, this can sometimes go overboard. You might be neglecting your own needs, or even smothering the ones you love with your well-intentioned actions. In a role reversal, perhaps a reversed Empress is finding her way into your life; it could also mean that you are relying on others to take care of you, and make decisions for you. You need to work towards removing this influence on your life, and build confidence in your own actions. Always try as much as you can to ensure that you solve matters on your own.","desc":"A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation. In another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth."},{"type":"major","name_short":"ar04","name":"The Emperor","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-emperor-600x1024.png.webp","value":"4","value_int":4,"meaning_up":"It’s all about control when it comes to the Emperor, for this card means authority, regulation, organization and a fatherliness. The Emperor represents a strategic thinker who sets out plans that he must see through. He is a symbol of the masculine principle - the paternal figure in life that gives structure, creates rules and systems, and imparts knowledge. Where the Empress\'s desire for their kingdom is to create happiness, the emperor desires to foster honor and discipline. He guides with a firm hand, following the calling of the crown above all else. Though he is a ruler, he understands that to reign is also to serve - thus he acts rationally and according to what is for the greater good of the kingdom.","meaning_rev":"The Emperor reversed is a sign of abused authoritative power. In your social life, it can manifest in the overreach of power from a father figure or a possessive partner. In career readings, it could be coming from a superior. It presents a man who wants to take control of your actions and makes you feel powerless.  It could also be that you are playing the part of a weak ruler, hatching a plan to avoid the tasks that come with having responsibility. Perhaps you aspire for a career that is more flexible than one that is governed by strict rules. Lack of self-control and inability to handle situations can be represented by the Emperor on a personal level. When he is reversed, the structures, rules and systems that he creates are no longer working. His desire to inspire higher principles in his kingdom have turned to ruthlessness, tyranny and rigidity. He seeks to dominate, forgetting his call from the crown to do what is best for his people, fearing only for his loss of control and thus creating suffering.","desc":"He has a form of the Crux ansata for his sceptre and a globe in his left hand. He is a crowned monarch--commanding, stately, seated on a throne, the arms of which axe fronted by rams\' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta. It should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify also--and the male figure especially--the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are \\"full of strange experience,\\" but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being--but this is fantasy."},{"type":"major","name_short":"ar05","name":"The Hierophant","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-hierophant-600x1024.png.webp","value":"5","value_int":5,"meaning_up":"To see the Hierophant in a reading is to embrace the conventional, for it suggests that you have a certain desire to actually follow a process which has been well established. It also suggests that you want to stay within certain conventional bounds of what could be considered an orthodox approach. So, instead of being innovative, you will be adapting to certain beliefs and systems which are already put in place and are existing.","meaning_rev":"When you see the Hierophant in reverse, it may mean that you are feeling particularly restricted and even constrained from too many structures and rules. As a result, you have lost quite a lot of control as well as flexibility in your life. You have a particularly strong will and desire to go ahead and regain control as well as to break free from the shackles of convention. You are tempted to try unorthodox approaches or to function in a way which defies social ties and norms. The Hierophant reversal meaning is mostly about questioning certain traditions and making sure that whatever it is that you do is the right thing for you in this certain moment.","desc":"He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested.\\nHe is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy-except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression."},{"type":"major","name_short":"ar06","name":"The Lovers","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-lovers-1-600x1024.png.webp","value":"6","value_int":6,"meaning_up":"The primary meaning within the Lovers is harmony, attractiveness, and perfection in a relationship. The trust and the unity that the lovers have gives each of them confidence and strength, empowering the other. The bond that they have created is very strong, and it can indicate that the two are joined in marriage, and other close and intimate relationships. Another meaning behind the lovers card is the concept of choice - a choice between things that are opposing and mutually exclusive. This could be a dilemma that you need to think about carefully and make the best decision for your situation. A more personal Lovers meaning that can apply to individuals is the development of your own personal belief systems, regardless of what are the societal norms. We see this as a development from the Hierophant, who made decrees and passed on his knowledge through a standardized system. This is one of the times when you figure out what you are going to stand for, and what your philosophy in life will truly be. You must start making up your mind about what you find important and unimportant in your life. You should be as true to yourself as you can be, so you will be genuine and authentic to the people who are around you.","meaning_rev":"The Lovers reversed can point to both inner and outer conflicts that you are dealing with. The disharmony can make daily life difficult and could be putting pressure on your relationships. You should take time to think about what you are punishing yourself for, so you can fix them or let them go. At this time, you should also think about your personal values and belief system to make sure that they are aligned with what you want from your life. A break in communication could be another possible interpretation. The foundation for your relationships may be cut off, creating an imbalance between you and your partner or loved ones. The unity normally present within the card has become lopsided. The Lovers reversed can also indicate that you have been avoiding responsibility for your actions. You could have made a decision that was based on your desire for immediate gratification but are now blaming others for the consequences that are catching up to you. So, you need to make amends or let go of the past and make better decisions in the future.","desc":"The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire. This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. In a very high sense, the card is a mystery of the Covenant and Sabbath. The suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism."},{"type":"major","name_short":"ar07","name":"The Chariot","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-chariot-600x1024.png.webp","value":"7","value_int":7,"meaning_up":"The Chariot tarot card is all about overcoming challenges and gaining victory through maintaining control of your surroundings. This perfect control and confidence allows the charioteer to emerge victorious in any situation. The use of strength and willpower are critical in ensuring that you overcome the obstacles that lie in your path. The Chariot\'s message comes to make you stronger as you strive to achieve your goals. The key message that he brings to you is that you must maintain focus, confidence, and determination through a process that will be full of winding turns and detours. If you have a plan or a project that you seem not to be sure about, the Chariot shows that you should pursue the plan with a structured and ordered approach. Your boldness will ensure that you achieve all that you should in this goal.","meaning_rev":"The reversed Chariot\'s appearance in a reading can help you become aware of both your aggression, and your lack of willpower. It may either be saying that you are lacking in focus, motivation or direction, or that you are being warped by your obsession with your goals. In the former case, let the Chariot be a reminder that you can emerge victorious as long as you can gather the courage to do so. In the latter, your impulses may be another factor that you must rein in. To see the Chariot in reverse may suggest that you need to come to terms with the fact that you cannot always be in control. The Chariot reversal meaning can also be an indication of lack of control and direction over your life. You are at the mercy of the opposing forces and the obstacles, and cannot seem to muster the strength to take over. You are taking everything lying down, and life is dragging in any direction that it pleases. It should serve as a wakeup call and reminder that you will need to tighten some loose ends and take charge of your destiny.","desc":"An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind. It is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood."},{"type":"major","name_short":"ar08","name":"Strength","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-strength-600x1024.png.webp","value":"8","value_int":8,"meaning_up":"When you get the Strength card in an upright manner during your tarot reading, then it shows that you have inner strength and fortitude during moments of danger and distress. It shows that you have the ability to remain calm and strong even when your life is going through immense struggle. It also shows that you are a compassionate person and you always have time for other people even if it\'s at your own expense. Getting the strength card means that you are a very patient individual who is likely to accomplish anything that they put their mind to. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind. This card also indicates this kind of compassion will always be rewarded with having a lot of stability in your life either presently on in the near future.","meaning_rev":"An upside down Strength card can mean that you are (or about to) experience an intense anger or fear in your life. You seem to be lacking the inner strength that this card normally represents, meaning you might be experiencing fear, and a lack of conviction and confidence in your own abilities. This can mean that you have forgotten all about your passions and the kind of joy, happiness, and fulfillment that came with doing what you love. A reversed strength card in a reading might also mean that one is experiencing depression because of a number of reasons and because of that, it is draining all of the happiness from their lives. One might end up being withdrawn from society because of the unhappiness or depression since they may feel people are the reason why they are so sad. It can also be a sign of jealousy, especially when everyone seems to be happy or excelling in every aspect of life while you are stagnating. This card indicates that you must learn to gain confidence in order to re-harness your inner strength.","desc":"A woman, over whose head there broods the same symbol of life which we have seen in the card of the Magician, is closing the jaws of a lion. The only point in which this design differs from the conventional presentations is that her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of justice, which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. Fortitude, in one of its most exalted aspects, is connected with the Divine Mystery of Union; the virtue, of course, operates in all planes, and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation. These higher meanings are, however, matters of inference, and I do not suggest that they are transparent on the surface of the card. They are intimated in a concealed manner by the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden of Divine Law, when it has been taken into the heart of hearts. The card has nothing to do with self-confidence in the ordinary sense, though this has been suggested--but it concerns the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which the lion signifies the passions, and she who is called Strength is the higher nature in its liberation. It has walked upon the asp and the basilisk and has trodden down the lion and the dragon."},{"type":"major","name_short":"ar09","name":"The Hermit","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-hermit-600x1024.png.webp","value":"9","value_int":9,"meaning_up":"The Hermit is a seeker for the knowledge that comes from within. A lonely wanderer in the path of the night, he searches for that which can only be gained with long periods of solitude - the inner voice. To hear it, he must disconnect from the crowds whose voices and desires threaten to overcome his own. He walks through the dark night of his unconscious, guided only by the low light of the northern star, with his destination being his home, his self. You are currently contemplating that you need to be alone. Never be afraid to take this chance to reflect, as it could help you clear your mind of all the clutter that comes with everyday life. The Hermit may also refer to your effort in taking action that is authentic and aligned with your true self. You are perhaps searching your inner soul for guidance on what is right, and where your next steps are to be. The hermit\'s appearance in a reading can also denote the appearance of someone who will come to your life that will be your mentor.","meaning_rev":"When reversed, you are perhaps in a situation where you\'d like to be alone; there is nothing wrong about that. However, there is a possibility that your seclusion may become harmful to both yourself and others. Though the Hermit sets forwards with noble intentions to search for his inner truth, his path inward may also be filled with great danger. Going inward may lead to madness and the abyss, for the unconscious is filled with images that he may not yet understand, lurking and waiting to lure you ever inside. Like a man that gets lost in his own dreams, the hermit may find himself stuck in a world of his own, alone, trapped, unreal. You must learn to balance your need for truth with connection to your fellow human. When it comes to work, the hermit reversal meaning refers to your preparedness to get to the bottom of something that has been troubling you for quite some time now. There is searching to be done, and it will be your responsibility to ask the question that will allow the other people to understand the circumstances.","desc":"The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that \\"where I am, you also may be.\\". It is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Éliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but--like the card itself--to the truth that the Divine Mysteries secure their own protection from those who are unprepared."},{"type":"major","name_short":"ar10","name":"Wheel Of Fortune","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-wheel-of-fortune-600x1024.png.webp","value":"10","value_int":10,"meaning_up":"The Wheel of Fortune turns evermore, seemingly to communicate that life is made up of both good and bad times, and that the cycle is one that we cannot control. It is something that is subjected to both kings and workers, and that nobody on earth can avoid what is fated. When you have good moments in your life, make sure that you enjoy to the fullest, for what comes up must always go down. The same is true in reverse - when you are in a bad situation, things will eventually become better again.Greater forces that are outside of human control are at work here. The same forces that govern the changing of the seasons, or the rising and setting of the sun is also the master of luck and the fate of individuals. Where it lands is as random as chance - you may find yourself at either the top or bottom, but remember that no matter what the outcome it may not last for very long, for the wheel always turns.","meaning_rev":"When the wheel is reversed, it means that luck has not been on your side and misfortunes have been following you. When it\'s associated with this card, you must understand that these are due to external influences that you cannot control. Like the wheel, our luck and our fate is always in motion, and sometimes we are on the bottom. Be assured that the wheel will turn again, and you will be okay again soon. What you shouldn\'t do however, is cling to the illusion of control. Perhaps in this turn of the wheel, the lesson is to learn to let go and release. There are things that cannot be moved by human will and action alone. When we do not let go, it can bring only more suffering, for you may blame yourself for actions that could not have altered the situation. When we learn to accept, we also learn to forgive ourselves. We learn to move on, and move forward - and eventually, we learn that this feeling of acceptance can push the wheel again forward, and move it towards a new cycle.","desc":"In this symbol I have again followed the reconstruction of Éliphas Lévi, who has furnished several variants. It is legitimate--as I have intimated--to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel occupy the angles of the card, and the wheel itself follows other indications of Lévi in respect of Ezekiel\'s vision, as illustrative of the particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged with the letters of the Divine Name--to shew that Providence is imphed through all. But this is the Divine intention within, and the similar intention without is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism by stultifying the essential idea of stability amidst movement.\\nBehind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, from the days of Lévi onward, the occult explanations of this card are--even for occultism itself--of a singularly fatuous kind. It has been said to mean principle, fecundity, virile honour, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane."},{"type":"major","name_short":"ar11","name":"Justice","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-justice-e1646572989637-600x1024.png.webp","value":"11","value_int":11,"meaning_up":"The decisions that you make now have long-term effects in all things, both for yourself and others. There will always come a time where you will be judged. The Justice tarot card appearing in a reading signals that a judgment will be made fairly and accordingly. The decisions that you have made in the past will be carefully weighed with fairness. Your feelings around this card may differ depending on your situation. If you have been wronged, this card\'s appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning. Her appearance represents a chance for you to change your actions now for a better future. When a tarot card reading shows the figure of justice, it is time to account for your actions.Another meaning of the Justice card is truth. Truth must come to pass, and this cannot be found from the mouths and gossip of others. Instead, it\'s based on facts. Learn the truth about others and yourself, speak and know the truth before passing a judgment. During a reading, when you see the Justice Tarot card, you need to be fair in all your deeds. By following the right procedure to learn the truth, you will understand what your tasks are. Another meaning of Justice Tarot card during a reading is to symbolize that attention is needed. It could be about your life, career or just an important decision that you need to make. If you have been unsure about something, it is time to get a solution once and for all.","meaning_rev":"A reversed Justice tarot card could indicate various things. One Justice reversal meaning is to show you are living in denial. You are not willing to accept the consequences of your actions or others. You are running from your guilt. You must however, be aware that these are actions that are in the past. Your future depends on your actions today - and what you will do to tip the scales in balance again. How can you make up for your wrongs? Taking action gives you a chance to change and stop judging yourself. In legal matters, this could represent an unfair outcome of a case that you will not accept.","desc":"As this card follows the traditional symbolism and carries above all its obvious meanings, there is little to say regarding it outside the few considerations collected in the first part, to which the reader is referred.\\nIt will be seen, however, that the figure is seated between pillars, like the High Priestess, and on this account it seems desirable to indicate that the moral principle which deals unto every man according to his works--while, of course, it is in strict analogy with higher things;--differs in its essence from the spiritual justice which is involved in the idea of election. The latter belongs to a mysterious order of Providence, in virtue of which it is possible for certain men to conceive the idea of dedication to the highest things. The operation of this is like the breathing of the Spirit where it wills, and we have no canon of criticism or ground of explanation concerning it. It is analogous to the possession of the fairy gifts and the high gifts and the gracious gifts of the poet: we have them or have not, and their presence is as much a mystery as their absence. The law of Justice is not however involved by either alternative. In conclusion, the pillars of Justice open into one world and the pillars of the High Priestess into another."},{"type":"major","name_short":"ar12","name":"The Hanged Man","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-hanged-man-600x1024.png.webp","value":"12","value_int":12,"meaning_up":"The hanged man understands that his position is a sacrifice that he needed to make in order to progress forward - whether as repentance for past wrongdoings, or a calculated step backward to recalculate his path onward. This time he spends here will not be wasted, he does this as part of his progression forward. His upside down state can also symbolize the feeling of those that walk a spiritual path, for they see the world differently. Where there are others that do not understand the need to sacrifice, you see it differently. This is a natural course of action for you as you walk the path alone. The Hanged Man card reflects a particular need to suspend certain action. As a result, this might indicate a certain period of indecision. This means that certain actions or decisions which need to be properly implemented are likely to be postponed even if there is an urgency to act at this particular moment. In fact, it would be ultimately the best if you are capable of stalling certain actions in order to ensure that you have more time to reflect on making critical decisions, this will ultimately be the best.This is a card which is mainly designated towards waiting and suspension. This suggests that this might be the thing that you need to do in order to achieve success or to wait for the proper opportunity. Keep in mind that taking action is not always the best solution and in certain cases refraining from doing so might bring you just as much, if not more benefits.","meaning_rev":"The reversal meaning of the Hanged Man card represents a very specific period of time during which you feel as if you are sacrificing a significant amount of time while getting nothing in return. You might have felt as if certain things are at a state of an absolute standstill without any particular resolution or movement. It’s as if you are putting your entire effort and attention into something but nothing turns out as it should.","desc":"The gallows from which he is suspended forms a Tau cross, while the figure--from the position of the legs--forms a fylfot cross. There is a nimbus about the head of the seeming martyr. It should be noted (1) that the tree of sacrifice is living wood, with leaves thereon; (2) that the face expresses deep entrancement, not suffering; (3) that the figure, as a whole, suggests life in suspension, but life and not death. It is a card of profound significance, but all the significance is veiled. One of his editors suggests that Éliphas Lévi did not know the meaning, which is unquestionable nor did the editor himself. It has been called falsely a card of martyrdom, a card a of prudence, a card of the Great Work, a card of duty; but we may exhaust all published interpretations and find only vanity. I will say very simply on my own part that it expresses the relation, in one of its aspects, between the Divine and the Universe.\\nHe who can understand that the story of his higher nature is imbedded in this symbolism will receive intimations concerning a great awakening that is possible, and will know that after the sacred Mystery of Death there is a glorious Mystery of Resurrection."},{"type":"major","name_short":"ar13","name":"Death","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-death-600x1024.png.webp","value":"13","value_int":13,"meaning_up":"Death is one of the most feared cards in a Tarot Deck, and it is very misunderstood. Many people avoid mentioning this card because it has that much power. Most times, people take the name of the card literally. However, the real meaning within the Death card is one of the most positive in the whole deck. The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open. The past needs to be placed behind you, so you can focus your energy on what is ahead of you. Another meaning is that you are going to go through a major change, transition, or transformation. The old version of you needs to ‘die’ to allow the new you to be created. This can be a scary time for you because you may be unsure of what will happen in the future. Even if you are scared, you should welcome the change because you are opening the door to new life events. Death can also mean that you need to let go of any unhealthy attachments that you have in your life. This is an important part of life, so learning to keep moving forward is one of the lessons Death teaches us.","meaning_rev":"The Death reversal meaning is still about change, but that you have been resisting it. You could be worried about letting go of the past, or you could not be sure of the changes that you need to make to go forward. Resisting the change and holding onto the past can limit your future, which can cause you to feel like you are in limbo. You should take some time to assess the ways that you have been approaching changes in your life. You may find you have been halting the changes that you need due to fears of the unknown. While you can still be afraid, you should trust that you are taking the right steps and move forward. Life moves on, so fighting passing time is only going to leave you with regrets. Death does not have to be a card of regret, especially if you heed its warning.","desc":"The veil or mask of life is perpetuated in change, transformation and passage from lower to higher, and this is more fitly represented in the rectified Tarot by one of the apocalyptic visions than by the crude notion of the reaping skeleton. Behind it lies the whole world of ascent in the spirit. The mysterious horseman moves slowly, bearing a black banner emblazoned with the Mystic Rose, which signifies life. Between two pillars on the verge of the horizon there shines the sun of immortality. The horseman carries no visible weapon, but king and child and maiden fall before him, while a prelate with clasped hands awaits his end. There should be no need to point out that the suggestion of death which I have made in connection with the previous card is, of course, to be understood mystically, but this is not the case in the present instance. The natural transit of man to the next stage of his being either is or may be one form of his progress, but the exotic and almost unknown entrance, while still in this life, into the state of mystical death is a change in the form of consciousness and the passage into a state to which ordinary death is neither the path nor gate. The existing occult explanations of the 13th card are, on the whole, better than usual, rebirth, creation, destination, renewal, and the rest."},{"type":"major","name_short":"ar14","name":"Temperance","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-temperance-600x1024.png.webp","value":"14","value_int":14,"meaning_up":"In moments where there is anxiety or great stress, you have been able to remain calm throughout. You are a person who has mastered the art of not letting things get to you, and this allows you to achieve much progress in all areas you seek out to explore. The Temperance tarot card suggests moderation and balance, coupled with a lot of patience. Where this card appears, there is the suggestion that extremity in any situation is to be avoided.The Temperance card implies that you have a clear vision and know what you want to achieve. This is an indication of higher learning, which is a critical attribute in the journey of life. It reflects that you have found peace with what you are doing and everything is unfolding as it ought to. The Temperance card, in relation to other people, shows that you are able to adapt and work in harmony with your community, your coworkers and your loved ones. Your calmness in all matters gives them comfort and puts them at ease. Temperance may also indicate a time to evaluate and re-examine the priorities you have chosen. This will help you create a balance between your outer and inner self. At the end of it all, you will find greater purpose and meaning in your actions, for her message is that we cannot live fully in either. ","meaning_rev":"Temperance in reversed is a reflection of something that is out of balance and may be causing stress and anxiety. The real meaning of the Temperance card can be deciphered using the other cards in the spread to identify areas where this imbalance is being caused. A Temperance in reversal may also be used as a warning;  if you take a certain path, it would lead to turbulence and excess. Lack of a long-term plan or vision may also be the Temperance reversal meaning. This creates a lack of purpose for you, leaving you feeling lopsided as you search here and there for what you should be doing. You must reflect and think carefully about what needs to change. Temperance reminds us that all things are only good in moderation, and that we must examine in which aspects of our lives we are breaking the balance.","desc":"A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary. I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from chalice to chalice. It has one foot upon the earth and one upon waters, thus illustrating the nature of the essences. A direct path goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein.\\nSo also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. It is, moreover, untrue to say that the figure symbolizes the genius of the sun, though it is the analogy of solar light, realized in the third part of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going."},{"type":"major","name_short":"ar15","name":"The Devil","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-devil-600x1024.png.webp","value":"15","value_int":15,"meaning_up":"Getting the devil card in your reading shows that you have feelings of entrapment, emptiness and lack of fulfillment in your life. It might also mean that you are a slave to materialism and opulence and no matter how hard you try, you just can’t seem to shake off the feeling of wanting to indulge in luxurious living. You might be aware that this kind of lifestyle is leading you down the rabbit hole, but you have that feeling of not having any form of control over your actions or urges.\\nAddiction to substances or material pleasures can also be the reason for your feelings of powerlessness and entrapment. In situations such as these, you may feel as though you are a slave, unable to control your impulses or willpower to direct yourself towards something other than the satisfaction of these desires. ","meaning_rev":"The upside down meaning of the Devil card can be the moment when an individual becomes self-aware and breaks all of the chains that come with addiction and poor habits. It might be because they are tired of running in circles and are in need of change. But one thing is usually clear – breaking off these chains, especially those of addiction is never easy. So, one has to be prepared to make the necessary changes that might initially seem painful to make the adjustments that will pay off in the end by being able to find your true self again. Self-assessment is called for in this case and the individual needs to take some time and list all of the things that they need to get rid of. And once that has been done, and then it would be time for them to embark on the difficult journey of self-improvement.","desc":"The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch, inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof is the chain and fatality of the material life.\\nThe figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than his usual derision for the arts which he pretended to respect and interpret as a master therein, Éliphas Lévi affirms that the Baphometic figure is occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth therefrom who have eaten the forbidden fruit."},{"type":"major","name_short":"ar16","name":"The Tower","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-tower-600x1024.png.webp","value":"16","value_int":16,"meaning_up":"The Tower represents change in the most radical and momentous sense. It is for this reason that the card itself visually looks so unnerving. But it doesn\'t necessarily have to be truly frightening or ominous. Because at the heart of this card, its message is foundational, groundbreaking change. The kind of event that the Tower card marks does not have to be something terrible, like a disaster or a great loss.  Change itself is a normal part of life that one has to embrace. But it can sometimes strike fear, for it means that we must abandon the truths that we have known prior to this event. The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.\\nBe positive, it is time for you to replace the old foundations of the past with something that is more genuine and will serve you better in what is to come. In terms of work, there is an inevitable argument bound to happen. You need to be in control and keep your temper in check. Avoid saying something that may hurt other people. When it comes to your love life, your romantic relationship may be nearing its end. Take this as a warning - if you really value your relationship, then it is time for you to take damage control or open a communication to clear misunderstandings. In your finances, the tower meaning refers to the need to be assured on your transactions.","meaning_rev":"When you get the Tower card reversed, you can feel some crisis looming along the horizon, and you are struggling as much as you can to try and avoid its manifestation. What you have not realized is that these breakdowns can be beneficial in breaking down your reliance on something that is false. The tower is built on faulty foundations, and it must fall. Though the destruction will be painful, the humbleness resulting from it can bring us peace. What you relied on will no longer be there for you. Do not take this as a drastic and depressing change, it is time for you to become more self-reliant. ","desc":"Occult explanations attached to this card are meagre and mostly disconcerting. It is idle to indicate that it depicts min in all its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifies the materialization of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way the old truth that \\"except the Lord build the house, they labour in vain that build it.\\"\\nThere is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers. The one is the literal word made void and the other its false interpretation. In yet a deeper sense, it may signify also the end of a dispensation, but there is no possibility here for the consideration of this involved question."},{"type":"major","name_short":"ar17","name":"The Star","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-star-600x1024.png.webp","value":"17","value_int":17,"meaning_up":"The Star brings hope, renewed power, and strength to carry on with life. It shows how abundantly blessed you are by the universe as evidenced by the various things around you. It may not be directly evident at the moment, for this card follows the trauma of the Tower card. Remember that you hold within you all that you need for your fulfillment - the only thing that you need is courage. For this, you have all reasons to rejoice. To see this card is a message to have faith, for the universe will bless you and bring forth all that you need.\\nTo receive the Star in your reading means that you have gone and passed through a terrible life challenge. You have managed to go through this without losing your hope. While you suffered, you perhaps were not aware of your own strength, but you are now perhaps recognizing that the loss helped you discover your own resilience and inner power. It is only now that you can really appreciate all that you have.","meaning_rev":"When the Star card is reversed, it means that you are feeling as though everything has turned against you. The challenges that you would normally see as exciting seem instead to make you feel as though you cannot overcome them. You have lost faith in something, whether inside yourself or with something you normally find dear. \\n\\nWithout hope, without faith, we cannot find the motivation to progress forward in the challenges that we face. Where in your life are you feeling hopeless? In what ways do you already feel defeated? And how does that affect your actions? The star reversed asks us to nurture our sense of hope and positive energy to help propel our actions with joy instead of fear.","desc":"A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights. The figure expresses eternal youth and beauty. The star is l\'étoile flamboyante, which appears in Masonic symbolism, but has been confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has been said truly that the mottoes of this card are \\"Waters of Life freely\\" and \\"Gifts of the Spirit.\\"\\nThe summary of several tawdry explanations says that it is a card of hope. On other planes it has been certified as immortality and interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure that they can receive her influx."},{"type":"major","name_short":"ar18","name":"The Moon","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-moon-600x1024.png.webp","value":"18","value_int":18,"meaning_up":"On one hand, the Moon card can symbolize your imagination is taking the best of you. In the dark of the night, you are taking a path that you are unsure of, for there could be danger lurking in its depths. You are the crawfish embarking on the path in the card. The moon\'s light can bring you clarity and understanding and you should allow your intuition to guide you through this darkness. You need to be aware of the situations that are causing fear and anxiety in your mind, whether it is now or in the future. It alerts you not to allow inner disturbances and self-deception to take the best of you. These deep memories and fears must be let go, and the negative energies must be released and turned into something constructive. Another reading of the Moon card is the existence of illusion. Some hidden truth must be discovered, for what you are seeing now may just be a trick of the light. You must search for the hidden forces that must be unraveled.","meaning_rev":"A Moon reversal in a reading can sometimes indicate that the darker and more negative aspects of the moon are present in your life. It could represent confusion and unhappiness - you want to make progress, but you are not sure what is the right thing to do. You must deal with your anxiety and fears by overcoming them, for they are like shadows in the dark. It is time to believe in yourself and move forward. The moon reversal meaning indicates that you are in an intuitive period or you have recently battled confusion, anxiety, and self-deception. It could be that you are misinterpreting how you have been feeling however you are starting to improve on this. Another reversed moon meaning is that the forces of the night that are bringing you confusion are starting to dissipate. You have started managing your fears and anxiety. Whatever negative energies you have been facing are slowly fading away. It presents a liberating experience as you discover the positive side of things.\\n","desc":"The distinction between this card and some of the conventional types is that the moon is increasing on what is called the side of mercy, to the right of the observer. It has sixteen chief and sixteen secondary rays. The card represents life of the imagination apart from life of the spirit. The path between the towers is the issue into the unknown. The dog and wolf are the fears of the natural mind in the presence of that place of exit, when there is only reflected light to guide it.\\nThe last reference is a key to another form of symbolism. The intellectual light is a reflection and beyond it is the unknown mystery which it cannot shew forth. It illuminates our animal nature, types of which are represented below--the dog, the wolf and that which comes up out of the deeps, the nameless and hideous tendency which is lower than the savage beast. It strives to attain manifestation, symbolized by crawling from the abyss of water to the land, but as a rule it sinks back whence it came. The face of the mind directs a calm gaze upon the unrest below; the dew of thought falls; the message is: Peace, be still; and it may be that there shall come a calm upon the animal nature, while the abyss beneath shall cease from giving up a form."},{"type":"major","name_short":"ar19","name":"The Sun","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-sun-600x1024.png.webp","value":"19","value_int":19,"meaning_up":"The Sun card represents success, abundance, and radiance. Like the sun itself, it gives strength and vitality to all those that are lucky enough to feel its rays. There is much joy and happiness that is coming to you.Because of your own personal fulfillment, you provide others with inspiration and joy as well. People are drawn to you because they are capable of seeing the warm and beautiful energy which you bring into their lives. You are also in a position in which you are capable of sharing your qualities as well as achievements with other people. You radiate love and affection towards those you care about the most.The card shows that you have a significant sense of deserved confidence right now. Life is currently particularly good, and the sun is shining your way as you reach the goals that you set. The Sun is one of the cards in the tarot which provide nothing but good feelings and fulfillment. ","meaning_rev":"In the reversed position, the Sun indicates that you might have significant difficulties finding positive aspects to certain situations. The clouds might be blocking out the warmth and light that you need to progress. This might be preventing you from feeling confident and powerful. You may experience certain setbacks which are damaging your optimism and enthusiasm. On the other hand, the Sun reversed might be indicative that you are being unrealistic. It might be a sign that you have an overly optimistic perception of certain situations. These are things that you need to take into account in order to ensure that you are on the right track and your successes continue as they do.","desc":"The naked child mounted on a white horse and displaying a red standard has been mentioned already as the better symbolism connected with this card. It is the destiny of the Supernatural East and the great and holy light which goes before the endless procession of humanity, coming out from the walled garden of the sensitive life and passing on the journey home. The card signifies, therefore, the transit from the manifest light of this world, represented by the glorious sun of earth, to the light of the world to come, which goes before aspiration and is typified by the heart of a child.\\nBut the last allusion is again the key to a different form or aspect of the symbolism. The sun is that of consciousness in the spirit - the direct as the antithesis of the reflected light. The characteristic type of humanity has become a little child therein--a child in the sense of simplicity and innocence in the sense of wisdom. In that simplicity, he bears the seal of Nature and of Art; in that innocence, he signifies the restored world. When the self-knowing spirit has dawned in the consciousness above the natural mind, that mind in its renewal leads forth the animal nature in a state of perfect conformity."},{"type":"major","name_short":"ar20","name":"The Last Judgment","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-judgement-600x1024.png.webp","value":"20","value_int":20,"meaning_up":"The traditional Judgement meaning focuses on the moment when we reflect and evaluate ourselves and our actions. It is through self-reflection that we can have a clearer and objective understanding about where we are now, and what we need to do in order to grow as humans. The Judgement card appearing in a reading signifies that you are coming close to this significant point in your life where you must start to evaluate yourself. To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection. You now have a clearer idea of what you need to change and how you need to be true yourself and your needs. This can mean making small changes to your daily life or making huge changes that not only affect you but the people close to you.The Judgement card reminds us that we all will be faced with choices that will have an astounding effect for your entire life. The card brings to mind moments where actions you have taken have changed the course of your path for good. There may have been a moment where there is no looking back. The consequences of those actions eventually will catch up to you, and this card seems to indicate that this is the time. You may have to let go of the past, so you can move forward with your plans to have a new life. ","meaning_rev":"The reversed Judgement card can mean that you doubt and judge yourself too harshly. This could be causing you to miss opportunities that were awaiting you. The lost momentum causes you to fall behind in your plans, which can make it difficult to move forward. This means that you should not be cautious, but you should be moving forward with pride and confidence. Another reading of the Judgement reversal card can be a push to take time out of your busy routine to reflect upon your life to this point, and what you have learned so far. You are most likely not giving yourself the time or space to fully think about the matter and learn the lessons you need to to be able to progress with awareness. You could also be too critical of your past actions, so you are not giving yourself the forgiveness to move forward. The mistakes that we have made in the past are learning tools, so they help us move though life. Focusing too hard on these mistakes can cause us to trip and fall.","desc":"I have said that this symbol is essentially invariable in all Tarot sets, or at least the variations do not alter its character. The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. It should be noted that all the figures are as one in the wonder, adoration and ecstacy expressed by their attitudes. It is the card which registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within.\\nHerein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue to depict, for those who can see no further, the Last judgment and the resurrection in the natural body; but let those who have inward eyes look and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be compared with that which passes under the name of Temperance."},{"type":"major","name_short":"ar21","name":"The World","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/03/modern-way-tarot-card-the-world-600x1024.png.webp","value":"21","value_int":21,"meaning_up":"To encounter the World in your cards is to encounter a great unity and wholeness. It symbolizes the moment when the inner and the outer worlds - self and other - become a single entity. In some traditions, this state is described as enlightenment, or nirvana. There is a recognition that the individual self is profoundly linked with all other things, and that we all dance and sway along the flow of life to one rhythm. Not only do you hear this rhythm, but you participate in it - following the dips and the rises, the joys and the sorrows.The meaning of the World card is fulfillment, achievement, and completion. This shows that all the efforts that you have been putting in place are starting to pay off. It reflects that you have completed a major milestone in your life and you have built the resilience to withstand challenges. The World may indicate completion of a long-term project, study or any other major event in your life. It may also mean the birth of a child, marriage, graduation or any other thing that you have accomplished. The World card shows that you have a desire to give back to the community in various ways. You have a commitment to make the world a better place because you understand that everything is connected.  ","meaning_rev":"You are drawing near to something that marks the end of a journey or an era. You may have many accomplishments that have lined your path, but there is a strange emptiness that fills you when you look backwards upon it, as if you have all the pieces but they are not coming together. What is missing? Do you feel connected to what you\'re doing? Do you feel connected to others? What alienates you from feeling complete? From feeling whole?","desc":"As this final message of the Major Trumps is unchanged--and indeed unchangeable--in respect of its design, it has been partly described already regarding its deeper sense. It represents also the perfection and end of the Cosmos, the secret which is within it, the rapture of the universe when it understands itself in God. It is further the state of the soul in the consciousness of Divine Vision, reflected from the self-knowing spirit. But these meanings are without prejudice to that which I have said concerning it on the material side.\\nIt has more than one message on the macrocosmic side and is, for example, the state of the restored world when the law of manifestation shall have been carried to the highest degree of natural perfection. But it is perhaps more especially a story of the past, referring to that day when all was declared to be good, when the morning stars sang together and all the Sons of God shouted for joy. One of the worst explanations concerning it is that the figure symbolizes the Magus when he has reached the highest degree of initiation; another account says that it represents the absolute, which is ridiculous. The figure has been said to stand for Truth, which is, however, more properly allocated to the seventeenth card. Lastly, it has been called the Crown of the Magi."},{"name":"Page of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-page-of-wands-card-600x1024.jpg.webp","name_short":"wapa","value":"page","value_int":11,"suit":"wands","type":"minor","meaning_up":"When we see the Page of Wands, we see a youth with enormous excitement and curiosity for the world. He knows what to do, he has the passion to succeed, but due to his inexperience and maybe a little fear of the unknown, his ideas remain abstract. He identifies new worlds to explore, new opportunities he could take advantage of quite easily, and he is even gifted with the \\"big picture\\" vision needed to succeed. Even with all of this, he still has the tendency to either remain dormant, or get easily distracted with one idea after the other. If he doesn\'t learn to control this, it might be that he squanders the opportunities to advance himself.","meaning_rev":"With the Page of Wands reversed, it tends to emphasize the more negative character traits of the upright version. He tends to show up when your mind is filled with one great idea after another, and are unable to progress beyond the beginning planning stages. Perhaps you have started a project or a hobby expecting that it would grow to great levels and instead you end up nowhere. As painful as it is, it is a good way of telling you that you should venture into other meaningful projects and avoid wasting time.","desc":"In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange."},{"name":"Knight of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-knight-of-wands-600x1024.jpg.webp","name_short":"wakn","value":"knight","value_int":12,"suit":"wands","type":"minor","meaning_up":"The Knight of Wands\' symbolism is straightforward. When it appears, it means a great time to get away and travel. The person should feel charged up and full of life. One is also ready to get things done. He is adventurous and can find fun things to do no matter where he is. There is never a dull moment when the Knight of Wands is around. When the Knight of Wands shows up in a reading it seems to suggest that the seeker wants to complete important tasks. One wants to impress others with one’s knowledge and skill. The card also shows up when the person is planning to move to another place of residence.\\n\\nIf you are starting a creative project, then you should do so with lots of energy and enthusiasm. However, you should balance it with realistic and well-rounded views. You should also have a plan that takes into account the consequences of your actions.\\n\\nGetting the Knight of Wands in a reading can also mean that there is an event that you don’t expect to happen soon. If it is accompanied by the Eight of Wands, then you should expect a lot of changes in your life. More often than not, the Knight of Wands indicates a hasty change of job, residence, or anything in your life.","meaning_rev":"When you get a reversed Knight of Wands, it indicates frustrations and delays. You may feel angry and that you are not getting anywhere. A reversed Knight of Wands can translate to a loss of power. You may be trying to compensate for something that you don’t have total control over - this might lead to pessimism and loss of self-esteem.","desc":"He is shewn as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. The motion of the horse is a key to the character of its rider, and suggests the precipitate mood, or things connected therewith."},{"name":"Queen of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-queen-of-wands-600x1024.jpg.webp","name_short":"waqu","value":"queen","value_int":13,"suit":"wands","type":"minor","meaning_up":"In general, the Queen of wands in a reading meaning may depict a person of extreme focus and fiery passion. She is courageous and individualistic, though at times she may appear self-centered. They have a positive and an uplifting energy; they represent someone who is willing to be by your side and stand up for you.In terms of work, the Queen of wands signifies that you are planning to accomplish a significant amount of achievement in just a small amount of time. In the event that you are looking for a job, the appearance of this card may mean that a woman will play a major role in your career move. Generally speaking, in terms of your career, things are looking pretty good. The Queen of Wands in questions of love also sends a positive energy. For people who are searching for love, there is a possibility that you will find it soon.\\n\\nWhen it comes to your finances, there is a chance that you are being carried away on spending a significant amount of money. We advise you to keep your expenses on check, or you will regret it in the end. In terms of health and spirituality, the Queen of Wands meaning may pertain to a spiritual hunger, a quest, or a search for meaning. ","meaning_rev":"Regardless of its position (upright or reversed) the Queen of Wands symbolizes fertility, and all the feelings, emotions, and aspects that it brings. It may mean that there is someone who needs your help right now. In terms of work, there is a probability that you will encounter obstacles that will hamper your progress. Do not mind these obstacles and continue doing your job as you see fit. To see this card may also be a reminder to adhere to your rational side - to balance your sometimes chaotic energy with clear though, and you will be more successful.","desc":"The Wands throughout this suit are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen\'s personality corresponds to that of the King, but is more magnetic."},{"name":"King of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/king-of-wands-modern-way-tarot-600x1024.jpg.webp","name_short":"waki","value":"king","value_int":14,"suit":"wands","type":"minor","meaning_up":"The meaning of the upright position of the King of Wands represents pure energy. Unlike the other wands cards in the deck however, this particular one is not focused on pure creativity. Instead, this king is actually way more likely to take an idea and to decisively implement it himself. The King of Wands is a natural born leader of people, and he is also extremely capable. Once the king sets for himself a certain aim or a goal, he is going to conveniently stick to it in order to ensure that it becomes a reality.","meaning_rev":"The negative aspect of the card is associated, as you may guess, with a feeling of arrogance. He can even be rather aggressive in the actual pursuit of his goals, regardless of whether he’s actually conscious or not of it. He wouldn’t show restraint, nor even the humbleness to know when his assistance isn’t actually required. When reversed, the card depicts a personality which is prone to taking rash, impulsive and hasty decisions. This person could be pushy, overbearing as well as dominating at times. Even though he might rarely do this with a sense of malice or with an intention to make someone feel submissive, this is without a doubt a part of his character that one can be frustrated at. In reversal, the card represents the worst spectrum of the qualities of the fire – selfishness and ruthlessness. He can be manipulative as long as you are serving his purpose. With this in mind, the card definitely points out strong and weak aspects, and reflecting on his image can help you dig deeper in your personality. ","desc":"The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne."},{"name":"Ace of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-ace-of-wands-card-600x1024.jpg.webp","name_short":"waac","value":"ace","value_int":1,"suit":"wands","type":"minor","meaning_up":"Wands symbolize creativity, and the Ace of Wands is the boldest among the cards in the suit. It is not the kind of creativity that you learn from school or as a hobby. It is bravely finding your own voice, it creates a place where you can develop your own vision. In other words, it is associated with willpower, and creativity in the cosmic sense. When you draw the Ace of Wands, it is an indicator that you should just go for it. Take the chance and pursue an idea that you have in mind. Take the first steps to start the creative project. The Ace of Wands calls out to you to follow your instincts. If you think that the project that you\'ve been dreaming of is a good idea, and then just go ahead and do it. ","meaning_rev":"The reversed Ace of Wands indicates trials and tribulations that you will face in the near future. You might not have any direction, which leads to being uninspired or unmotivated. At this point of your life, you might not know what you really want to do. You don’t know how to get out of the slump. In the case that you already have a goal, you are not excited to achieve it. When you draw a reversed Ace of Wands, you should consider taking some time off to allow inspiration to come to you. You feel weighed down by your current commitments and responsibilities that you can’t come up with new ideas, or muster the passion to push forward in your projects. The Ace of Wands reversal meaning can also indicate delays with your current projects. You want to finish your tasks, but there are things that get in your way. Or you have an idea but don’t know how to execute it and make it a reality. When this is the case, you should be patient and wait for the right time.","desc":"A hand issuing from a cloud grasps a stout wand or club."},{"name":"Two of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-two-of-wands-600x1024.jpg.webp","name_short":"wa02","value":"two","value_int":2,"suit":"wands","type":"minor","meaning_up":"The Two of Wands is a more mature version of the ace of wands, meaning that that this tarot card is all about planning and moving forward – progression. Look at it this way; you have already set out to achieve a particular task, which means you have turned an idea into a realistic plan. Such a plan will require fulfillment and therefore you have to progress from just having the plan to actually achieving what you set out for. Discovery is being considered as another two of wands meaning. This is because it means that you are stepping out of your cocoon and exploring new experiences and worlds. While the beginning might seem tough and difficult, the Two of Wands card encourages you to strive on and push forward.","meaning_rev":"The Two of Wands reversed meaning suggests the need to set up long-term goals. Begin the process of setting up your goals by identifying what to you is important. Proceed by planning how you intend on achieving such goals. Another Two of Wands reversal meaning suggests that you have ignored important fine points associated with planning your future. Lack of proper planning could be the reason for your downfall. Other interpretations can include either overconfidence or lack of patience, both are possible in bringing you disarray in your path forward.","desc":"A tall man looks from a battlemented roof over sea and shore; he holds a globe in his right hand, while a staff in his left rests on the battlement; another is fixed in a ring. The Rose and Cross and Lily should be noticed on the left side."},{"name":"Three of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-three-of-wands-card-600x1024.jpg.webp","name_short":"wa03","value":"three","value_int":3,"suit":"wands","type":"minor","meaning_up":"The meaning of the Three of Wands hints that you are planning or going to plan for the future with more conviction. This could mean that everything around your plans is going smoothly, as you have taken the time to plan your future, and are taking steps to turn plans into action. It hints that you are perhaps creating a stable foundation for yourself. The symbolism within the Three of Wands is that opportunities that can take place to widen your horizons in many areas. It also is a warning to keep your mind open as better opportunities could open up to you. As you take steps towards achieving what you set out to do, you are also becoming more aware of opportunities that are coming your way, and this could be take you out of your comfort zone. This pushes you to sometimes embrace change, and to start thinking in the long-term.","meaning_rev":"The reversed Three of Wands indicates that you may have been embarking on personal journeys or developments, but you have not received the achievements that you were hoping for. This could be due to delays or road blocks. Despite all this, the card reminds you that all of your work has not been for nothing, but rather that it has helped you with your personal strength and fortitude.\\n The Three of Wands reversed can also mean you need to take some time to plan your future. This is especially true if you have not started on your long term goals or have become overwhelmed by the tasks that you face now, or will have to face soon. You are only reacting and not acting with thought and deliberation. However, the most common Three of Wands reversed meaning is a nudge to include planning for future changes, and to watch for better options in case that they show up. The figure on the Three of Wands knows this and always keeps his eyes open for how the future could change, and it is a worthy lesson to learn.","desc":"A calm, stately personage, with his back turned, looking from a cliff\'s edge at ships passing over the sea. Three staves are planted in the ground, and he leans slightly on one of them."},{"name":"Four of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/four-of-wands-modern-way-tarot-card-600x1024.jpg.webp","name_short":"wa04","value":"four","value_int":4,"suit":"wands","type":"minor","meaning_up":"The overall meaning of the Four of Wands is that it heralds celebration as well as a harmonious, happy and relaxed home environment. In terms of numerology, the number four symbolizes stability as well as particularly reliable foundations. These are associated with a period of happiness and balance.\\n The symbolism within the Four of Wands poses that this is the perfect time for you to get together with close people such as friends and family. This could be with or without any special occasion. Oftentimes the card is known to reflect a period of holidays when you are together with your friends and family for an extended period of time. It might also be suggesting for you to invite your closest friends for a great and intimate dinner and share a laugh or two.","meaning_rev":"If the upright position of the card reflects balance, stability, and harmony, the reversal position of Four of Wands implies that there is a breakdown or complete lack of harmony in your family or in your home. It’s highly likely that there is a lot of tension between the members of your family or other loved ones. If you have completed something that is important to you, you are expecting to share it with those that are closest to you, and to come home to a welcome celebration, but instead, you find a lack of support. This may leave you feeling rather uncertain when it comes to your own relationships as well as the things that you can and cannot depend on.","desc":"From the four great staves planted in the foreground there is a great garland suspended; two female figures uplift nosegays; at their side is a bridge over a moat, leading to an old manorial house."},{"name":"Five of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-five-of-wands-600x1024.jpg.webp","name_short":"wa05","value":"five","value_int":5,"suit":"wands","type":"minor","meaning_up":"From the image on the card, the symbolism in the Five of Wands suggests that there is form of conflict in one’s life. This may be an existing conflict or one that is brewing and may eventually blow up in one\'s face. It may also depict a problem in communication, for example in a situation where no one really wants to listen to the other - meaning that no agreement or understanding takes place. The five men may signify problems in a group of people who are not patient enough to listen to what anyone else is saying. They only want to be heard, and since none of the others will listen, they all argue at once.\\n Much of this can be solved by the querent taking the first step to try and initiate communication in such a way that you suggest that everyone airs out what they have to say, one at a time. By doing this, you will be able to address the problem, and everyone will be heard. Meaning they’ll all be satisfied.\\nThe Five of Wands can also mean that you are or will be facing competition in an area that you are not used to. This can be at work or school where you will meet people with the same abilities as you who pose quite a challenge - leading to feelings of jealousy, greed, and envy. This tarot card encourages that you accept the competition as a way for you to improve yourself without feeling any malice towards them. This means that you should learn how to cope with them in a civil way.","meaning_rev":"The Five of Wands reversed meaning can be that your natural method of dealing with disagreements is avoiding any kind of conflict by getting away from that place as fast as you can. Sometimes this can be regarded as a good thing, but other times, it may lead to a number of issues that are brewing up within you, for which you will have to address soon. On the other hand, it can also mean that you have worked through your troubles and that you do not have any more issues to worry about.","desc":"A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare, and hereto correspond the"},{"name":"Six of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-six-of-wands-600x1024.jpg.webp","name_short":"wa06","value":"six","value_int":6,"suit":"wands","type":"minor","meaning_up":"This particular card is all about public recognition, victory, and success. Not only have you managed to properly succeed in achieving all of your goals, but you are also being publicly acknowledged for them and the results that you’ve managed to attain. You may have received an award or some sort of public acclaim.\\nThe card is indicative that you have managed to harness the strengths and talents that you have within you in an attempt to bring a particularly successful outcome in your life. You have managed to properly get through the confusion which is brought by the card before this one – the Five of Wands, and managed to properly minimize distractions, thus successfully focusing on your goals and achieving them.","meaning_rev":"When the card is reversed, this suggests that you might find yourself doubting all of your abilities as well as your overall potential to achieve any kind of success. You might be feeling particularly negative about your entire self as if you have failed others as well as yourself. This is a symbol that means that you lack the confidence and drive that you need to achieve. You need the overall support as well as recognition of third parties in order to pick you up, to emotionally provide you with some much-needed strength.","desc":"A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side."},{"name":"Seven of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/seven-of-wands-card-modern-way-tarot-600x1024.jpg.webp","name_short":"wa07","value":"seven","value_int":7,"suit":"wands","type":"minor","meaning_up":"The Seven of Wands has a similar in meaning to the Five of Wands; both cards indicate struggles after the initial fulfillment and satisfaction of an event. The Seven of Wands however is different as it is is about the struggle that you need to go through to maintain your position, rather than to attain it. This is about the difficulties we face to continue to have success. You should be ready for the competition to you defend your title, and to prove yourself. Others are going to desire the same results that you do, so you need to stay ahead of the them.\\n There will be challenges to the success of your project or venture from an outside source. You must remain dedicated to your desires, and with a clear purpose and effort, you will overcome them.","meaning_rev":"The Seven of Wands reversal meaning is that you could be feeling overwhelmed by all the responsibilities and challenges that you are facing. This can make it difficult to see the whole picture. You can also feel that you have to compete and compare yourself to other people, which leaves you feeling vulnerable and inadequate.\\nThe Seven of Wands reversal meaning can also reflect your feelings of being criticized and judged constantly by others. Your friends and family could be questioning you about your decisions and choices, and you feel overwhelmed by their judgement. \\nAvoiding conflict and backing down is common with the reversed Seven of Wands. This can lead to unhappiness because you run away from activities and relinquish your goals, when you are challenged by anyone. Remember all that you fought for to be here, and think carefully on whether you truly believe that is worth giving up now. Another reading of the Seven of Wands reversed can also be that you are being too aggressive when you are protecting yourself and damaging your relationships by doing so.","desc":"A young man on a craggy eminence brandishing a staff; six other staves are raised towards him from below."},{"name":"Eight of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-eight-of-wands-600x1024.jpg.webp","name_short":"wa08","value":"eight","value_int":8,"suit":"wands","type":"minor","meaning_up":"The image depicted by the Eight of Wands means that the difficulties that were brought by the Seven of Wands are finally over. It signifies a strong level of energy which states that different aspects of your life will be trailblazing. Perhaps important news will be coming on your way, and you may experience a sudden, yet steady positive growth. The Eight of Wands meaning may also pertain to your work. There is a chance that the decision that you are waiting for will come your way soon. You need to be patient and just wait for it.","meaning_rev":"Just like the upward Eight of Wands, the Eight of Wands reversed meaning is generally associated with patience. There is a possibility that you are feeling frustrated about something. You might now see that what you set in motion earlier created the obstacles that you are discovering right now. It is time for you to understand that you cannot change the past. You must forgive yourself, and adapt your strategy.\\nIn terms of work, there may be an existing disagreement in your office. You need to settle this quickly in order to avoid derailing any major issue. Breathe, think and try to relax. Be patient and believe that everything will be just fine. The Eight of Wands reversal meaning on love may pertain to possible jealousy. The jealousy that you are feeling right now has no basis and will just affect your good relationship with your partner. In the aspect of Health and Spirituality, you need to improve your focus, cooperation, and determination. The energy of the card will just dissipate if you are losing your focus.","desc":"The card represents motion through the immovable-a flight of wands through an open country; but they draw to the term of their course. That which they signify is at hand; it may be even on the threshold."},{"name":"Nine of Wands","pic":"https://www.alittlesparkofjoy.com/wp-content/uploads/2021/05/nine-of-wands-modern-way-tarot-deck-594x1024.webp","name_short":"wa09","value":"nine","value_int":9,"suit":"wands","type":"minor","meaning_up":"The Nine of Wands tarot card is one that symbolizes great hope even when one is faced by many problems that threaten to make them lose their balance. The Nine of Wands symbolizes one\'s life, which has undergone too many trials but through their determination and will, they were able to overcome them. These won battles are symbolized by the eight upright wands; however, there are still more trials that the person may face. This can be one major trial or challenge that they are supposed to face for them to reach their goals or be successful in their quest. The card is a sign of hope and encouragement that you should face your trials with courage so that you may attain success.","meaning_rev":"The Nine of Wands reversed shows a person who may not be a risk taker; they may not want to make a long-term move or commitment since they are afraid that they may not be able to come out of it. They are mistrustful and hence have created a boundary between themselves and others which is turning to be their own personal prison. You may be afraid that you do not have enough resources to face some upcoming challenges, which is why you may be open to running away or avoiding it.\\n However, this is a situation that needs to change since this could be your self-created restriction to prevent you from attaining the new heights you need to grow. It encourages you to be brave, but also be careful not to make careless or hasty decisions that may cost you in future.\\n The Nine of Wands may be an indication of a great personal fear or mentality that could affect you. Hence, it is important that you do something to deal with it before fear consumes you and prevents you from moving onward.","desc":"The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves--erect, in orderly disposition, like a palisade."},{"name":"Ten of Wands","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/ten-of-wands-modern-way-tarot-600x1024.jpg.webp","name_short":"wa10","value":"ten","value_int":10,"suit":"wands","type":"minor","meaning_up":"This card shows that you have already completed the circle of struggle. After spending too many resources and lots of energy looking for success, you have finally overcome the obstacles. The sweat off your brow was worth it - your efforts have finally been rewarded. You may find yourself living in a world of abundance where poverty and suffering have no chance to intervene.\\n Although it sounds marvelous and satisfying, the card depicts a lot of responsibilities on your side. You are now the sole problem solver in your circle of family and friends which could even propel you into another world of challenges. At this point, you are also flooded with responsibilities to maintain your success. The businesses that you have started are flourishing and keeping you on your toes. The main problem is that these issues could overwhelm you if you lose control, which requires you to make sure that you know how to prioritize and solve the relevant ones.","meaning_rev":"When the Ten of Wands card is reversed, it indicates that you are truly burdened by circumstances which are not necessary in your life. Look around and see what is bothering you that will not positively impact yourself even if you rectify it. Drop them all and be a free being that can think soberly and do things accurately. Anything that does not add value in your life is not worth your time, so let it go.","desc":"A man oppressed by the weight of the ten staves which he is carrying."},{"name":"Page of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-page-of-cups-card-600x1024.jpg.webp","name_short":"cupa","value":"page","value_int":11,"suit":"cups","type":"minor","meaning_up":"One of the most important meanings within the Page of Cups is that you should be open to new ideas, especially ones that stem from intuitive inspiration. The card seems to state that such inspiration should be embraced, despite it being something that you may not expect. It could lead you to adventure and open many doors. If it is a calling of a creative nature, for example, one to get into music or art, there\'s an especially strong push from this card to go for it.\\n When you are being faced by difficult situations, and you have stopped chasing your dreams, the Page of Cups seems to say that you that you should tackle the issue from a totally different perspective. It symbolizes persistence as this is the only way that you can make your dreams come true. Listen to your intuition, follow your calling, and believe everything is possible.","meaning_rev":"One Page of Cups reversal meaning is that you are undergoing a block in your creativity. There are things or projects that you find interesting, but you seem to do them for other reasons than for the joy of it. You may be doing them for money, for fame, or something else. A reversed Page of Cups could indicate that you should remember the joy that your projects brought you in the first place to reclaim your imaginative spirit.\\n Another Page of Cups reversal meaning is that it can symbolize a troubled person. One who is afraid of reality whether it’s emotional, financial, illness or something else. They find these issues difficult to face, perhaps leading to abuse of alcohol or drugs to escape. It could be an image of you or a loved one who is struggling with self-acceptance.","desc":"A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form."},{"name":"Knight of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-knight-of-cups-600x1024.jpg.webp","name_short":"cukn","value":"knight","value_int":12,"suit":"cups","type":"minor","meaning_up":"The truth is that the Knight of Cups is the most feminine amongst all the Knight cards in the tarot. It\'s important to note though, that this doesn’t even slightly suggest that he is any less of a worthy knight. It implies that he is in proper touch with his emotions and his intuition, and that he uses them for his own well-being and during his many romance and seduction quests. He is usually quite attractive and charming to others, regardless of their gender.\\n When faced with an actual decision, the Knight of Cups is going to listen to his heart, regardless of whether this is actually a logical choice or not. He can also manifest as an event or a person in your life, or a part of your own self. He appears as a messenger – and with him, he carries an invitation or an arrival of something or someone which is going to have a certain emotional benefit for you. As a knight, he is also charged with taking the gifts of his suit, and bringing it outward into the world. He therefore can also represent the undertaking of some project with significant emotional or creative value for you.","meaning_rev":"Now that you are aware of the upright Knight of Cups meaning let’s take a look at what the card says when it is upside down. Reversed, the Knight of Cups means that you allow your emotions to control your life a lot more than you should. You might be overly jealous, emotional or moody. In fact, this could get up to the point of actual incapacity to take action, which is most definitely to be avoided. Jumping to conclusions too fast is characteristic of a reversed Knight of Cups, and making judgements without having the necessary information is very common.\\n The card indicates a situation which could be considered appealing at first but quickly turns out to be something very different. With such high expectations, everyone will walk away quite disappointed.","desc":"Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision."},{"name":"Queen of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-queen-of-cups-600x1024.jpg.webp","name_short":"cuqu","value":"queen","value_int":13,"suit":"cups","type":"minor","meaning_up":"We can understand the meaning of the Queen of Cups from taking a closer look at the woman in image. She is seen as compassionate, caring, sensitive, and nurturing. She connects with people on the emotional level, so people enjoy her honesty and fairness. The appearance of the Queen of Cups in a reading can be guiding you to find help from others. Most times, like the other queens, this is a female figure that will come into your life.\\n The Queen of Cups has an intuition which is very powerful, and is only rivaled by the one of the High Priestess. The Queen of Cups acts as a mirror and reflects the depths present in others, so they see themselves in a new light. Most times, the Queen of Cups can also represent the trusted inner voice you have within you. She seems to say that you should take the time to focus on your emotional health before trying to help others. Self-love creates compassion.","meaning_rev":"The Queen of Cups reversed means that you are not in sync with your emotions. You can also feel restricted in the expressing the way that you truly feel. Most times, bottling up your emotions can be very damaging and will lead to a boiling point in the near future. You may have high levels of stress that you are not able to cope with anymore.\\n The Queen of Cups reversed can also reflect that your mind is wandering too far, and you are letting your imagination run away with itself. While you still mean well, you should take a pause to really see whether your emotions can be trusted, because you are allowing them to control you. You need to take some time to think if these dreams can be turned into reality. You should try to be more emotionally stable during these times, so you will know when your emotions are getting the best of you.","desc":"Beautiful, fair, dreamy--as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream."},{"name":"King of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-king-of-cups-600x1024.jpg.webp","name_short":"cuki","value":"king","value_int":14,"suit":"cups","type":"minor","meaning_up":"The King of Cups is one of the most influential cards in the suit of Cups. He represents creativity, emotion, and the unconscious. The card shows the ability to restrain one\'s emotions and be fully in charge of your feelings and impulses. Therefore, the King of Cups represents a balance between the intellect and emotions. He indicates that there is a strong relationship between understanding and feeling. When you have balanced your emotions and are able to control them, it means that you have a deeper knowledge and awareness of yourself.\\n When you are faced with challenges that would normally throw you off balance, the King of Cups is there to remind you that you should act as he does - do not fly out in a rage, or immediately throw yourself into despair! You first need to temper the state of your emotions, so that you can progress forward in reality. Learn to evaluate yourself so as to determine how you can create a stronger awareness of your own internal state. ","meaning_rev":"The King of Cups reversed signals what happens when he is at his worst: volatility, emotional manipulation and moodiness.\\n When the King of Cups falters, his usual ability to handle situations with compassion and wisdom are turned upside down. He is unable to balance the needs of all that seek his guidance, and while appearing kind to some, may be cold to others. His talent in navigating the emotions of others may be put to dubious uses, manipulating circumstances to fit his needs.\\n The reversed King of Cups suggests that there is a character in your life that is depicted by this card, whether a part of you or someone else. While he is normally very in touch and controlled with his emotions, he has lately become manipulative and emotionally controlling. His actions will be used for vengeance and vindication, impulses that he normally has under control, and is eventually aimed at being some form of punishment.","desc":"He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards."},{"name":"Ace of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-ace-of-cups-card-600x1024.jpg.webp","name_short":"cuac","value":"ace","value_int":1,"suit":"cups","type":"minor","meaning_up":"Getting the Ace of Cups upright shows that it\'s time to let loose of whatever emotional baggage you have and start living your life to the fullest. Like with all the other aces, there is a new beginning that is indicated here - a chance to start fresh. It might come in the form of opening yourself up to the possibilities of new relationships, romantic or otherwise, that have the ability to make you emotionally fulfilled.\\n The release indicated by this card may either be spiritual or emotional, depending on what you are going through. The Ace of Cups may come to a reading after a long period of being lonely or enduring something that deeply hurt you emotionally, and it\'s appearance may be there to herald the turning over a new leaf.","meaning_rev":"When the Ace of Cups is overturned, the image here is clearest - the waters pour out of the cup, it becomes empty, the gift of its waters are being wasted. Seeing the Ace of Cups upside down during your reading means you have been enduring emotional instability or pain for some time. There is a loss that is indicated here, and perhaps something that has meant much to you is no longer giving you the joy that it once had. \\nSince the cups also govern creativity, you may also be experiencing a creative block of sorts, and where the waters of inspiration once flowed, they have now dried up. ","desc":"The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana."},{"name":"Two of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-two-of-cups-600x1024.jpg.webp","name_short":"cu02","value":"two","value_int":2,"suit":"cups","type":"minor","meaning_up":"When it comes to work, you may notice that the people around you will start to appreciate you more. There is a mutual respect here, meaning you will also be more comfortable in your workplace. If you are looking for new job opportunities, this card may be a good sign. In terms of love, the card represents commitment, a balanced relationship, and love. But this does not simply mean that you will no longer need to nurture your love to make it last. The card only signifies that true love and affection is present.","meaning_rev":"When reversed, the Two of Cups can mean that the balance that was once there is broken. This balance was an integral part of keeping the individuals together, but to break it is to create disconnection and discord. The negative energy of two forces is present, and instead of them joining or attracting, they seem to repel each other.\\n You may be finding that certain small details that were not problems before are coming into play, signaling that one party may have resentments. A line of communication that allowed you and the other party to openly talk about disagreements has been cut off, only worsening the cycle of resentment and imbalance.","desc":"A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion\'s head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place."},{"name":"Three of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-three-of-cups-card-600x1024.jpg.webp","name_short":"cu03","value":"three","value_int":3,"suit":"cups","type":"minor","meaning_up":"The meaning behind the Three of Cups represents a period of happiness. You will be able to forget the worries of your daily life and spend quality time with family and friends.\\n To see the Three of Cups can indicate a happy reunion with a long lost friend, relative, or loved one. It can also mean a celebration, whether it is your own or for someone who you love. The event can be a birthday, wedding, or any other happy occasion. In general, it is about spending quality time with people you cherish in your life.","meaning_rev":"When the Three of Cups is reversed, it means that you may have no time to socialize or go out with friends. You may be too busy with school or work that you can’t spare some time to have fun. The Three of Cups reversed can also mean losing touch with some of your friends. As time passes, you may find that you are growing apart from one another. When we grow older, we must put in effort to make sure that our friendships are not neglected.\\n Alternatively, the Three of Cups reversed can mean that there is a lack of balance and harmony within your social circle. Gossip and scandal can rear their ugly heads. Perhaps there is envy hidden within this circle, and as a result, you are feeling isolated","desc":"Maidens in a garden-ground with cups uplifted, as if pledging one another."},{"name":"Four of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-four-of-cups-card-600x1024.jpg.webp","name_short":"cu04","value":"four","value_int":4,"suit":"cups","type":"minor","meaning_up":"The Four of Cups tend to appear when you are feeling discouraged and unmotivated. You may feel as if there is no solution or way forward in your situation. Life has become stagnant, and nothing seems to make you happy or passionate. You are feeling apathetic - regardless of what happens, whether the day is good or bad, none of it matters to you. The Four of Cups commands a self-evaluation of your attitude so that you can pull yourself out of this rut. The solution is likely right in front of you, the hand is offering you a way out, but you release yourself out of your mental stubbornness and deploy new approach.","meaning_rev":"While in the upright four of cups, you may be suffering from apathy and ignore the opportunities that the universe offers you, the reversed four of cups signals the desire to have a new start.\\nThe sudden awareness of the transient beauty of life may strike you now, while previously you may have been too deeply disconnected from yourself to see it. You are coming to the understanding that though life is not perfect, there is beauty in it, and joy comes from choosing to see this beauty.\\n Embrace new ideas, new people and new places; because you never know where these adventures can take you. Many may miss these chances because they are too confined in their own beliefs and ambitions.","desc":"A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment."},{"name":"Five of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-five-of-cups-card-600x1024.jpg.webp","name_short":"cu05","value":"five","value_int":5,"suit":"cups","type":"minor","meaning_up":"The Five of Cups symbolizes disappointment, and the feelings that come when things go differently as you expected. You are feeling unhappy that a certain situation hasn’t really turned out the way you have hoped it would. Instead of moving towards a more positive perspective, this card seems to say that you are dwelling in the past, inducing feelings of self-pity and regret. The water which is actually spilled from the cups shows that you might have missed an opportunity. It also shows that the problem is mostly emotional and not material or financial.","meaning_rev":"When the card is reversed, the Five of Cups shows a significant recovery from the regret as well as proper acceptance of your past. You are beginning to realize all of the implications of your actions, and you have finally come to appreciate the lessons which can be learned from that experience.\\n You may even start to recognize the overall value of the painful experience you had in the larger scheme of things. You are seeing that the suffering and grief that you endured gave you strength and imbued you with resilience. You are ready to pick up the two remaining cups which are still full and go on with your life in full force.","desc":"A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration. Reversed: News, alliances, affinity, consanguinity, ancestry, return, false projects"},{"name":"Six of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-six-of-cups-card-600x1024.jpg.webp","name_short":"cu06","value":"six","value_int":6,"suit":"cups","type":"minor","meaning_up":"The Six of Cups upright generally represents generosity, naïve happiness, and childhood. It can stand for you wanting to return to a happier time, whether it was when you were a child, teenager, or young adult. Many times, these memories are things of the past, which reflect the aspects of ourselves that have vanished. You may feel that remembering these times is the only way to feel happy. The Six of Cups appearing in a reading seems to indicate that while we may look upon the past with a happy eye, we must avoid living in it.","meaning_rev":"The Six of Cups reversed can mean that you are clinging to the past. You should explore your memories, but you should not allow yourself to remain there. While you may find it comforting to be in the security of home, you must also learn to forge your own path. The past should be used as a guide for the future. Learn to focus on the present, and truly be aware. \\n Another reading of the Six of Cups reversed is that you may feel as though you are disconnected from your childhood self, and that child\'s dreams, which may sometimes be unrealistic. Not reaching these goals can be painful, but sometimes reality carves a path for you that you must follow, and you shouldn\'t blame yourself for your choices. Take the time to think about where you want to be now and how you can reach your goals, instead of just dreaming about them.","desc":"Children in an old garden, their cups filled with flowers."},{"name":"Seven of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-seven-of-cups-1-600x1024.jpg.webp","name_short":"cu07","value":"seven","value_int":7,"suit":"cups","type":"minor","meaning_up":"To draw the Seven of Cups in a reading shows that you need to clearly see the shadows and visions in your imagination, not only in your dreams but also in the real world. You should be careful of wishful thinking and be alert of the choices that you make. In one sense, the Seven of Cups indicates that you are a dreamer who is both excited and afraid of the things that you see in your unconscious. In another, the Seven of Cups is a reminder that although it is good to have dreams and wishes, it is even better to take action attaining those dreams. At one point in life, you will need to stop fantasizing and face the reality of life.","meaning_rev":"The Seven of Cups reversal is somewhat similar to the upright, as they both indicate dreams, illusions and temptations, but seem to emphasize the more negative qualities of this card. Your views may be inclined towards fantasy, and not grounded in reality. It may imply that you are unclear about the things that you are searching for.","desc":"Strange chalices of vision, but the images are more especially those of the fantastic spirit."},{"name":"Eight of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-eight-of-cups-600x1024.jpg.webp","name_short":"cu08","value":"eight","value_int":8,"suit":"cups","type":"minor","meaning_up":"The Eight of Cups signifies time for change or transition, by means of walking away from something. Just like a caterpillar has to die before transforming into a beautiful butterfly, we all need to transform ourselves in our lives from time to time. This is the case especially after being tired of living what was the day to day, and embarking on a journey that will help one have a deeper understanding about life in general.","meaning_rev":"Getting the reversed Eight of Cups can show that one is in a state of confusion about which path they are supposed to take. The confusion usually arises from not knowing what is best for you and in the end, drifting in a sea of uncertainty is going to be the resulting effect. \\n One is likely to find themselves being aimless and not having clear cut goals in their lives. And in the end, they almost always end up following wherever the waves of life take them.\\n On the other hand, you may be aware of what you need to do. There is something that in your life that has for a long time stopped bringing you joy or pleasure, and though your soul\'s desire is to fly away from it, you find yourself remaining. The thought of leaving the security of what you have built fills you with fear - you are scared of both change and of losing something that has given you great comfort.","desc":"A man of dejected aspect is deserting the cups of his felicity, enterprise, undertaking or previous concern."},{"name":"Nine of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-nine-of-cups-card-600x1024.jpg.webp","name_short":"cu09","value":"nine","value_int":9,"suit":"cups","type":"minor","meaning_up":"After a long journey, the Nine of Cups symbolizes the finding of self-satisfaction. The emotional journey of the cups is starting to come to a close after the volatile ups and downs you faced in the earlier numbers of this suit. You have struggled to find purpose and joy after loss, you have tasted the different things that life offers, and you have left comfort in order to find greater heights. Here, you have found them, and you are indulging yourself as you celebrate this new stage of your life.","meaning_rev":"When the Nine of Cups is reversed, you need to think more carefully about the things that you really want in your life. The Nine of Cups reversed can signify that you are looking for a more authentic feeling of fulfillment.\\n Your path has been a hard one, and you\'ve arrived at a period where you may have the appearance of fulfillment, but something else is missing. This may outwardly appear as smugness, and can indicate your desire to receive attention and recognition for all that you have achieved. But you personally still feel dissatisfaction in yourself - it seems as though your desires are never-ending, a black hole.","desc":"A goodly personage has feasted to his heart\'s content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects."},{"name":"Ten of Cups","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ten-of-cups-600x1024.jpg.webp","name_short":"cu10","value":"ten","value_int":10,"suit":"cups","type":"minor","meaning_up":"From its joyful depiction, we can assume that the Ten of Cups embody happiness, joy, contentment and emotional satisfaction in your family, relationship or companion. It represents an idyllic state of comfort, harmony, peace and love which makes you feel like you are in paradise. This is where all your dreams, wants, needs and wishes have been fulfilled, and you feel a complete sense of satisfaction. Take a moment and breathe, look around you and be thankful for all your blessings. This card signifies something that so many of us are searching for.\\n To see the Ten of cups is to indicate a true emotional fulfillment - one where the lonely self-satisfaction of the Nine of Cups is shared with others to create a true sense of community and family. It is the crystallization of the innocent will of the ace of cups. After learning how to love oneself, the Nine of Cups matured into the Ten of Cups, which at its core about how true happiness stems from forging authentic bonds and connections with others. This card is most associated with a sense of \'happily ever after\' - of family, of lasting harmony and peace..","meaning_rev":"When the Ten of Cups is reversed, the strong bonds that one forges with family and community are broken, or twisted. The Ten of Cups is truly the most \'happily ever after\' card, but somehow this idealized image of domestic peace and comfort is broken, or was unrealistic all along. Instead of connections, you may find distance. Instead of coming together, you may be pulling apart.","desc":"Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond."},{"name":"Page of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-page-of-pentacles-600x1024.jpg.webp","name_short":"pepa","value":"page","value_int":11,"suit":"pentacles","type":"minor","meaning_up":"Generally, the Page of pentacles refers to the kind of energy that you need to complete all that is needed for your work. It may point to the determination, focus and the ability to stick with a particular task no matter how boring it may seem. In terms of work, the Page of Pentacles may signify that there are a lot of tasks you are responsible for, but your time to complete them is much too limited. This is not the time to feel stressed and overwhelmed. Assistance will be there for you, you just have to ask for it.","meaning_rev":"It may also indicate that you need to give yourself a break to refresh your mind. With regards to work, the Page of Pentacles reversed may signify that you are currently feeling overwhelmed due to the heavy demands in your workplace. Remember that it is always better to ask for assistance and complete the work rather than to try to finish it all by yourself and end up failing to do so. In terms of love, you are probably in a solid and steady romantic relationship, but perhaps someone else has caught your interest lately.","desc":"A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him."},{"name":"Knight of Pentacles","pic":"https://www.alittlesparkofjoy.com/wp-content/uploads/2021/05/knight-of-pentacles-modern-way-tarot-deck.webp","name_short":"pekn","value":"knight","value_int":12,"suit":"pentacles","type":"minor","meaning_up":"The Knight of Pentacles is about the daily tasks and the responsibility that one has to gain through a specific project. This knight has the patience to accomplish all his given duties and is considered by others reliable and committed to his work. To see this card is an indication that there is a need to be trustworthy and reliable.\\n You are fully committed to your assignments and you make sure that you complete your work efficiently. You are absolutely loyal and do the best you can in order to make sure the job will be properly completed. Though your sense of duty is admirable, beware that it does not turn into perfectionism - which can manifest itself in every aspect of your life.","meaning_rev":"When the reversed Knight of Pentacles shows up in a reading, the traits that were once positive in the upright position are now taken to the extreme. You may feel stuck in your own routine, and bored of everything that surrounds you. You may desire a change of scenery in order to avoid this tiring repetition. The Knight of Pentacles reversed could also indicate that you have totally ignored many serious aspects of your life. Financial or personal issues are often be neglected in favor of work matters when this card appears reversed.","desc":"He rides a slow, enduring, heavy horse, to which his own aspect corresponds. He exhibits his symbol, but does not look therein."},{"name":"Queen of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/queen-of-pentacles-modern-way-tarot-card-600x1024.jpg.webp","name_short":"pequ","value":"queen","value_int":13,"suit":"pentacles","type":"minor","meaning_up":"The Queen of Pentacles represents both a down-to-earth woman who plays many roles to ensure that she keeps her family happy. She knows how and when to show love - keeping an orderly home, cooking comforting meals and takes care of the children. But do not mistake her for being only a homebody - alongside all these motherly attributes, she can plan business ventures and execute her plans successfully. It is through her naturally talented business sense that she is surrounded by such luxury. She is quiet and does not like disclosing her financial accounts, fearing that it could bring more complexity to her life, which she desires to keep rather simple. She may have a secret bank account that nobody knows about - for she may choose to be careful, vigilant and self-sufficient.","meaning_rev":"When the Queen of Pentacles becomes disconnected with the energy of her suit, she can become someone who is completely self-absorbed. Gone is the upright generosity in her suit, she can be selfish and even envious when others successes seem greater than hers. Upright, her home is usually a sanctuary for her guests, but reversed it may instead be slovenly - she loses the ability to take care of herself and her surroundings. Her focus on the material may manifest negatively, making her greedy, and yet lacking in her sense of duty and capability.","desc":"The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul; she has also the serious cast of intelligence; she contemplates her symbol and may see worlds therein."},{"name":"King of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-king-of-pentacles-600x1024.jpg.webp","name_short":"peki","value":"king","value_int":14,"suit":"pentacles","type":"minor","meaning_up":"When we meet the King of Pentacles, we feel immediately his regal and generous presence. He is a provider and a protector, for under his care is a flourishing and abundant kingdom where its citizens are prosperous and encouraged to grow. He is naturally responsible and reliable, and through the wisdom granted to him by his suit, he has grown all that he has acquired from practically nothing. To see him in the cards is to envision success - one that was won by earnest work.","meaning_rev":"When reversed, the King of Pentacles falls from his throne. Once the king of a prosperous kingdom, it has been taken away from him, or lost. Disconnected from the energy of his suit, he may have been impatient, he may have been too indulgent, he may have gambled too far and overstretched himself, he may have sought shortcuts that led him to ruin. He may become too focused on the material, only understanding the cost of things, and never their value.","desc":"The figure calls for no special description the face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull\'s head should be noted as a recurrent symbol on the throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the correspondence of the four elements in human nature and that by which they may be governed. In many old Tarot packs this suit stood for current coin, money, deniers. I have not invented the substitution of pentacles and I have no special cause to sustain in respect of the alternative. But the consensus of divinatory meanings is on the side of some change, because the cards do not happen to deal especially with questions of money."},{"name":"Ace of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-ace-of-pentacles-600x1024.jpg.webp","name_short":"peac","value":"ace","value_int":1,"suit":"pentacles","type":"minor","meaning_up":"To see the Ace of Pentacles indicates a seed being planted in the material world, in your feelings of security and stability. Like a seed, this opportunity must also be nurtured, and sometimes invested in with energy, time or funds. Watering this seed has the potential to be very rewarding - for anything that is grown on this energy is meant to be stable, secure and give a good yield. Prosperity is coming your way.","meaning_rev":"Though the Ace of Pentacles usually heralds an opportunity of some sort that would lead to great gains, to see it reversed can mean that this might be a poor investment, requiring much more resources than you had initially reserved - or alternatively, you might be missing your chance.","desc":"A hand--issuing, as usual, from a cloud--holds up a pentacle."},{"name":"Two of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-two-of-pentacles-600x1024.jpg.webp","name_short":"pe02","value":"two","value_int":2,"suit":"pentacles","type":"minor","meaning_up":"The Two of Pentacles is a card about balance - the coins are displayed in a manner that is precarious, any small change in wind or weight can tip and send them falling. For those that may have more coins to go around, they can afford to be less careful, but at this moment things may be tight. Wealth too, is a kind of energy, and it is the kind whose goings in and goings out are easiest and most tangible to see. \\n There is a possibility that you are trying hard to keep the two aspects of your life in a perfect and delicate balance. This could be your career, money, love and health. The balancing act depicted in the card suggests that there are two major factors that you are deeply concerned about. It is time for you to step back to have a better perspective of the situation. While you may initially think it will save you time, multi-tasking may just worsen the situation. Cut down on your tasks and concentrate on these two factors that are troubling you. ","meaning_rev":"When the Two of Pentacles is in reversed position, it can mean that you are trying to juggle much too many things in your life. You need to take at least a short break to eliminate the stress. In case you are feeling that you can’t handle everything, you need to consider your own well-being and provide yourself with a time to breathe. In your work, the Two of Pentacles reversal can be a positive omen. Avoid committing to a lot of things since it will overwhelm you.","desc":"A young man, in the act of dancing, has a pentacle in either hand, and they are joined by that endless cord which is like the number 8 reversed."},{"name":"Three of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-three-of-pentacles-600x1024.jpg.webp","name_short":"pe03","value":"three","value_int":3,"suit":"pentacles","type":"minor","meaning_up":"The threes in the tarot represent the successful completion of a goal - it takes the sources of energy in the ace and the twos and adds a foundational factor, and usually involves a group of some sort. In this scenario, the upright three of pentacles meaning is that there is a successful achievement of all the requirements to pursue your business, deal, venture or any other kind of endeavor. Successful projects usually require different kinds of expertise, and at this moment, the Three of Pentacles means that all the skills required are coming together. In short, you are enjoying enjoying working together as part of a team, and also in the initial success of this bigger project.","meaning_rev":"The Three of Pentacles reversal meaning indicates that there is lack of team work; it shows that people are working against each other and undermining the project along the way. There seems to be too much competition between them - each person is trying to display superiority. This result to scarcity of resources - too many people are viewing their project partners as competitors.","desc":"A sculptor at his work in a monastery. Compare the design which illustrates the Eight of Pentacles. The apprentice or amateur therein has received his reward and is now at work in earnest."},{"name":"Four of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-four-of-pentacles-600x1024.jpg.webp","name_short":"pe04","value":"four","value_int":4,"suit":"pentacles","type":"minor","meaning_up":"The Four of Pentacles card is capable of generating both negative and positive perceptions. On one hand, the card signifies that you have successfully managed to accomplish much of your goals and you have managed to attain a significant material wealth in the process. However, on the other hand, there is a significant chance that you will start valuing things only for their material worth. You have worked hard to get to the point where you are now, and it is absolutely natural for your to desire to make sure that you remain stable. But this also has a chance to turn you into an overly possessive or greedy person who wants to ensure that no one is capable of taking away your own wealth.","meaning_rev":"When reversed, the Four of Pentacles veers sharply into the negative meanings of the card. Instead of being protective you become greedy, and you succumb to stinginess. You are haunted by certain fears of poverty which compels you to be nothing but materialistic. You are incredibly self-protective and defensive in terms of materialistic things, and you are not opening up to trust other people out of fear that they may be taking them away. ","desc":"A crowned figure, having a pentacle over his crown, clasps another with hands and arms; two pentacles are under his feet. He holds to that which he has."},{"name":"Five of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/five-of-pentacles-modern-way-tarot-card-600x1024.jpg.webp","name_short":"pe05","value":"five","value_int":5,"suit":"pentacles","type":"minor","meaning_up":" The person with crutches has a lot of symbolism. This person may be feeling cursed - that their bad luck is something that they can’t shake off easily. The Five of Pentacles symbolism can also be that of old debts, high credit card balances, or unpaid loans. It is a reminder that you should consider sorting out your finances. Mistakes you have made in the past might also haunt you.","meaning_rev":"Unlike the upright version, the Five of Pentacles reversal meaning can be a positive one. The snow is now on top, which represents brightness coming into your life. The stained glass now symbolizes a passageway with the Pentacles serving as the light at the end of the tunnel. The reversed Five of Pentacles means change is coming.","desc":"Two mendicants in a snow-storm pass a lighted casement."},{"name":"Six of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-six-of-pentacles-600x1024.jpg.webp","name_short":"pe06","value":"six","value_int":6,"suit":"pentacles","type":"minor","meaning_up":"The Six of Pentacles means is that you are in a position where you have a good relationship with your income. Like the main figure in the card, the amount of money that you bring in and your expenses are balanced well, and you are fortunate enough to not have any stress. You are also grateful for all that you own and can happily share your wealth with others. As you can tell from the imagery in the card, the Six of Pentacles can be about charity. You can either be the man giving away money to the needy, or a beggar gratefully receiving what you need from wealthy donor.","meaning_rev":"The Six of Pentacles reversed can suggest that charity can be one-way. If you have loaned someone money, you should not be expecting your money to be paid back, or your favor to be returned in the future. You should be cautious about the people you are lending money to, especially if you are not financially stable. You could also have problems with spending and giving away more than you can really afford.","desc":"A person in the guise of a merchant weighs money in a pair of scales and distributes it to the needy and distressed. It is a testimony to his own success in life, as well as to his goodness of heart."},{"name":"Seven of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-seven-of-pentacles-600x1024.jpg.webp","name_short":"pe07","value":"seven","value_int":7,"suit":"pentacles","type":"minor","meaning_up":"The meaning of the Seven of Pentacles relates to investment and effort. It follows the Six of Pentacles which refers to the end of financial or material hardship. If you have been putting in time and effort in your work, it signifies that your efforts are paying off and they are going to pay off in the future as well.\\nIf you are looking to invest, the Seven of Pentacles suggests that you are ready to put in a lot of effort, time and work into whatever you want to achieve. It reaffirms you of your long-term vision and helps to show that you are not confined to seeing results in the short term only. It shows how much you value the investment because of the effort that you are willing to put in.","meaning_rev":"The Seven of Pentacles reversed means that your returns may be scattered for now. It could also mean that the rewards of your labor are not as significant as you thought. The advantage of this is that it shows that you know when to stop investing your time, money or energy in a particular project. You, therefore, need to reevaluate your choices, and figure out where you should put your resources. The Seven of Pentacles reversal meaning could also be applied to relationships and the effort and emotions that you have invested.","desc":"A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there."},{"name":"Eight of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/eight-of-pentacles-card-modern-way-tarot-600x1024.jpg.webp","name_short":"pe08","value":"eight","value_int":8,"suit":"pentacles","type":"minor","meaning_up":"This card indicates a time that you have to work hard and focus entirely on your tasks. This is not necessarily a negative situation, but this means that you must really strive to be the best. The task that you need to accomplish can be personal or professional. No matter what type of task it is, do not be afraid to ask for help when things get overwhelming. The Eight of Pentacles refers to the efforts that you undertake. There is a possibility that there will be a lot of things that you need to address. Hard work is essential, but you still need to find a balance.","meaning_rev":"When reversed, the Eight of Pentacles signifies something similar to the upright position, but the tasks may be even more demanding. This means that you need to execute swiftly and with great care if you want to be happy and successful with this outcome. In terms of work, the Eight of Pentacles reversed refers to the importance of impressing your employer through your diligence, dedication and intelligence. Never avoid any task or responsibility in your work - or else this can damage your reputation. In love, the Eight of Pentacles may reveal that both of you may not be prepared to handle the responsibilities to make your relationship work.","desc":"An artist in stone at his work, which he exhibits in the form of trophies."},{"name":"Nine of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-nine-of-pentacles-600x1024.jpg.webp","name_short":"pe09","value":"nine","value_int":9,"suit":"pentacles","type":"minor","meaning_up":"The difficulties that were faced in the earlier journey of the pentacles appear to be over. The Nine of Pentacles conveys not only joy, but also the feeling of security and freedom that material wealth can bring. Looking back, the querent can now celebrate the difficulties, the struggles, and the hard work that lined her path. Her previous challenges gave her the wider perspective she needs to understand the spiritual value of her success. Knowing how difficult it was to get here, she intends to enjoy every single day that is given to her.","meaning_rev":"The Nine of Pentacles reversed can be indicative of suffering from financial issues. It can perhaps indicate a false display of security and stability. There may be a desire here to keep up appearances - to have all the finer things in life even when we cannot afford to do so.","desc":"A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being."},{"name":"Ten of Pentacles","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ten-of-pentacles-600x1024.jpg.webp","name_short":"pe10","value":"ten","value_int":10,"suit":"pentacles","type":"minor","meaning_up":"The Ten of Pentacles deals with permanence and satisfaction. The card shows that everything you have put your efforts into for a long time will pay off in the future. It suggests that everything will work out well in the end - for you have always kept the long term picture in view, choosing to take no shortcuts. Your legacy is sure to stand for quite a long time to come. This is a relief, for the path to get here has been filled with setbacks and challenges, making this point of the journey even sweeter.","meaning_rev":"The Ten of Pentacles reversed meaning may be a warning about your future financial status. It could point to problems and hiccups later on in life, even though they may not currently be an issue. It could also show the faulty nature of an investment that you have put a lot of time and effort in. In general, this reversed card seems to signal that you are placing too many bets on your short-term success, while harming your long-term potential. Take a step back and evaluate whether your decisions right now will lead to more damage in the future.","desc":"A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground. The child\'s hand is on one of them."},{"name":"Page of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-page-of-swords-600x1024.jpg.webp","name_short":"swpa","value":"page","value_int":11,"suit":"swords","type":"minor","meaning_up":"This card may indicate that you are very eager to execute an idea that you have been having or a project that you cooked up just recently. You are quite passionate about it, and you cannot wait to share the progress with others. Compared to your passionate heart, time seems to be standing still. It is time to be talkative. When a Page of Swords appears in a reading, it signifies communication and sharing of ideas. Whether it is someone else’s ideas or yours, it is time to open up and talk about them as long as it is a constructive.","meaning_rev":"When the Page of Swords is reversed, all the negative characteristics of her come out - and she may become almost dangerous. Being gifted with a sharp and alert mind, she may be using it for deception and manipulation. The sword that she wields may be used to create pain, her natural gift for language turned to a weapon. She may lack the understanding or the maturity to understand the suffering that she causes, feeling the rush that one gets upon lashing out. On the other hand, this page may be someone of empty words or promises - who though loves talking, does not really talk about much of substance. Take care to show strength and action behind your words, for you may be damaging your reputation.","desc":"A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment."},{"name":"Knight of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-knight-of-swords-600x1024.jpg.webp","name_short":"swkn","value":"knight","value_int":12,"suit":"swords","type":"minor","meaning_up":"Once the knight sets forth towards his goals, there is absolutely no stopping him. He doesn’t see - and he doesn’t care - about any upcoming challenges. He is filled with sheer ambition, strength and determination to succeed with his quest no matter what. However, this determination could also blind him to see the potential consequences of his actions on others as he makes his way to success. He may charge forth into a very dangerous territory without preparation or actual foresight, and this could lead him to great danger.","meaning_rev":"The reversed Knight of Swords suggests incredible impatience, impulsiveness alongside his bursting with energy. This Knight of Swords has a lot of energy but lacks any kind of direction, and this oftentimes results in them making rather rash decisions as well as pulling down other people with them.\\n Their thoughts are oftentimes scattered throughout without any actual organization or logic. They are most likely disorganized and unprepared for the things that they actually want to achieve. The Knight of Swords reversal meaning indicates that you still have a lot of miles to walk in order to get the valuable life experience that you need in order to overcome adversities along the way. This is something to consider.","desc":"He is riding in full course, as if scattering his enemies. In the design he is really a prototypical hero of romantic chivalry. He might almost be Galahad, whose sword is swift and sure because he is clean of heart."},{"name":"Queen of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-queen-of-swords-600x1024.jpg.webp","name_short":"swqu","value":"queen","value_int":13,"suit":"swords","type":"minor","meaning_up":"The Queen of Swords is an archetype of an older, wiser feminine intellect. She could be thought of as the most masculine of the all the queens, and may come off as quite stern and emotionless. This card represents the importance of making judgments without relying on emotion alone. The Queen of Swords beckons you to look at all the facts before making a decision. This queen does have compassion, which is why she has her hand reaching outwards in offering, but she wants to connect to people using an understanding that is intellectual.","meaning_rev":"The Queen of Swords reversed meaning is that you may be thinking too much with your heart, and you are becoming too emotionally involved with your current situation. You have to start thinking more objectively, because your emotions could lead you astray. Take the time to look at the situation using various facts and use your head to create a clearer picture of what is really going on. Only then, can you decide what your next move should be.","desc":"Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power."},{"name":"King of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-king-of-swords-600x1024.jpg.webp","name_short":"swki","value":"king","value_int":14,"suit":"swords","type":"minor","meaning_up":"The King of Swords meaning also shows that you need to be stern in your role while ensuring that you have clarity of mind at all times. When judging a situation, you need to consider all the possible consequences to make an appropriate judgment. You will need to leave your emotions out of the judgment so as to maintain rational thinking at all times. The King of Swords meaning suggests that you should take time to reason with others and be candid with the observations that you have made. \\n As far as your personal life goes, the King of Swords urges you to use your intellect and logic to maneuver the path that lies ahead. You will need to confront the issue at hand and make a sober decision. The King of Swords implies that you should be able to look at any situation and make a decision with complete impartiality. He can also be an indicator of the high ethical standards that the King of Swords demonstrates.","meaning_rev":"The King of Swords in reversed shows tyrannical, abusive and manipulative habits. It may indicate the misuse of one’s mental power, drive, and authority. This is an illustration of persuasion and manipulation, so as to fulfill selfish desires. The King of Swords reversal meaning may also imply that you are showing off your level of intelligence by using big words when discussing ordinary topics. Another interpretation is that you may also be a loose cannon, especially where there are angry outbursts and impulses.","desc":"He sits in judgment, holding the unsheathed sign of his suit. He recalls, of course, the conventional Symbol of justice in the Trumps Major, and he may represent this virtue, but he is rather the power of life and death, in virtue of his office."},{"name":"Ace of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ace-of-swords-600x1024.jpg.webp","name_short":"swac","value":"ace","value_int":1,"suit":"swords","type":"minor","meaning_up":"As with all the aces, the Ace of Swords indicates that one is about to experience a moment of breakthrough. With its sharp blade and representing the power of the intellect, this sword has the ability to cut through deception and find truth. In layman\'s terms, this card represents that moment in which one can see the world from a new point of view, as a place that is filled with nothing but new possibilities. It is, therefore, the best time to work on your goals - as the aces all give green lights, and are signals of waiting opportunities and new beginnings.","meaning_rev":"Getting a reversed Ace of Swords might mean that one\'s thoughts are confused, unsure and very chaotic. This isn’t a good time for one to make any decisions since they don’t have any clarity on what you should be doing, meaning that the chances of failure can be pretty high.\\n At this time, it would be better to prepare yourself and take baby steps - work methodically as you slowly move towards achieving your goals. This would be a good time to lay back and rationally think your way through each stage rather than acting on impulse, since everything appears in a blur and is not very clear at that moment. It might also be a good time to seek advice since things may not be as they seem.","desc":"A hand issues from a cloud, grasping as word, the point of which is encircled by a crown."},{"name":"Two of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-two-of-swords-600x1024.jpg.webp","name_short":"sw02","value":"two","value_int":2,"suit":"swords","type":"minor","meaning_up":"The Two of Swords is often related with balance and partnership. It signifies the need to keep your relationships balanced. Regardless if it is in business, friendship or romantic relationship, you may find yourself struggling to maintain the current state of affairs, and may find yourself caught in the middle.  In regards to your work, you may be currently stuck in limbo and are perhaps waiting on another party\'s decision. Remain patient and avoid pressuring people in making their decision abruptly.","meaning_rev":"The situation we see in the reversed Two of Swords is a stalemate of a legendary kind, one where two forces are battling each other. This battle can be representative of both something internal or external, and you are forced to be in between and be the decision maker. However, because neither party seems particularly pleasing to work with, you may find yourself confused, the pressure is too much, and you are unable to make a decision.","desc":"A hoodwinked female figure balances two swords upon her shoulders."},{"name":"Three of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-three-of-swords-600x1024.jpg.webp","name_short":"sw03","value":"three","value_int":3,"suit":"swords","type":"minor","meaning_up":"Sometimes life gives us no choice - we are knocked down. But what determines one\'s future is the choice of whether to remain knocked down, or rise again. Each little piece of suffering you encounter serves as a stepping stone to find a deeper meaning in this world. This card comes at a time when you need to prepare yourself for this next stage in life. While the grief may be extremely hurtful, it enables you to forget your past and focus on your future knowing that you have control of what actions you take afterwards. Don’t dwell so much on what is troubling you but instead, focus on what is approaching, because you determine your fate.","meaning_rev":"The Three of Swords reversed indicates that have faced a recent loss, a break-up or a moment of grief. You may be still recovering from this, and your emotions have not completely calmed, making it difficult to move on. Although you may still be thinking of your past suffering, this card may be a signal that it\'s time to let go and look forwards towards life ahead of you, because there is much for you to enjoy.","desc":"Three swords piercing a heart; cloud and rain behind."},{"name":"Four of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/four-of-swords-modern-way-tarot-card-600x1024.jpg.webp","name_short":"sw04","value":"four","value_int":4,"suit":"swords","type":"minor","meaning_up":"After the time of chaos, anger and pain depicted in the Three of Swords, the Four of Swords can signal that it is time to retreat. The Four of Swords is a moment of rest. Whether this is from a choice to withdraw, or whether it is from pure exhaustion, it is not clear. We are still tender from the wounds that were inflicted, and the battle weapons still hang above us as a grim reminder of what was lost. In order to continue and re-emerge in your daily life, you must take the time now to take a breather. There is always the faint fear that something more is bound to happen again and it is advisable that you take all chances to rest.","meaning_rev":"Although the Four of Swords card in a reading could mean it’s time for healing, a reversed card could mean restlessness. Your heart is willing to relax, but this is not what your mind wants. You feel that you have too much that is depending on you. Following this path is not advised, as it could have affects on your health.","desc":"The effigy of a knight in the attitude of prayer, at full length upon his tomb."},{"name":"Five of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-five-of-swords-card-600x1024.jpg.webp","name_short":"sw05","value":"five","value_int":5,"suit":"swords","type":"minor","meaning_up":"This card indicates that you are engaging in a conflict of some nature. It can also suggest a disagreement with others, which leads to hostility and tension. Despite the fact that you think you’ve won, you might still lose in the big picture, because you have annoyed or hurt those that you have argued with, and as a result, you are on the road to isolating yourself. Perhaps, at the moment, you believed that it was more important to be right rather than appreciate and understand where the other side was coming from.","meaning_rev":"In the upright position, the Five of Swords is a card of tension, conflict, and disagreement. The Five of Swords reversal meaning shows you that all you want is for that particular period to be over so that you can forget and forgive. Because you are beginning to understand that winning is not everything, you will be capable of focusing your energy on something a lot more constructive and positive.","desc":"A disdainful man looks after two retreating and dejected figures. Their swords lie upon the ground. He carries two others on his left shoulder, and a third sword is in his right hand, point to earth. He is the master in possession of the field."},{"name":"Six of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-six-of-swords-600x1024.jpg.webp","name_short":"sw06","value":"six","value_int":6,"suit":"swords","type":"minor","meaning_up":"The meaning of the Six of Swords is that you are experiencing a transition of some kind, but one that is not happy and filled with regret. This transition will most likely be the result of decisions you made in the past, and now they are forcing you to leave something behind in order to move forward. Despite your sadness, you need to remember that moving on is the ideal option for your future.","meaning_rev":"The Six of Swords reversed can indicate that you have been trying to move on and make the transitions you need. However, you may be experiencing challenges making these a reality. You may keep returning to the past, whether it\'s because there are issues that are not resolved, or you are questioning your decisions.","desc":"A ferryman carrying passengers in his punt to the further shore. The course is smooth, and seeing that the freight is light, it may be noted that the work is not beyond his strength."},{"name":"Seven of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-seven-of-swords-card-600x1024.jpg.webp","name_short":"sw07","value":"seven","value_int":7,"suit":"swords","type":"minor","meaning_up":"Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.The Seven of Swords in general, is said to be about betrayal and deception. When you get this card, it may imply that you or someone else in your life is having difficulty getting away with something. There are instances when we are forced to be sneaky, hoping that we will not be discovered. When we are found out, we have to face the consequences - whether it\'s embarrassment, punishment, or worse. Sometimes this happens when there are instances when you had to think on your feet, and did something that was somewhat shrewd and out of character. Now there is a danger of the secret coming out.","meaning_rev":"The Seven of Swords reversed can have multiple meanings depending on the context of the other cards within the reading. It can suggest firstly a need to change your approach - the tactics you\'ve been using are not working. While upright, this card can stand for a cunning victory attained by deception and trickery, the reversal can stand for either a more extreme version of such behavior. Or instead, a kind of renewal of conscience. You or someone in your circle may be deciding to unburden themselves with their guilt, and come clean about some piece of manipulation they have been involved in. Trust has been broken, but with a confession, you may be on the road to repairing it. There is a desire here to try and do things in a different way, one that is collaborative rather than independent.","desc":"A man in the act of carrying away five swords rapidly; the two others of the card remain stuck in the ground. A camp is close at hand."},{"name":"Eight of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-eight-of-swords-600x1024.jpg.webp","name_short":"sw08","value":"eight","value_int":8,"suit":"swords","type":"minor","meaning_up":"The general meaning in the Eight of Swords is that of a feeling of being trapped and victimized. You may feel powerless because, in your mind, you feel that changing the situation might be beyond you. This feeling of helplessness that you have, the feeling that you have no agency in your life, has played a major role in making your situation worse.","meaning_rev":"Getting the reversed Eight of Swords is a good sign, since it shows maturity and self-acceptance, and a recognition of one\'s own power and responsibility - especially after a long struggle of doubt. It means that one is capable of making conscious decisions because they are confident in who they are, and their power to affect change in both themselves and the world. It\'s time to free ones self from the past and proverbially clear out their closet, creating room for new things and experiences.","desc":"A woman, bound and hoodwinked, with the swords of the card about her. Yet it is rather a card of temporary durance than of irretrievable bondage."},{"name":"Nine of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-nine-of-swords-card-600x1024.jpg.webp","name_short":"sw09","value":"nine","value_int":9,"suit":"swords","type":"minor","meaning_up":"When we are never released from the entrapment depicted in the Eight of Swords, we escalate into the Nine of Swords, where we are plagued by nightmares. The suit of swords is one that is concerned with the mind, with logic, with intelligence, and with communication, but somehow the Nine of Swords was caught on the destructive end of the mind, the one which turns inward on itself, multiplies and festers. Questions are plaguing you, and you find yourself reciting all the possibilities - all the things that can happen to you. You are haunted by what could be.","meaning_rev":"To come across the Nine of Swords reversed still signals something similar to the upright version - that you may find yourself being terrorized by nightmares, by anxiety and stress. Some trauma from your past is coming back, and you find the grief of unresolved issues overwhelming.","desc":"One seated on her couch in lamentation, with the swords over her. She is as one who knows no sorrow which is like unto hers. It is a card of utter desolation."},{"name":"Ten of Swords","pic":"https://www.modernwaytarot.com/wp-content/uploads/2022/08/modern-way-tarot-card-ten-of-swords-600x1024.jpg.webp","name_short":"sw10","value":"ten","value_int":10,"suit":"swords","type":"minor","meaning_up":"The Ten of Swords indicate a major disaster of some sort. It shows that a certain force of extreme magnitude has come to hit you in your life - one that you may have not foreseen. There is a sense of betrayal that is indicated here, for the character is stabbed in the back. This seems to be a reminder that despite how much we try, we cannot control everything - there are things that are beyond our ability to change. Here, this situation is unavoidable.\\n The Ten of Swords depicts that situation where your mentality is ‘poor me’, you feel like there is nothing you can do. Pause and remember that as with the death card, the end of something means a new beginning. Let go of what you have lost, and focus on the new path forward because that is where your life is meant to go. A good example is a break-up with your partner - though it could be intensely painful, it could also be the beginning of a new sense of independence. ","meaning_rev":"When we see any version of the Ten of Swords , the feelings are powerful. Whether reversed or upright, the card signals the finality of defeat. There is no way to avoid this tragedy - it has happened over a long course of events that have been a long time coming.","desc":"A prostrate figure, pierced by all the swords belonging to the card."}]}');const{cards:v}=e(w),b=()=>{const e=[];for(let t=0;t<6;t+=1){let t=Math.floor(78*Math.random());for(;e.includes(v[t]);)t=Math.floor(78*Math.random());e.push(v[t])}return e};var T,k,_,I=T={};function E(){throw new Error("setTimeout has not been defined")}function S(){throw new Error("clearTimeout has not been defined")}function C(e){if(k===setTimeout)return setTimeout(e,0);if((k===E||!k)&&setTimeout)return k=setTimeout,setTimeout(e,0);try{return k(e,0)}catch(t){try{return k.call(null,e,0)}catch(t){return k.call(this,e,0)}}}!function(){try{k="function"==typeof setTimeout?setTimeout:E}catch(e){k=E}try{_="function"==typeof clearTimeout?clearTimeout:S}catch(e){_=S}}();var A,N=[],D=!1,R=-1;function x(){D&&A&&(D=!1,A.length?N=A.concat(N):R=-1,N.length&&P())}function P(){if(!D){var e=C(x);D=!0;for(var t=N.length;t;){for(A=N,N=[];++R<t;)A&&A[R].run();R=-1,t=N.length}A=null,D=!1,function(e){if(_===clearTimeout)return clearTimeout(e);if((_===S||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(e);try{_(e)}catch(t){try{return _.call(null,e)}catch(t){return _.call(this,e)}}}(e)}}function O(e,t){this.fun=e,this.array=t}function L(){}I.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];N.push(new O(e,t)),1!==N.length||D||C(P)},O.prototype.run=function(){this.fun.apply(null,this.array)},I.title="browser",I.browser=!0,I.env={},I.argv=[],I.version="",I.versions={},I.on=L,I.addListener=L,I.once=L,I.off=L,I.removeListener=L,I.removeAllListeners=L,I.emit=L,I.prependListener=L,I.prependOnceListener=L,I.listeners=function(e){return[]},I.binding=function(e){throw new Error("process.binding is not supported")},I.cwd=function(){return"/"},I.chdir=function(e){throw new Error("process.chdir is not supported")},I.umask=function(){return 0};
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
const M=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},F={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],o=t+1<e.length,r=o?e[t+1]:0,a=t+2<e.length,h=a?e[t+2]:0,u=s>>2,c=(3&s)<<4|r>>4;let l=(15&r)<<2|h>>6,d=63&h;a||(d=64,o||(l=64)),i.push(n[u],n[c],n[l],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(M(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&o)}else if(s>239&&s<365){const o=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],r=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&o)<<6|63&r)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const r=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==o||null==r||null==a)throw new j;const h=s<<2|o>>4;if(i.push(h),64!==r){const e=o<<4&240|r>>2;if(i.push(e),64!==a){const e=r<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class j extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U=function(e){return function(e){const t=M(e);return F.encodeByteArray(t,!0)}(e).replace(/\./g,"")},V=function(e){try{return F.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const q=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,W=()=>{try{return q()||(()=>{if(void 0===T||void 0===T.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&V(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},B=e=>{var t,n;return null===(n=null===(t=W())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},H=e=>{const t=B(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},z=()=>{var e;return null===(e=W())||void 0===e?void 0:e.config},$=e=>{var t;return null===(t=W())||void 0===t?void 0:t[`_${e}`]};
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
class K{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function G(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[U(JSON.stringify({alg:"none",type:"JWT"})),U(JSON.stringify(o)),""].join(".")}
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
 */function Y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Q(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function J(){const e=Y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function X(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ee.prototype.create)}}class ee{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?function(e,t){return e.replace(te,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",r=`${this.serviceName}: ${o} (${i}).`;return new Z(i,r,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const te=/\{\$([^}]+)}/g;
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
 */function ne(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],o=t[s];if(se(n)&&se(o)){if(!ie(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function se(e){return null!==e&&"object"==typeof e}
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
function oe(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function re(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ae(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function he(e,t){const n=new ue(e,t);return n.subscribe.bind(n)}class ue{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ce),void 0===i.error&&(i.error=ce),void 0===i.complete&&(i.complete=ce);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ce(){}
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
function le(e){return e&&e._delegate?e._delegate:e}class de{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class fe{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new K;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class me{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const pe=[];var ge,ye;(ye=ge||(ge={}))[ye.DEBUG=0]="DEBUG",ye[ye.VERBOSE=1]="VERBOSE",ye[ye.INFO=2]="INFO",ye[ye.WARN=3]="WARN",ye[ye.ERROR=4]="ERROR",ye[ye.SILENT=5]="SILENT";const we={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},ve=ge.INFO,be={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Te=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=be[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class ke{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?we[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ve,this._logHandler=Te,this._userLogHandler=null,pe.push(this)}}let _e,Ie;const Ee=new WeakMap,Se=new WeakMap,Ce=new WeakMap,Ae=new WeakMap,Ne=new WeakMap;let De={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Se.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ce.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Re(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ie||(Ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Oe(this),t),Pe(Ee.get(this))}:function(...t){return Pe(e.apply(Oe(this),t))}:function(t,...n){const i=e.call(Oe(this),t,...n);return Ce.set(i,t.sort?t.sort():[t]),Pe(i)}}function xe(e){return"function"==typeof e?Re(e):(e instanceof IDBTransaction&&function(e){if(Se.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)}));Se.set(e,t)}(e),t=e,(_e||(_e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,De):e);var t}function Pe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{t(Pe(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Ee.set(t,e)})).catch((()=>{})),Ne.set(t,e),t}(e);if(Ae.has(e))return Ae.get(e);const t=xe(e);return t!==e&&(Ae.set(e,t),Ne.set(t,e)),t}const Oe=e=>Ne.get(e);function Le(e,t,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(e,t),a=Pe(r);return i&&r.addEventListener("upgradeneeded",(e=>{i(Pe(r.result),e.oldVersion,e.newVersion,Pe(r.transaction),e)})),n&&r.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Me=["get","getKey","getAll","getAllKeys","count"],Fe=["put","add","delete","clear"],je=new Map;function Ue(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(je.get(t))return je.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Fe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Me.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,s?"readwrite":"readonly");let r=o.store;return i&&(r=r.index(t.shift())),(await Promise.all([r[n](...t),s&&o.done]))[0]};return je.set(t,o),o}De=(e=>({...e,get:(t,n,i)=>Ue(t,n)||e.get(t,n,i),has:(t,n)=>!!Ue(t,n)||e.has(t,n)}))(De);
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
class Ve{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const qe=new ke("@firebase/app"),We={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Be=new Map,He=new Map;function ze(e,t){try{e.container.addComponent(t)}catch(n){qe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $e(e){const t=e.name;if(He.has(t))return qe.debug(`There were multiple attempts to register component ${t}.`),!1;He.set(t,e);for(const t of Be.values())ze(t,e);return!0}function Ke(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const Ge=new ee("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Ye{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new de("app",(()=>this),"PUBLIC"))}}
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
 */function Qe(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw Ge.create("bad-app-name",{appName:String(s)});if(n||(n=z()),!n)throw Ge.create("no-options");const o=Be.get(s);if(o){if(ie(n,o.options)&&ie(i,o.config))return o;throw Ge.create("duplicate-app",{appName:s})}const r=new me(s);for(const e of He.values())r.addComponent(e);const a=new Ye(n,i,r);return Be.set(s,a),a}function Je(e="[DEFAULT]"){const t=Be.get(e);if(!t&&"[DEFAULT]"===e&&z())return Qe();if(!t)throw Ge.create("no-app",{appName:e});return t}function Xe(e,t,n){var i;let s=null!==(i=We[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),r=t.match(/\s|\//);if(o||r){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&r&&e.push("and"),r&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void qe.warn(e.join(" "))}$e(new de(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Ze=null;function et(){return Ze||(Ze=Le("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Ge.create("idb-open",{originalErrorMessage:e.message})}))),Ze}async function tt(e,t){try{const n=(await et()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,nt(e)),await n.done}catch(e){if(e instanceof Z)qe.warn(e.message);else{const t=Ge.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});qe.warn(t.message)}}}function nt(e){return`${e.name}!${e.options.appId}`}
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
 */class it{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=st();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=st(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),rt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=U(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ot(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function st(){return(new Date).toISOString().substring(0,10)}class ot{async runIndexedDBEnvironmentCheck(){return!!X()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await et();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(nt(e))}catch(e){if(e instanceof Z)qe.warn(e.message);else{const t=Ge.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});qe.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function rt(e){return U(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var at;at="",$e(new de("platform-logger",(e=>new Ve(e)),"PRIVATE")),$e(new de("heartbeat",(e=>new it(e)),"PRIVATE")),Xe("@firebase/app","0.9.10",at),Xe("@firebase/app","0.9.10","esm2017"),Xe("fire-js","");
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
Xe("firebase","9.22.0","app");var ht,ut="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},ct={},lt=lt||{},dt=ut||self;function ft(){}function mt(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function pt(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var gt="closure_uid_"+(1e9*Math.random()>>>0),yt=0;function wt(e,t,n){return e.call.apply(e.bind,arguments)}function vt(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function bt(e,t,n){return(bt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?wt:vt).apply(null,arguments)}function Tt(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function kt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),o=2;o<arguments.length;o++)s[o-2]=arguments[o];return t.prototype[n].apply(e,s)}}function _t(){this.s=this.s,this.o=this.o}_t.prototype.s=!1,_t.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,gt)&&e[gt]||(e[gt]=++yt))},_t.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const It=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Et(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function St(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(mt(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function Ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!dt.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{dt.addEventListener("test",ft,t),dt.removeEventListener("test",ft,t)}catch(e){}return e}();function Nt(e){return/^[\s\xa0]*$/.test(e)}var Dt=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Rt(e,t){return e<t?-1:e>t?1:0}function xt(){var e=dt.navigator;return e&&(e=e.userAgent)?e:""}function Pt(e){return-1!=xt().indexOf(e)}function Ot(e){return Ot[" "](e),e}function Lt(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}Ot[" "]=ft;var Mt,Ft,jt=Pt("Opera"),Ut=Pt("Trident")||Pt("MSIE"),Vt=Pt("Edge"),qt=Vt||Ut,Wt=Pt("Gecko")&&!(-1!=xt().toLowerCase().indexOf("webkit")&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),Bt=-1!=xt().toLowerCase().indexOf("webkit")&&!Pt("Edge");function Ht(){var e=dt.document;return e?e.documentMode:void 0}e:{var zt="",$t=(Ft=xt(),Wt?/rv:([^\);]+)(\)|;)/.exec(Ft):Vt?/Edge\/([\d\.]+)/.exec(Ft):Ut?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ft):Bt?/WebKit\/(\S+)/.exec(Ft):jt?/(?:Version)[ \/]?(\S+)/.exec(Ft):void 0);if($t&&(zt=$t?$t[1]:""),Ut){var Kt=Ht();if(null!=Kt&&Kt>parseFloat(zt)){Mt=String(Kt);break e}}Mt=zt}var Gt,Yt={};if(dt.document&&Ut){var Qt=Ht();Gt=Qt||(parseInt(Mt,10)||void 0)}else Gt=void 0;var Jt=Gt;function Xt(e,t){if(Ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Wt){e:{try{Ot(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Zt[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xt.$.h.call(this)}}kt(Xt,Ct);var Zt={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),tn=0;function nn(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++tn,this.fa=this.ia=!1}function sn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function on(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function rn(e){const t={};for(const n in e)t[n]=e[n];return t}const an="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hn(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<an.length;t++)n=an[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function un(e){this.src=e,this.g={},this.h=0}function cn(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],o=It(s,t);(i=0<=o)&&Array.prototype.splice.call(s,o,1),i&&(sn(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ln(e,t,n,i){for(var s=0;s<e.length;++s){var o=e[s];if(!o.fa&&o.listener==t&&o.capture==!!n&&o.la==i)return s}return-1}un.prototype.add=function(e,t,n,i,s){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var r=ln(e,t,i,s);return-1<r?(t=e[r],n||(t.ia=!1)):((t=new nn(t,this.src,o,!!i,s)).ia=n,e.push(t)),t};var dn="closure_lm_"+(1e6*Math.random()|0),fn={};function mn(e,t,n,i,s){if(i&&i.once)return gn(e,t,n,i,s);if(Array.isArray(t)){for(var o=0;o<t.length;o++)mn(e,t[o],n,i,s);return null}return n=_n(n),e&&e[en]?e.O(t,n,pt(i)?!!i.capture:!!i,s):pn(e,t,n,!1,i,s)}function pn(e,t,n,i,s,o){if(!t)throw Error("Invalid event type");var r=pt(s)?!!s.capture:!!s,a=Tn(e);if(a||(e[dn]=a=new un(e)),(n=a.add(t,n,i,r,o)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=bn;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)At||(s=r),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(vn(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function gn(e,t,n,i,s){if(Array.isArray(t)){for(var o=0;o<t.length;o++)gn(e,t[o],n,i,s);return null}return n=_n(n),e&&e[en]?e.P(t,n,pt(i)?!!i.capture:!!i,s):pn(e,t,n,!0,i,s)}function yn(e,t,n,i,s){if(Array.isArray(t))for(var o=0;o<t.length;o++)yn(e,t[o],n,i,s);else i=pt(i)?!!i.capture:!!i,n=_n(n),e&&e[en]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ln(o=e.g[t],n,i,s))&&(sn(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete e.g[t],e.h--)))):e&&(e=Tn(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ln(t,n,i,s)),(n=-1<e?t[e]:null)&&wn(n))}function wn(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[en])cn(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(vn(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Tn(t))?(cn(n,e),0==n.h&&(n.src=null,t[dn]=null)):sn(e)}}}function vn(e){return e in fn?fn[e]:fn[e]="on"+e}function bn(e,t){if(e.fa)e=!0;else{t=new Xt(t,this);var n=e.listener,i=e.la||e.src;e.ia&&wn(e),e=n.call(i,t)}return e}function Tn(e){return(e=e[dn])instanceof un?e:null}var kn="__closure_events_fn_"+(1e9*Math.random()>>>0);function _n(e){return"function"==typeof e?e:(e[kn]||(e[kn]=function(t){return e.handleEvent(t)}),e[kn])}function In(){_t.call(this),this.i=new un(this),this.S=this,this.J=null}function En(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new Ct(t,e);else if(t instanceof Ct)t.target=t.target||e;else{var s=t;hn(t=new Ct(i,e),s)}if(s=!0,n)for(var o=n.length-1;0<=o;o--){var r=t.g=n[o];s=Sn(r,i,!0,t)&&s}if(s=Sn(r=t.g=e,i,!0,t)&&s,s=Sn(r,i,!1,t)&&s,n)for(o=0;o<n.length;o++)s=Sn(r=t.g=n[o],i,!1,t)&&s}function Sn(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,o=0;o<t.length;++o){var r=t[o];if(r&&!r.fa&&r.capture==n){var a=r.listener,h=r.la||r.src;r.ia&&cn(e.i,r),s=!1!==a.call(h,i)&&s}}return s&&!i.defaultPrevented}kt(In,_t),In.prototype[en]=!0,In.prototype.removeEventListener=function(e,t,n,i){yn(this,e,t,n,i)},In.prototype.N=function(){if(In.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)sn(n[i]);delete t.g[e],t.h--}}this.J=null},In.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},In.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Cn=dt.JSON.stringify;function An(){var e=Ln;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Nn,Dn=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new Rn),(e=>e.reset()));class Rn{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function xn(e){dt.setTimeout((()=>{throw e}),0)}function Pn(e,t){Nn||function(){var e=dt.Promise.resolve(void 0);Nn=function(){e.then(Mn)}}(),On||(Nn(),On=!0),Ln.add(e,t)}var On=!1,Ln=new class{add(e,t){const n=Dn.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Mn(){for(var e;e=An();){try{e.h.call(e.g)}catch(e){xn(e)}var t=Dn;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}On=!1}function Fn(e,t){In.call(this),this.h=e||1,this.g=t||dt,this.j=bt(this.qb,this),this.l=Date.now()}function jn(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Un(e,t,n){if("function"==typeof e)n&&(e=bt(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=bt(e.handleEvent,e)}return 2147483647<Number(t)?-1:dt.setTimeout(e,t||0)}function Vn(e){e.g=Un((()=>{e.g=null,e.i&&(e.i=!1,Vn(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}kt(Fn,In),(ht=Fn.prototype).ga=!1,ht.T=null,ht.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),En(this,"tick"),this.ga&&(jn(this),this.start()))}},ht.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ht.N=function(){Fn.$.N.call(this),jn(this),delete this.g};class qn extends _t{l(e){this.h=arguments,this.g?this.i=!0:Vn(this)}N(){super.N(),this.g&&(dt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Wn(e){_t.call(this),this.h=e,this.g={}}kt(Wn,_t);var Bn=[];function Hn(e,t,n,i){Array.isArray(n)||(n&&(Bn[0]=n.toString()),n=Bn);for(var s=0;s<n.length;s++){var o=mn(t,n[s],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function zn(e){on(e.g,(function(e,t){this.g.hasOwnProperty(t)&&wn(e)}),e),e.g={}}function $n(){this.g=!0}function Kn(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var o=s[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var r=1;r<s.length;r++)s[r]=""}}}return Cn(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Wn.prototype.N=function(){Wn.$.N.call(this),zn(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$n.prototype.Ea=function(){this.g=!1},$n.prototype.info=function(){};var Gn={},Yn=null;function Qn(){return Yn=Yn||new In}function Jn(e){Ct.call(this,Gn.Ta,e)}function Xn(e){const t=Qn();En(t,new Jn(t))}function Zn(e,t){Ct.call(this,Gn.STAT_EVENT,e),this.stat=t}function ei(e){const t=Qn();En(t,new Zn(t,e))}function ti(e,t){Ct.call(this,Gn.Ua,e),this.size=t}function ni(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return dt.setTimeout((function(){e()}),t)}Gn.Ta="serverreachability",kt(Jn,Ct),Gn.STAT_EVENT="statevent",kt(Zn,Ct),Gn.Ua="timingevent",kt(ti,Ct);var ii={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},si={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function oi(){}function ri(e){return e.h||(e.h=e.i())}function ai(){}oi.prototype.h=null;var hi,ui={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ci(){Ct.call(this,"d")}function li(){Ct.call(this,"c")}function di(){}function fi(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Wn(this),this.P=pi,e=qt?125:void 0,this.V=new Fn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new mi}function mi(){this.i=null,this.g="",this.h=!1}kt(ci,Ct),kt(li,Ct),kt(di,oi),di.prototype.g=function(){return new XMLHttpRequest},di.prototype.i=function(){return{}},hi=new di;var pi=45e3,gi={},yi={};function wi(e,t,n){e.L=1,e.v=Fi(xi(t)),e.s=n,e.S=!0,vi(e,null)}function vi(e,t){e.G=Date.now(),_i(e),e.A=xi(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Qi(n.i,"t",i),e.C=0,n=e.l.I,e.h=new mi,e.g=Ys(e.l,n?t:null,!e.s),0<e.O&&(e.M=new qn(bt(e.Pa,e,e.g),e.O)),Hn(e.U,e.g,"readystatechange",e.nb),t=e.I?rn(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Xn(),function(e,t,n,i,s,o){e.info((function(){if(e.g)if(o)for(var r="",a=o.split("&"),h=0;h<a.length;h++){var u=a[h].split("=");if(1<u.length){var c=u[0];u=u[1];var l=c.split("_");r=2<=l.length&&"type"==l[1]?r+(c+"=")+u+"&":r+(c+"=redacted&")}}else r=null;else r=o;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+r}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function bi(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ti(e,t,n){let i,s=!0;for(;!e.J&&e.C<n.length;){if(i=ki(e,n),i==yi){4==t&&(e.o=4,ei(14),s=!1),Kn(e.j,e.m,null,"[Incomplete Response]");break}if(i==gi){e.o=4,ei(15),Kn(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Kn(e.j,e.m,i,null),Ai(e,i)}bi(e)&&i!=yi&&i!=gi&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ei(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qs(t),t.L=!0,ei(11))):(Kn(e.j,e.m,n,"[Invalid Chunked Response]"),Ci(e),Si(e))}function ki(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?yi:(n=Number(t.substring(n,i)),isNaN(n)?gi:(i+=1)+n>t.length?yi:(t=t.substr(i,n),e.C=i+n,t))}function _i(e){e.Y=Date.now()+e.P,Ii(e,e.P)}function Ii(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ni(bt(e.lb,e),t)}function Ei(e){e.B&&(dt.clearTimeout(e.B),e.B=null)}function Si(e){0==e.l.H||e.J||Hs(e.l,e)}function Ci(e){Ei(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,jn(e.V),zn(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Ai(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||ns(n.h,e)))if(!e.K&&ns(n.h,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Bs(n),Ps(n)}Vs(n),ei(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&0==n.A&&!n.v&&(n.v=ni(bt(n.ib,n),6e3));if(1>=ts(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else $s(n,11)}else if((e.K||n.g==e)&&Bs(n),!Nt(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const t=u[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const s=u[4];null!=s&&(n.Ga=s,n.j.info("SVER="+n.Ga));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=i.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(is(o,o.h),o.h=null))}if(i.F){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,Mi(i.G,i.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var r=e;if((i=n).wa=Gs(i,i.I?i.oa:null,i.Y),r.K){ss(i.h,r);var a=r,h=i.K;h&&a.setTimeout(h),a.B&&(Ei(a),_i(a)),i.g=r}else Us(i);0<n.i.length&&Ls(n)}else"stop"!=u[0]&&"close"!=u[0]||$s(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?$s(n,7):xs(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}Xn()}catch(e){}}function Ni(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(mt(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(mt(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(mt(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,o=0;o<s;o++)t.call(void 0,i[o],n&&n[o],e)}(ht=fi.prototype).setTimeout=function(e){this.P=e},ht.nb=function(e){e=e.target;const t=this.M;t&&3==Ss(e)?t.l():this.Pa(e)},ht.Pa=function(e){try{if(e==this.g)e:{const c=Ss(this.g);var t=this.g.Ia();this.g.da();if(!(3>c)&&(3!=c||qt||this.g&&(this.h.h||this.g.ja()||Cs(this.g)))){this.J||4!=c||7==t||Xn(),Ei(this);var n=this.g.da();this.aa=n;t:if(bi(this)){var i=Cs(this.g);e="";var s=i.length,o=4==Ss(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ci(this),Si(this);var r="";break t}this.h.i=new dt.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:o&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,r=this.h.g}else r=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,o,r){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+o+" "+r}))}(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nt(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ei(12),Ci(this),Si(this);break e}Kn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ai(this,n)}this.S?(Ti(this,c,r),qt&&this.i&&3==c&&(Hn(this.U,this.V,"tick",this.mb),this.V.start())):(Kn(this.j,this.m,r,null),Ai(this,r)),4==c&&Ci(this),this.i&&!this.J&&(4==c?Hs(this.l,this):(this.i=!1,_i(this)))}else 400==n&&0<r.indexOf("Unknown SID")?(this.o=3,ei(12)):(this.o=0,ei(13)),Ci(this),Si(this)}}}catch(e){}},ht.mb=function(){if(this.g){var e=Ss(this.g),t=this.g.ja();this.C<t.length&&(Ei(this),Ti(this,e,t),this.i&&4!=e&&_i(this))}},ht.cancel=function(){this.J=!0,Ci(this)},ht.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Xn(),ei(17)),Ci(this),this.o=2,Si(this)):Ii(this,this.Y-e)};var Di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ri(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ri){this.h=void 0!==t?t:e.h,Pi(this,e.j),this.s=e.s,this.g=e.g,Oi(this,e.m),this.l=e.l,t=e.i;var n=new $i;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Li(this,n),this.o=e.o}else e&&(n=String(e).match(Di))?(this.h=!!t,Pi(this,n[1]||"",!0),this.s=ji(n[2]||""),this.g=ji(n[3]||"",!0),Oi(this,n[4]),this.l=ji(n[5]||"",!0),Li(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.h=!!t,this.i=new $i(null,this.h))}function xi(e){return new Ri(e)}function Pi(e,t,n){e.j=n?ji(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Oi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Li(e,t,n){t instanceof $i?(e.i=t,function(e,t){t&&!e.j&&(Ki(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gi(this,t),Qi(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Ui(t,Hi)),e.i=new $i(t,e.h))}function Mi(e,t,n){e.i.set(t,n)}function Fi(e){return Mi(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ji(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ui(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Vi),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vi(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ri.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ui(t,qi,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ui(t,qi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ui(n,"/"==n.charAt(0)?Bi:Wi,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ui(n,zi)),e.join("")};var qi=/[#\/\?@]/g,Wi=/[#\?:]/g,Bi=/[#\?]/g,Hi=/[#\?@]/g,zi=/#/g;function $i(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ki(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var o=e[n].substring(0,i);s=e[n].substring(i+1)}else o=e[n];t(o,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gi(e,t){Ki(e),t=Ji(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Yi(e,t){return Ki(e),t=Ji(e,t),e.g.has(t)}function Qi(e,t,n){Gi(e,t),0<n.length&&(e.i=null,e.g.set(Ji(e,t),Et(n)),e.h+=n.length)}function Ji(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(ht=$i.prototype).add=function(e,t){Ki(this),this.i=null,e=Ji(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},ht.forEach=function(e,t){Ki(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},ht.sa=function(){Ki(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},ht.Z=function(e){Ki(this);let t=[];if("string"==typeof e)Yi(this,e)&&(t=t.concat(this.g.get(Ji(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},ht.set=function(e,t){return Ki(this),this.i=null,Yi(this,e=Ji(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},ht.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},ht.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const o=encodeURIComponent(String(i)),r=this.Z(i);for(i=0;i<r.length;i++){var s=o;""!==r[i]&&(s+="="+encodeURIComponent(String(r[i]))),e.push(s)}}return this.i=e.join("&")};function Xi(e){this.l=e||Zi,dt.PerformanceNavigationTiming?e=0<(e=dt.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(dt.g&&dt.g.Ka&&dt.g.Ka()&&dt.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zi=10;function es(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ts(e){return e.h?1:e.g?e.g.size:0}function ns(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function is(e,t){e.g?e.g.add(t):e.h=t}function ss(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function os(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Et(e.i)}function rs(){}function as(){this.g=new rs}function hs(e,t,n){const i=n||"";try{Ni(e,(function(e,n){let s=e;pt(e)&&(s=Cn(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function us(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function cs(e){this.l=e.fc||null,this.j=e.ob||!1}function ls(e,t){In.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ds,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xi.prototype.cancel=function(){if(this.i=os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},rs.prototype.stringify=function(e){return dt.JSON.stringify(e,void 0)},rs.prototype.parse=function(e){return dt.JSON.parse(e,void 0)},kt(cs,oi),cs.prototype.g=function(){return new ls(this.l,this.j)},cs.prototype.i=function(e){return function(){return e}}({}),kt(ls,In);var ds=0;function fs(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ms(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ps(e)}function ps(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(ht=ls.prototype).open=function(e,t){if(this.readyState!=ds)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ps(this)},ht.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||dt).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},ht.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ms(this)),this.readyState=ds},ht.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==dt.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fs(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},ht.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ms(this):ps(this),3==this.readyState&&fs(this)}},ht.Za=function(e){this.g&&(this.response=this.responseText=e,ms(this))},ht.Ya=function(e){this.g&&(this.response=e,ms(this))},ht.ka=function(){this.g&&ms(this)},ht.setRequestHeader=function(e,t){this.v.append(e,t)},ht.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},ht.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var gs=dt.JSON.parse;function ys(e){In.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ws,this.L=this.M=!1}kt(ys,In);var ws="",vs=/^https?$/i,bs=["POST","PUT"];function Ts(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ks(e),Is(e)}function ks(e){e.F||(e.F=!0,En(e,"complete"),En(e,"error"))}function _s(e){if(e.h&&void 0!==lt&&(!e.C[1]||4!=Ss(e)||2!=e.da()))if(e.v&&4==Ss(e))Un(e.La,0,e);else if(En(e,"readystatechange"),4==Ss(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.I).match(Di)[1]||null;if(!s&&dt.self&&dt.self.location){var o=dt.self.location.protocol;s=o.substr(0,o.length-1)}i=!vs.test(s?s.toLowerCase():"")}n=i}if(n)En(e,"complete"),En(e,"success");else{e.m=6;try{var r=2<Ss(e)?e.g.statusText:""}catch(e){r=""}e.j=r+" ["+e.da()+"]",ks(e)}}finally{Is(e)}}}function Is(e,t){if(e.g){Es(e);const n=e.g,i=e.C[0]?ft:null;e.g=null,e.C=null,t||En(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Es(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(dt.clearTimeout(e.A),e.A=null)}function Ss(e){return e.g?e.g.readyState:0}function Cs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ws:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function As(e){let t="";return on(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ns(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=As(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Mi(e,t,n))}function Ds(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Rs(e){this.Ga=0,this.i=[],this.j=new $n,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ds("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ds("baseRetryDelayMs",5e3,e),this.hb=Ds("retryDelaySeedMs",1e4,e),this.eb=Ds("forwardChannelMaxRetries",2,e),this.xa=Ds("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Xi(e&&e.concurrentRequestLimit),this.Ja=new as,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function xs(e){if(Os(e),3==e.H){var t=e.W++,n=xi(e.G);Mi(n,"SID",e.J),Mi(n,"RID",t),Mi(n,"TYPE","terminate"),Fs(e,n),(t=new fi(e,e.j,t,void 0)).L=2,t.v=Fi(xi(n)),n=!1,dt.navigator&&dt.navigator.sendBeacon&&(n=dt.navigator.sendBeacon(t.v.toString(),"")),!n&&dt.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ys(t.l,null),t.g.ha(t.v)),t.G=Date.now(),_i(t)}Ks(e)}function Ps(e){e.g&&(qs(e),e.g.cancel(),e.g=null)}function Os(e){Ps(e),e.u&&(dt.clearTimeout(e.u),e.u=null),Bs(e),e.h.cancel(),e.m&&("number"==typeof e.m&&dt.clearTimeout(e.m),e.m=null)}function Ls(e){es(e.h)||e.m||(e.m=!0,Pn(e.Na,e),e.C=0)}function Ms(e,t){var n;n=t?t.m:e.W++;const i=xi(e.G);Mi(i,"SID",e.J),Mi(i,"RID",n),Mi(i,"AID",e.V),Fs(e,i),e.o&&e.s&&Ns(i,e.o,e.s),n=new fi(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=js(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),is(e.h,n),wi(n,i,t)}function Fs(e,t){e.ma&&on(e.ma,(function(e,n){Mi(t,n,e)})),e.l&&Ni({},(function(e,n){Mi(t,n,e)}))}function js(e,t,n){n=Math.min(e.i.length,n);var i=e.l?bt(e.l.Va,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let r=0;r<n;r++){let n=s[r].h;const a=s[r].g;if(n-=t,0>n)t=Math.max(0,s[r].h-100),o=!1;else try{hs(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(o){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,i}function Us(e){e.g||e.u||(e.ba=1,Pn(e.Ma,e),e.A=0)}function Vs(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ni(bt(e.Ma,e),zs(e,e.A)),e.A++,!0)}function qs(e){null!=e.B&&(dt.clearTimeout(e.B),e.B=null)}function Ws(e){e.g=new fi(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=xi(e.wa);Mi(t,"RID","rpc"),Mi(t,"SID",e.J),Mi(t,"CI",e.M?"0":"1"),Mi(t,"AID",e.V),Mi(t,"TYPE","xmlhttp"),Fs(e,t),e.o&&e.s&&Ns(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Fi(xi(t)),n.s=null,n.S=!0,vi(n,e)}function Bs(e){null!=e.v&&(dt.clearTimeout(e.v),e.v=null)}function Hs(e,t){var n=null;if(e.g==t){Bs(e),qs(e),e.g=null;var i=2}else{if(!ns(e.h,t))return;n=t.F,ss(e.h,t),i=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;En(i=Qn(),new ti(i,n)),Ls(e)}else Us(e);else if(3==(s=t.o)||0==s&&0<e.ta||!(1==i&&function(e,t){return!(ts(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=ni(bt(e.Na,e,t),zs(e,e.C)),e.C++,0)))}(e,t)||2==i&&Vs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:$s(e,5);break;case 4:$s(e,10);break;case 3:$s(e,6);break;default:$s(e,2)}}function zs(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function $s(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=bt(e.pb,e);n||(n=new Ri("//www.google.com/images/cleardot.gif"),dt.location&&"http"==dt.location.protocol||Pi(n,"https"),Fi(n)),function(e,t){const n=new $n;if(dt.Image){const i=new Image;i.onload=Tt(us,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Tt(us,n,i,"TestLoadImage: error",!1,t),i.onabort=Tt(us,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Tt(us,n,i,"TestLoadImage: timeout",!1,t),dt.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else ei(2);e.H=0,e.l&&e.l.za(t),Ks(e),Os(e)}function Ks(e){if(e.H=0,e.pa=[],e.l){const t=os(e.h);0==t.length&&0==e.i.length||(St(e.pa,t),St(e.pa,e.i),e.h.i.length=0,Et(e.i),e.i.length=0),e.l.ya()}}function Gs(e,t,n){var i=n instanceof Ri?xi(n):new Ri(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),Oi(i,i.m);else{var s=dt.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new Ri(null,void 0);i&&Pi(o,i),t&&(o.g=t),s&&Oi(o,s),n&&(o.l=n),i=o}return n=e.F,t=e.Da,n&&t&&Mi(i,n,t),Mi(i,"VER",e.qa),Fs(e,i),i}function Ys(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new ys(new cs({ob:!0})):new ys(e.va)).Oa(e.I),t}function Qs(){}function Js(){if(Ut&&!(10<=Number(Jt)))throw Error("Environmental error: no available transport.")}function Xs(e,t){In.call(this),this.g=new Rs(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Nt(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Nt(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new to(this)}function Zs(e){ci.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function eo(){li.call(this),this.status=1}function to(e){this.g=e}function no(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function io(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var o=e.g[3],r=t+(o^n&(s^o))+i[0]+3614090360&4294967295;r=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=(n=(s=(o=(t=n+(r<<7&4294967295|r>>>25))+((r=o+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|r>>>20))+((r=s+(n^o&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|r>>>15))+((r=n+(t^s&(o^t))+i[3]+3250441966&4294967295)<<22&4294967295|r>>>10))+((r=t+(o^n&(s^o))+i[4]+4118548399&4294967295)<<7&4294967295|r>>>25))+((r=o+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|r>>>20))+((r=s+(n^o&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|r>>>15))+((r=n+(t^s&(o^t))+i[7]+4249261313&4294967295)<<22&4294967295|r>>>10))+((r=t+(o^n&(s^o))+i[8]+1770035416&4294967295)<<7&4294967295|r>>>25))+((r=o+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|r>>>20))+((r=s+(n^o&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|r>>>15))+((r=n+(t^s&(o^t))+i[11]+2304563134&4294967295)<<22&4294967295|r>>>10))+((r=t+(o^n&(s^o))+i[12]+1804603682&4294967295)<<7&4294967295|r>>>25))+((r=o+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|r>>>20))+((r=s+(n^o&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|r>>>15))+((r=n+(t^s&(o^t))+i[15]+1236535329&4294967295)<<22&4294967295|r>>>10))+((r=t+(s^o&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|r>>>27))+((r=o+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|r>>>23))+((r=s+(t^n&(o^t))+i[11]+643717713&4294967295)<<14&4294967295|r>>>18))+((r=n+(o^t&(s^o))+i[0]+3921069994&4294967295)<<20&4294967295|r>>>12))+((r=t+(s^o&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|r>>>27))+((r=o+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|r>>>23))+((r=s+(t^n&(o^t))+i[15]+3634488961&4294967295)<<14&4294967295|r>>>18))+((r=n+(o^t&(s^o))+i[4]+3889429448&4294967295)<<20&4294967295|r>>>12))+((r=t+(s^o&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|r>>>27))+((r=o+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|r>>>23))+((r=s+(t^n&(o^t))+i[3]+4107603335&4294967295)<<14&4294967295|r>>>18))+((r=n+(o^t&(s^o))+i[8]+1163531501&4294967295)<<20&4294967295|r>>>12))+((r=t+(s^o&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|r>>>27))+((r=o+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|r>>>23))+((r=s+(t^n&(o^t))+i[7]+1735328473&4294967295)<<14&4294967295|r>>>18))+((r=n+(o^t&(s^o))+i[12]+2368359562&4294967295)<<20&4294967295|r>>>12))+((r=t+(n^s^o)+i[5]+4294588738&4294967295)<<4&4294967295|r>>>28))+((r=o+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|r>>>21))+((r=s+(o^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|r>>>16))+((r=n+(s^o^t)+i[14]+4259657740&4294967295)<<23&4294967295|r>>>9))+((r=t+(n^s^o)+i[1]+2763975236&4294967295)<<4&4294967295|r>>>28))+((r=o+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|r>>>21))+((r=s+(o^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|r>>>16))+((r=n+(s^o^t)+i[10]+3200236656&4294967295)<<23&4294967295|r>>>9))+((r=t+(n^s^o)+i[13]+681279174&4294967295)<<4&4294967295|r>>>28))+((r=o+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|r>>>21))+((r=s+(o^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|r>>>16))+((r=n+(s^o^t)+i[6]+76029189&4294967295)<<23&4294967295|r>>>9))+((r=t+(n^s^o)+i[9]+3654602809&4294967295)<<4&4294967295|r>>>28))+((r=o+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|r>>>21))+((r=s+(o^t^n)+i[15]+530742520&4294967295)<<16&4294967295|r>>>16))+((r=n+(s^o^t)+i[2]+3299628645&4294967295)<<23&4294967295|r>>>9))+((r=t+(s^(n|~o))+i[0]+4096336452&4294967295)<<6&4294967295|r>>>26))+((r=o+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|r>>>22))+((r=s+(t^(o|~n))+i[14]+2878612391&4294967295)<<15&4294967295|r>>>17))+((r=n+(o^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|r>>>11))+((r=t+(s^(n|~o))+i[12]+1700485571&4294967295)<<6&4294967295|r>>>26))+((r=o+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|r>>>22))+((r=s+(t^(o|~n))+i[10]+4293915773&4294967295)<<15&4294967295|r>>>17))+((r=n+(o^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|r>>>11))+((r=t+(s^(n|~o))+i[8]+1873313359&4294967295)<<6&4294967295|r>>>26))+((r=o+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|r>>>22))+((r=s+(t^(o|~n))+i[6]+2734768916&4294967295)<<15&4294967295|r>>>17))+((r=n+(o^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|r>>>11))+((o=(t=n+((r=t+(s^(n|~o))+i[4]+4149444226&4294967295)<<6&4294967295|r>>>26))+((r=o+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|r>>>22))^((s=o+((r=s+(t^(o|~n))+i[2]+718787259&4294967295)<<15&4294967295|r>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(r<<21&4294967295|r>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+o&4294967295}function so(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var o=0|e[s];i&&o==t||(n[s]=o,i=!1)}this.g=n}(ht=ys.prototype).Oa=function(e){this.M=e},ht.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hi.g(),this.C=this.u?ri(this.u):ri(hi),this.g.onreadystatechange=bt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Ts(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=dt.FormData&&e instanceof dt.FormData,!(0<=It(bs,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Es(this),0<this.B&&((this.L=function(e){return Ut&&Lt(Yt,9,(function(){let e=0;const t=Dt(String(Mt)).split("."),n=Dt("9").split("."),i=Math.max(t.length,n.length);for(let r=0;0==e&&r<i;r++){var s=t[r]||"",o=n[r]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=Rt(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||Rt(0==s[2].length,0==o[2].length)||Rt(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.ua,this)):this.A=Un(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Ts(this,e)}},ht.ua=function(){void 0!==lt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,En(this,"timeout"),this.abort(8))},ht.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,En(this,"complete"),En(this,"abort"),Is(this))},ht.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Is(this,!0)),ys.$.N.call(this)},ht.La=function(){this.s||(this.G||this.v||this.l?_s(this):this.kb())},ht.kb=function(){_s(this)},ht.da=function(){try{return 2<Ss(this)?this.g.status:-1}catch(e){return-1}},ht.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},ht.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),gs(t)}},ht.Ia=function(){return this.m},ht.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ht=Rs.prototype).qa=8,ht.H=1,ht.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new fi(this,this.j,e,void 0);let o=this.s;if(this.U&&(o?(o=rn(o),hn(o,this.U)):o=this.U),null!==this.o||this.O||(s.I=o,o=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=js(this,s,t),Mi(n=xi(this.G),"RID",e),Mi(n,"CVER",22),this.F&&Mi(n,"X-HTTP-Session-Id",this.F),Fs(this,n),o&&(this.O?t="headers="+encodeURIComponent(String(As(o)))+"&"+t:this.o&&Ns(n,this.o,o)),is(this.h,s),this.bb&&Mi(n,"TYPE","init"),this.P?(Mi(n,"$req",t),Mi(n,"SID","null"),s.ba=!0,wi(s,n,null)):wi(s,n,t),this.H=2}}else 3==this.H&&(e?Ms(this,e):0==this.i.length||es(this.h)||Ms(this))},ht.Ma=function(){if(this.u=null,Ws(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=ni(bt(this.jb,this),e)}},ht.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ei(10),Ps(this),Ws(this))},ht.ib=function(){null!=this.v&&(this.v=null,Ps(this),Vs(this),ei(19))},ht.pb=function(e){e?(this.j.info("Successfully pinged google.com"),ei(2)):(this.j.info("Failed to ping google.com"),ei(1))},(ht=Qs.prototype).Ba=function(){},ht.Aa=function(){},ht.za=function(){},ht.ya=function(){},ht.Va=function(){},Js.prototype.g=function(e,t){return new Xs(e,t)},kt(Xs,In),Xs.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;ei(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Gs(e,null,e.Y),Ls(e)},Xs.prototype.close=function(){xs(this.g)},Xs.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Cn(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&Ls(t)},Xs.prototype.N=function(){this.g.l=null,delete this.j,xs(this.g),delete this.g,Xs.$.N.call(this)},kt(Zs,ci),kt(eo,li),kt(to,Qs),to.prototype.Ba=function(){En(this.g,"a")},to.prototype.Aa=function(e){En(this.g,new Zs(e))},to.prototype.za=function(e){En(this.g,new eo)},to.prototype.ya=function(){En(this.g,"b")},kt(no,(function(){this.blockSize=-1})),no.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},no.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,o=0;o<t;){if(0==s)for(;o<=n;)io(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){io(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){io(this,i),s=0;break}}this.h=s,this.i+=t},no.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var oo={};function ro(e){return-128<=e&&128>e?Lt(oo,e,(function(e){return new so([0|e],0>e?-1:0)})):new so([0|e],0>e?-1:0)}function ao(e){if(isNaN(e)||!isFinite(e))return uo;if(0>e)return po(ao(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=ho;return new so(t,0)}var ho=4294967296,uo=ro(0),co=ro(1),lo=ro(16777216);function fo(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function mo(e){return-1==e.h}function po(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new so(n,~e.h).add(co)}function go(e,t){return e.add(po(t))}function yo(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function wo(e,t){this.g=e,this.h=t}function vo(e,t){if(fo(t))throw Error("division by zero");if(fo(e))return new wo(uo,uo);if(mo(e))return t=vo(po(e),t),new wo(po(t.g),po(t.h));if(mo(t))return t=vo(e,po(t)),new wo(po(t.g),t.h);if(30<e.g.length){if(mo(e)||mo(t))throw Error("slowDivide_ only works with positive integers.");for(var n=co,i=t;0>=i.X(e);)n=bo(n),i=bo(i);var s=To(n,1),o=To(i,1);for(i=To(i,2),n=To(n,2);!fo(i);){var r=o.add(i);0>=r.X(e)&&(s=s.add(n),o=r),i=To(i,1),n=To(n,1)}return t=go(e,s.R(t)),new wo(s,t)}for(s=uo;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),r=(o=ao(n)).R(t);mo(r)||0<r.X(e);)r=(o=ao(n-=i)).R(t);fo(o)&&(o=co),s=s.add(o),e=go(e,r)}return new wo(s,e)}function bo(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new so(n,e.h)}function To(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.D(o+n)>>>t|e.D(o+n+1)<<32-t:e.D(o+n);return new so(s,e.h)}(ht=so.prototype).ea=function(){if(mo(this))return-po(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:ho+i)*t,t*=ho}return e},ht.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(fo(this))return"0";if(mo(this))return"-"+po(this).toString(e);for(var t=ao(Math.pow(e,6)),n=this,i="";;){var s=vo(n,t).g,o=((0<(n=go(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(fo(n=s))return o+i;for(;6>o.length;)o="0"+o;i=o+i}},ht.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},ht.X=function(e){return mo(e=go(this,e))?-1:fo(e)?0:1},ht.abs=function(){return mo(this)?po(this):this},ht.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.D(s))+(65535&e.D(s)),r=(o>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=r>>>16,o&=65535,r&=65535,n[s]=r<<16|o}return new so(n,-2147483648&n[n.length-1]?-1:0)},ht.R=function(e){if(fo(this)||fo(e))return uo;if(mo(this))return mo(e)?po(this).R(po(e)):po(po(this).R(e));if(mo(e))return po(this.R(po(e)));if(0>this.X(lo)&&0>e.X(lo))return ao(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var o=this.D(i)>>>16,r=65535&this.D(i),a=e.D(s)>>>16,h=65535&e.D(s);n[2*i+2*s]+=r*h,yo(n,2*i+2*s),n[2*i+2*s+1]+=o*h,yo(n,2*i+2*s+1),n[2*i+2*s+1]+=r*a,yo(n,2*i+2*s+1),n[2*i+2*s+2]+=o*a,yo(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new so(n,0)},ht.gb=function(e){return vo(this,e).h},ht.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new so(n,this.h&e.h)},ht.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new so(n,this.h|e.h)},ht.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new so(n,this.h^e.h)},Js.prototype.createWebChannel=Js.prototype.g,Xs.prototype.send=Xs.prototype.u,Xs.prototype.open=Xs.prototype.m,Xs.prototype.close=Xs.prototype.close,ii.NO_ERROR=0,ii.TIMEOUT=8,ii.HTTP_ERROR=6,si.COMPLETE="complete",ai.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",In.prototype.listen=In.prototype.O,ys.prototype.listenOnce=ys.prototype.P,ys.prototype.getLastError=ys.prototype.Sa,ys.prototype.getLastErrorCode=ys.prototype.Ia,ys.prototype.getStatus=ys.prototype.da,ys.prototype.getResponseJson=ys.prototype.Wa,ys.prototype.getResponseText=ys.prototype.ja,ys.prototype.send=ys.prototype.ha,ys.prototype.setWithCredentials=ys.prototype.Oa,no.prototype.digest=no.prototype.l,no.prototype.reset=no.prototype.reset,no.prototype.update=no.prototype.j,so.prototype.add=so.prototype.add,so.prototype.multiply=so.prototype.R,so.prototype.modulo=so.prototype.gb,so.prototype.compare=so.prototype.X,so.prototype.toNumber=so.prototype.ea,so.prototype.toString=so.prototype.toString,so.prototype.getBits=so.prototype.D,so.fromNumber=ao,so.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return po(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=ao(Math.pow(n,8)),s=uo,o=0;o<t.length;o+=8){var r=Math.min(8,t.length-o),a=parseInt(t.substring(o,o+r),n);8>r?(r=ao(Math.pow(n,r)),s=s.R(r).add(ao(a))):s=(s=s.R(i)).add(ao(a))}return s};var ko=ct.createWebChannelTransport=function(){return new Js},_o=ct.getStatEventTarget=function(){return Qn()},Io=ct.ErrorCode=ii,Eo=ct.EventType=si,So=ct.Event=Gn,Co=ct.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ao=ct.FetchXmlHttpFactory=cs,No=ct.WebChannel=ai,Do=ct.XhrIo=ys,Ro=ct.Md5=no,xo=ct.Integer=so;
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
class Po{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}Po.UNAUTHENTICATED=new Po(null),Po.GOOGLE_CREDENTIALS=new Po("google-credentials-uid"),Po.FIRST_PARTY=new Po("first-party-uid"),Po.MOCK_USER=new Po("mock-user");
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
let Oo="9.22.0";
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
 */const Lo=new ke("@firebase/firestore");function Mo(){return Lo.logLevel}function Fo(e,...t){if(Lo.logLevel<=ge.DEBUG){const n=t.map(Vo);Lo.debug(`Firestore (${Oo}): ${e}`,...n)}}function jo(e,...t){if(Lo.logLevel<=ge.ERROR){const n=t.map(Vo);Lo.error(`Firestore (${Oo}): ${e}`,...n)}}function Uo(e,...t){if(Lo.logLevel<=ge.WARN){const n=t.map(Vo);Lo.warn(`Firestore (${Oo}): ${e}`,...n)}}function Vo(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function qo(e="Unexpected state"){const t=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+e;throw jo(t),new Error(t)}function Wo(e,t){e||qo()}function Bo(e,t){return e}
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
 */const Ho={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class zo extends Z{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class $o{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Ko{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Go{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Po.UNAUTHENTICATED)))}shutdown(){}}class Yo{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class Qo{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new $o;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $o,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},r=e=>{Fo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((e=>r(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?r(e):(Fo("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $o)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Fo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Wo("string"==typeof t.accessToken),new Ko(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Wo(null===e||"string"==typeof e),new Po(e)}constructor(e){this.t=e,this.currentUser=Po.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Jo{p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Po.FIRST_PARTY,this.g=new Map}}class Xo{getToken(){return Promise.resolve(new Jo(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Po.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.h=e,this.l=t,this.m=n}}class Zo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class er{start(e,t){const n=e=>{null!=e.error&&Fo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Fo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Fo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):Fo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Wo("string"==typeof e.token),this.T=e.token,new Zo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}}
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
function tr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class nr{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=tr(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function ir(e,t){return e<t?-1:e>t?1:0}function sr(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
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
class or{static now(){return or.fromMillis(Date.now())}static fromDate(e){return or.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new or(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ir(this.nanoseconds,e.nanoseconds):ir(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new zo(Ho.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new zo(Ho.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new zo(Ho.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new zo(Ho.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
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
 */class rr{static fromTimestamp(e){return new rr(e)}static min(){return new rr(new or(0,0))}static max(){return new rr(new or(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
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
 */class ar{get length(){return this.len}isEqual(e){return 0===ar.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&qo(),void 0===n?n=e.length-t:n>e.length-t&&qo(),this.segments=e,this.offset=t,this.len=n}}class hr extends ar{construct(e,t,n){return new hr(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new zo(Ho.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new hr(t)}static emptyPath(){return new hr([])}}const ur=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class cr extends ar{construct(e,t,n){return new cr(e,t,n)}static isValidIdentifier(e){return ur.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),cr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new cr(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new zo(Ho.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new zo(Ho.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new zo(Ho.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(o=!o,i++):"."!==t||o?(n+=t,i++):(s(),i++)}if(s(),o)throw new zo(Ho.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new cr(t)}static emptyPath(){return new cr([])}}
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
 */class lr{static fromPath(e){return new lr(hr.fromString(e))}static fromName(e){return new lr(hr.fromString(e).popFirst(5))}static empty(){return new lr(hr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===hr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return hr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new lr(new hr(e.slice()))}constructor(e){this.path=e}}
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
 */class dr{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}dr.UNKNOWN_ID=-1;function fr(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=rr.fromTimestamp(1e9===i?new or(n+1,0):new or(n,i));return new pr(s,lr.empty(),t)}function mr(e){return new pr(e.readTime,e.key,-1)}class pr{static min(){return new pr(rr.min(),lr.empty(),-1)}static max(){return new pr(rr.max(),lr.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function gr(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=lr.comparator(e.documentKey,t.documentKey),0!==n?n:ir(e.largestBatchId,t.largestBatchId))}
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
 */const yr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wr{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function vr(e){if(e.code!==Ho.FAILED_PRECONDITION||e.message!==yr)throw e;Fo("LocalStore","Unexpectedly lost primary lease")}
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
 */class br{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&qo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new br(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof br?t:br.resolve(t)}catch(e){return br.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):br.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):br.reject(t)}static resolve(e){return new br(((t,n)=>{t(e)}))}static reject(e){return new br(((t,n)=>{n(e)}))}static waitFor(e){return new br(((t,n)=>{let i=0,s=0,o=!1;e.forEach((e=>{++i,e.next((()=>{++s,o&&s===i&&t()}),(e=>n(e)))})),o=!0,s===i&&t()}))}static or(e){let t=br.resolve(!1);for(const n of e)t=t.next((e=>e?br.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new br(((n,i)=>{const s=e.length,o=new Array(s);let r=0;for(let a=0;a<s;a++){const h=a;t(e[h]).next((e=>{o[h]=e,++r,r===s&&n(o)}),(e=>i(e)))}}))}static doWhile(e,t){return new br(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
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
 */function Tr(e){return"IndexedDbTransactionError"===e.name}
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
class kr{ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}}function _r(e){return null==e}function Ir(e){return 0===e&&1/e==-1/0}function Er(e){return"number"==typeof e&&Number.isInteger(e)&&!Ir(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */kr.ct=-1;const Sr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Cr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ar=Cr;
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
function Nr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Dr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Rr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class xr{insert(e,t){return new xr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Or.BLACK,null,null))}remove(e){return new xr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Or.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Or.EMPTY}}class Pr{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Or{copy(e,t,n,i,s){return new Or(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Or.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Or.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Or.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw qo();if(this.right.isRed())throw qo();const e=this.left.check();if(e!==this.right.check())throw qo();return e+(this.isRed()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Or.RED,this.left=null!=i?i:Or.EMPTY,this.right=null!=s?s:Or.EMPTY,this.size=this.left.size+1+this.right.size}}Or.EMPTY=null,Or.RED=!0,Or.BLACK=!1,Or.EMPTY=new class{get key(){throw qo()}get value(){throw qo()}get color(){throw qo()}get left(){throw qo()}get right(){throw qo()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Or(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class Lr{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mr(this.data.getIterator())}getIteratorFrom(e){return new Mr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Lr))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Lr(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new xr(this.comparator)}}class Mr{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
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
class Fr{static empty(){return new Fr([])}unionWith(e){let t=new Lr(cr.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Fr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(cr.comparator)}}
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
 */class jr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */let Ur=Symbol.iterator;
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
 */class Vr{static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new jr("Invalid base64 string: "+e):e}}(e);return new Vr(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Vr(t)}[Ur](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ir(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Vr.EMPTY_BYTE_STRING=new Vr("");const qr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(e){if(Wo(!!e),"string"==typeof e){let t=0;const n=qr.exec(e);if(Wo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Br(e.seconds),nanos:Br(e.nanos)}}function Br(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Hr(e){return"string"==typeof e?Vr.fromBase64String(e):Vr.fromUint8Array(e)}
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
 */function zr(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function $r(e){const t=e.mapValue.fields.__previous_value__;return zr(t)?$r(t):t}function Kr(e){const t=Wr(e.mapValue.fields.__local_write_time__.timestampValue);return new or(t.seconds,t.nanos)}
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
 */class Gr{constructor(e,t,n,i,s,o,r,a,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=r,this.longPollingOptions=a,this.useFetchStreams=h}}class Yr{static empty(){return new Yr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Yr&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}
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
 */const Qr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?zr(e)?4:la(e)?9007199254740991:10:qo()}function Xr(e,t){if(e===t)return!0;const n=Jr(e);if(n!==Jr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Kr(e).isEqual(Kr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Wr(e.timestampValue),i=Wr(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,Hr(e.bytesValue).isEqual(Hr(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Br(e.geoPointValue.latitude)===Br(t.geoPointValue.latitude)&&Br(e.geoPointValue.longitude)===Br(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Br(e.integerValue)===Br(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Br(e.doubleValue),i=Br(t.doubleValue);return n===i?Ir(n)===Ir(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return sr(e.arrayValue.values||[],t.arrayValue.values||[],Xr);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Nr(n)!==Nr(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Xr(n[e],i[e])))return!1;return!0}(e,t);default:return qo()}var i}function Zr(e,t){return void 0!==(e.values||[]).find((e=>Xr(e,t)))}function ea(e,t){if(e===t)return 0;const n=Jr(e),i=Jr(t);if(n!==i)return ir(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ir(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Br(e.integerValue||e.doubleValue),i=Br(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return ta(e.timestampValue,t.timestampValue);case 4:return ta(Kr(e),Kr(t));case 5:return ir(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Hr(e),i=Hr(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=ir(n[e],i[e]);if(0!==t)return t}return ir(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ir(Br(e.latitude),Br(t.latitude));return 0!==n?n:ir(Br(e.longitude),Br(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=ea(n[e],i[e]);if(t)return t}return ir(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Qr.mapValue&&t===Qr.mapValue)return 0;if(e===Qr.mapValue)return 1;if(t===Qr.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},o=Object.keys(s);i.sort(),o.sort();for(let e=0;e<i.length&&e<o.length;++e){const t=ir(i[e],o[e]);if(0!==t)return t;const r=ea(n[i[e]],s[o[e]]);if(0!==r)return r}return ir(i.length,o.length)}(e.mapValue,t.mapValue);default:throw qo()}}function ta(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ir(e,t);const n=Wr(e),i=Wr(t),s=ir(n.seconds,i.seconds);return 0!==s?s:ir(n.nanos,i.nanos)}function na(e){return ia(e)}function ia(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Wr(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Hr(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,lr.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=ia(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${ia(e.fields[s])}`;return n+"}"}(e.mapValue):qo()}function sa(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function oa(e){return!!e&&"integerValue"in e}function ra(e){return!!e&&"arrayValue"in e}function aa(e){return!!e&&"nullValue"in e}function ha(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ua(e){return!!e&&"mapValue"in e}function ca(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Dr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ca(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ca(e.arrayValue.values[n]);return t}return Object.assign({},e)}function la(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class da{static empty(){return new da({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ua(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ca(t)}setAll(e){let t=cr.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=ca(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());ua(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Dr(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new da(ca(this.value))}constructor(e){this.value=e}}function fa(e){const t=[];return Dr(e.fields,((e,n)=>{const i=new cr([e]);if(ua(n)){const e=fa(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Fr(t)
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
 */}class ma{static newInvalidDocument(e){return new ma(e,0,rr.min(),rr.min(),rr.min(),da.empty(),0)}static newFoundDocument(e,t,n,i){return new ma(e,1,t,rr.min(),n,i,0)}static newNoDocument(e,t){return new ma(e,2,t,rr.min(),rr.min(),da.empty(),0)}static newUnknownDocument(e,t){return new ma(e,3,t,rr.min(),rr.min(),da.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(rr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=da.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=da.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ma&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ma(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,s,o,r){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=r}}
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
 */class pa{constructor(e,t){this.position=e,this.inclusive=t}}function ga(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const o=t[s],r=e.position[s];if(i=o.field.isKeyField()?lr.comparator(lr.fromName(r.referenceValue),n.key):ea(r,n.data.field(o.field)),"desc"===o.dir&&(i*=-1),0!==i)break}return i}function ya(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Xr(e.position[n],t.position[n]))return!1;return!0}
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
 */class wa{constructor(e,t="asc"){this.field=e,this.dir=t}}function va(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class ba{}class Ta extends ba{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Na(e,t,n):"array-contains"===t?new Pa(e,n):"in"===t?new Oa(e,n):"not-in"===t?new La(e,n):"array-contains-any"===t?new Ma(e,n):new Ta(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Da(e,n):new Ra(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ea(t,this.value)):null!==t&&Jr(this.value)===Jr(t)&&this.matchesComparison(ea(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return qo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class ka extends ba{static create(e,t){return new ka(e,t)}matches(e){return _a(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}}function _a(e){return"and"===e.op}function Ia(e){return Ea(e)&&_a(e)}function Ea(e){for(const t of e.filters)if(t instanceof ka)return!1;return!0}function Sa(e){if(e instanceof Ta)return e.field.canonicalString()+e.op.toString()+na(e.value);if(Ia(e))return e.filters.map((e=>Sa(e))).join(",");{const t=e.filters.map((e=>Sa(e))).join(",");return`${e.op}(${t})`}}function Ca(e,t){return e instanceof Ta?(n=e,(i=t)instanceof Ta&&n.op===i.op&&n.field.isEqual(i.field)&&Xr(n.value,i.value)):e instanceof ka?function(e,t){return t instanceof ka&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&Ca(n,t.filters[i])),!0)}(e,t):void qo();var n,i}function Aa(e){return e instanceof Ta?`${(t=e).field.canonicalString()} ${t.op} ${na(t.value)}`:e instanceof ka?function(e){return e.op.toString()+" {"+e.getFilters().map(Aa).join(" ,")+"}"}(e):"Filter";var t}class Na extends Ta{matches(e){const t=lr.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=lr.fromName(n.referenceValue)}}class Da extends Ta{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=xa("in",t)}}class Ra extends Ta{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=xa("not-in",t)}}function xa(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>lr.fromName(e.referenceValue)))}class Pa extends Ta{matches(e){const t=e.data.field(this.field);return ra(t)&&Zr(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Oa extends Ta{matches(e){const t=e.data.field(this.field);return null!==t&&Zr(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class La extends Ta{matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Zr(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Ma extends Ta{matches(e){const t=e.data.field(this.field);return!(!ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Zr(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}
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
 */class Fa{constructor(e,t=null,n=[],i=[],s=null,o=null,r=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=r,this.dt=null}}function ja(e,t=null,n=[],i=[],s=null,o=null,r=null){return new Fa(e,t,n,i,s,o,r)}function Ua(e){const t=Bo(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Sa(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),_r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>na(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>na(e))).join(",")),t.dt=e}return t.dt}function Va(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!va(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ca(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ya(e.startAt,t.startAt)&&ya(e.endAt,t.endAt)}function qa(e){return lr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class Wa{constructor(e,t=null,n=[],i=[],s=null,o="F",r=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=r,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Ba(e,t,n,i,s,o,r,a){return new Wa(e,t,n,i,s,o,r,a)}function Ha(e){return new Wa(e)}function za(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $a(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ka(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Ga(e){return null!==e.collectionGroup}function Ya(e){const t=Bo(e);if(null===t.wt){t.wt=[];const e=Ka(t),n=$a(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new wa(e)),t.wt.push(new wa(cr.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new wa(cr.keyField(),e))}}}return t.wt}function Qa(e){const t=Bo(e);if(!t._t)if("F"===t.limitType)t._t=ja(t.path,t.collectionGroup,Ya(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ya(t)){const t="desc"===n.dir?"asc":"desc";e.push(new wa(n.field,t))}const n=t.endAt?new pa(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new pa(t.startAt.position,t.startAt.inclusive):null;t._t=ja(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function Ja(e,t){t.getFirstInequalityField(),Ka(e);const n=e.filters.concat([t]);return new Wa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Xa(e,t,n){return new Wa(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Za(e,t){return Va(Qa(e),Qa(t))&&e.limitType===t.limitType}function eh(e){return`${Ua(Qa(e))}|lt:${e.limitType}`}function th(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Aa(e))).join(", ")}]`),_r(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>na(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>na(e))).join(",")),`Target(${t})`}(Qa(e))}; limitType=${e.limitType})`}function nh(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):lr.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ya(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=ga(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,Ya(n),i)||n.endAt&&!function(e,t,n){const i=ga(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,Ya(n),i)));var n,i}function ih(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function sh(e){return(t,n)=>{let i=!1;for(const s of Ya(e)){const e=oh(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function oh(e,t,n){const i=e.field.isKeyField()?lr.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?ea(i,s):qo()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return qo()}}
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
 */class rh{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Rr(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
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
 */const ah=new xr(lr.comparator);function hh(){return ah}const uh=new xr(lr.comparator);function ch(...e){let t=uh;for(const n of e)t=t.insert(n.key,n);return t}function lh(e){let t=uh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function dh(){return mh()}function fh(){return mh()}function mh(){return new rh((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ph=new xr(lr.comparator),gh=new Lr(lr.comparator);function yh(...e){let t=gh;for(const n of e)t=t.add(n);return t}const wh=new Lr(ir);function vh(){return wh}
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
 */function bh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(t)?"-0":t}}function Th(e){return{integerValue:""+e}}function kh(e,t){return Er(t)?Th(t):bh(e,t)}
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
 */class _h{constructor(){this._=void 0}}function Ih(e,t,n){return e instanceof Ch?Ah(e,t):e instanceof Nh?Dh(e,t):n}function Eh(e,t){var n,i;return e instanceof Rh?oa(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class Sh extends _h{}class Ch extends _h{constructor(e){super(),this.elements=e}}function Ah(e,t){const n=Ph(t);for(const t of e.elements)n.some((e=>Xr(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Nh extends _h{constructor(e){super(),this.elements=e}}function Dh(e,t){let n=Ph(t);for(const t of e.elements)n=n.filter((e=>!Xr(e,t)));return{arrayValue:{values:n}}}class Rh extends _h{constructor(e,t){super(),this.serializer=e,this.gt=t}}function xh(e){return Br(e.integerValue||e.doubleValue)}function Ph(e){return ra(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Oh{constructor(e,t){this.version=e,this.transformResults=t}}class Lh{static none(){return new Lh}static exists(e){return new Lh(void 0,e)}static updateTime(e){return new Lh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function Mh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Fh{}function jh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Gh(e.key,Lh.none()):new Bh(e.key,e.data,Lh.none());{const n=e.data,i=da.empty();let s=new Lr(cr.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new Hh(e.key,i,new Fr(s.toArray()),Lh.none())}}function Uh(e,t,n){var i;e instanceof Bh?function(e,t,n){const i=e.value.clone(),s=$h(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof Hh?function(e,t,n){if(!Mh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=$h(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(zh(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function Vh(e,t,n,i){return e instanceof Bh?function(e,t,n,i){if(!Mh(e.precondition,t))return n;const s=e.value.clone(),o=Kh(e.fieldTransforms,i,t);return s.setAll(o),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof Hh?function(e,t,n,i){if(!Mh(e.precondition,t))return n;const s=Kh(e.fieldTransforms,i,t),o=t.data;return o.setAll(zh(e)),o.setAll(s),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(s=t,o=n,Mh(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o);var s,o}function qh(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=Eh(i.transform,e||null);null!=s&&(null===n&&(n=da.empty()),n.set(i.field,s))}return n||null}function Wh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&sr(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof Ch&&i instanceof Ch||n instanceof Nh&&i instanceof Nh?sr(n.elements,i.elements,Xr):n instanceof Rh&&i instanceof Rh?Xr(n.gt,i.gt):n instanceof Sh&&i instanceof Sh);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class Bh extends Fh{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Hh extends Fh{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function zh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function $h(e,t,n){const i=new Map;Wo(e.length===n.length);for(let s=0;s<n.length;s++){const o=e[s],r=o.transform,a=t.data.field(o.field);i.set(o.field,Ih(r,a,n[s]))}return i}function Kh(e,t,n){const i=new Map;for(const a of e){const e=a.transform,h=n.data.field(a.field);i.set(a.field,(o=h,r=t,(s=e)instanceof Sh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&zr(t)&&(t=$r(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(r,o):s instanceof Ch?Ah(s,o):s instanceof Nh?Dh(s,o):function(e,t){const n=Eh(e,t),i=xh(n)+xh(e.gt);return oa(n)&&oa(e.gt)?Th(i):bh(e.serializer,i)}(s,o)))}var s,o,r;return i}class Gh extends Fh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Yh extends Fh{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class Qh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&Uh(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Vh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Vh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=fh();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let r=this.applyToLocalView(o,s.mutatedFields);r=t.has(i.key)?null:r;const a=jh(o,r);null!==a&&n.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(rr.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),yh())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,((e,t)=>Wh(e,t)))&&sr(this.baseMutations,e.baseMutations,((e,t)=>Wh(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class Jh{static from(e,t,n){Wo(e.mutations.length===n.length);let i=ph;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Jh(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
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
 */class Xh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
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
class Zh{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var eu,tu;function nu(e){switch(e){default:return qo();case Ho.CANCELLED:case Ho.UNKNOWN:case Ho.DEADLINE_EXCEEDED:case Ho.RESOURCE_EXHAUSTED:case Ho.INTERNAL:case Ho.UNAVAILABLE:case Ho.UNAUTHENTICATED:return!1;case Ho.INVALID_ARGUMENT:case Ho.NOT_FOUND:case Ho.ALREADY_EXISTS:case Ho.PERMISSION_DENIED:case Ho.FAILED_PRECONDITION:case Ho.ABORTED:case Ho.OUT_OF_RANGE:case Ho.UNIMPLEMENTED:case Ho.DATA_LOSS:return!0}}function iu(e){if(void 0===e)return jo("GRPC error has no .code"),Ho.UNKNOWN;switch(e){case eu.OK:return Ho.OK;case eu.CANCELLED:return Ho.CANCELLED;case eu.UNKNOWN:return Ho.UNKNOWN;case eu.DEADLINE_EXCEEDED:return Ho.DEADLINE_EXCEEDED;case eu.RESOURCE_EXHAUSTED:return Ho.RESOURCE_EXHAUSTED;case eu.INTERNAL:return Ho.INTERNAL;case eu.UNAVAILABLE:return Ho.UNAVAILABLE;case eu.UNAUTHENTICATED:return Ho.UNAUTHENTICATED;case eu.INVALID_ARGUMENT:return Ho.INVALID_ARGUMENT;case eu.NOT_FOUND:return Ho.NOT_FOUND;case eu.ALREADY_EXISTS:return Ho.ALREADY_EXISTS;case eu.PERMISSION_DENIED:return Ho.PERMISSION_DENIED;case eu.FAILED_PRECONDITION:return Ho.FAILED_PRECONDITION;case eu.ABORTED:return Ho.ABORTED;case eu.OUT_OF_RANGE:return Ho.OUT_OF_RANGE;case eu.UNIMPLEMENTED:return Ho.UNIMPLEMENTED;case eu.DATA_LOSS:return Ho.DATA_LOSS;default:return qo()}}(tu=eu||(eu={}))[tu.OK=0]="OK",tu[tu.CANCELLED=1]="CANCELLED",tu[tu.UNKNOWN=2]="UNKNOWN",tu[tu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tu[tu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tu[tu.NOT_FOUND=5]="NOT_FOUND",tu[tu.ALREADY_EXISTS=6]="ALREADY_EXISTS",tu[tu.PERMISSION_DENIED=7]="PERMISSION_DENIED",tu[tu.UNAUTHENTICATED=16]="UNAUTHENTICATED",tu[tu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tu[tu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tu[tu.ABORTED=10]="ABORTED",tu[tu.OUT_OF_RANGE=11]="OUT_OF_RANGE",tu[tu.UNIMPLEMENTED=12]="UNIMPLEMENTED",tu[tu.INTERNAL=13]="INTERNAL",tu[tu.UNAVAILABLE=14]="UNAVAILABLE",tu[tu.DATA_LOSS=15]="DATA_LOSS";
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
class su{static get instance(){return ou}static getOrCreateInstance(){return null===ou&&(ou=new su),ou}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}constructor(){this.onExistenceFilterMismatchCallbacks=new Map}}let ou=null;
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
 */function ru(){return new TextEncoder}
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
 */const au=new xo([4294967295,4294967295],0);function hu(e){const t=ru().encode(e),n=new Ro;return n.update(t),new Uint8Array(n.digest())}function uu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new xo([n,i],0),new xo([s,o],0)]}class cu{Et(e,t,n){let i=e.add(t.multiply(xo.fromNumber(n)));return 1===i.compare(au)&&(i=new xo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=hu(e),[n,i]=uu(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new cu(s,i,t);return n.forEach((e=>o.insert(e))),o}insert(e){if(0===this.It)return;const t=hu(e),[n,i]=uu(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new lu(`Invalid padding: ${t}`);if(n<0)throw new lu(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new lu(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new lu(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=xo.fromNumber(this.It)}}class lu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class du{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,fu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new du(rr.min(),i,new xr(ir),hh(),yh())}constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}}class fu{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new fu(n,t,yh(),yh(),yh())}constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}}
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
 */class mu{constructor(e,t,n,i){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=i}}class pu{constructor(e,t){this.targetId=e,this.Vt=t}}class gu{constructor(e,t,n=Vr.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class yu{get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=yh(),t=yh(),n=yh();return this.Dt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:qo()}})),new fu(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=bu()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}constructor(){this.St=0,this.Dt=bu(),this.Ct=Vr.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}}class wu{Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:qo()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,i=e.Vt.count,s=this.se(n);if(s){const o=s.target;if(qa(o))if(0===i){const e=new lr(o.path);this.Yt(n,e,ma.newNoDocument(e,rr.min()))}else Wo(1===i);else{const s=this.ie(n);if(s!==i){const i=this.re(e,s);if(0!==i){this.ee(n);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=su.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var i,s,o,r,a,h;const u={localCacheCount:t,existenceFilterCount:n.count},c=n.unchangedNames;return c&&(u.bloomFilter={applied:0===e,hashCount:null!==(i=null==c?void 0:c.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(r=null===(o=null===(s=null==c?void 0:c.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==r?r:0,padding:null!==(h=null===(a=null==c?void 0:c.bits)||void 0===a?void 0:a.padding)&&void 0!==h?h:0}),u}(i,s,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:i}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:r=0}=n;let a,h;try{a=Hr(s).toUint8Array()}catch(e){if(e instanceof jr)return Uo("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{h=new cu(a,o,r)}catch(e){return Uo(e instanceof lu?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===h.It?1:i!==t-this.oe(e.targetId,h)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const s=this.Gt.ue(),o=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.vt(o)||(this.Yt(e,n,null),i++)})),i}ce(e){const t=new Map;this.Qt.forEach(((n,i)=>{const s=this.se(i);if(s){if(n.current&&qa(s.target)){const t=new lr(s.target.path);null!==this.jt.get(t)||this.ae(i,t)||this.Yt(i,t,ma.newNoDocument(t,e))}n.Mt&&(t.set(i,n.Ot()),n.Ft())}}));let n=yh();this.zt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const i=new du(e,t,this.Wt,this.jt,n);return this.jt=hh(),this.zt=vu(),this.Wt=new xr(ir),i}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new yu,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Lr(ir),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Fo("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new yu),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Gt=e,this.Qt=new Map,this.jt=hh(),this.zt=vu(),this.Wt=new xr(ir)}}function vu(){return new xr(lr.comparator)}function bu(){return new xr(lr.comparator)}const Tu={asc:"ASCENDING",desc:"DESCENDING"},ku={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_u={and:"AND",or:"OR"};class Iu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Eu(e,t){return e.useProto3Json||_r(t)?t:{value:t}}function Su(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Au(e,t){return Su(e,t.toTimestamp())}function Nu(e){return Wo(!!e),rr.fromTimestamp(function(e){const t=Wr(e);return new or(t.seconds,t.nanos)}(e))}function Du(e,t){return(n=e,new hr(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Ru(e){const t=hr.fromString(e);return Wo(Qu(t)),t}function xu(e,t){return Du(e.databaseId,t.path)}function Pu(e,t){const n=Ru(t);if(n.get(1)!==e.databaseId.projectId)throw new zo(Ho.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new zo(Ho.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new lr(Fu(n))}function Ou(e,t){return Du(e.databaseId,t)}function Lu(e){const t=Ru(e);return 4===t.length?hr.emptyPath():Fu(t)}function Mu(e){return new hr(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Fu(e){return Wo(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ju(e,t,n){return{name:xu(e,t),fields:n.value.mapValue.fields}}function Uu(e,t){let n;if(t instanceof Bh)n={update:ju(e,t.key,t.value)};else if(t instanceof Gh)n={delete:xu(e,t.key)};else if(t instanceof Hh)n={update:ju(e,t.key,t.data),updateMask:Yu(t.fieldMask)};else{if(!(t instanceof Yh))return qo();n={verify:xu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Sh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ch)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Nh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Rh)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw qo()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:Au(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:qo())),n;var i,s}function Vu(e,t){return{documents:[Ou(e,t.path)]}}function qu(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Ou(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ou(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0!==e.length)return Gu(ka.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:$u((t=e).field),direction:Hu(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const r=Eu(e,t.limit);var a,h;return null!==r&&(n.structuredQuery.limit=r),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt={before:!(h=t.endAt).inclusive,values:h.position}),n}function Wu(e){let t=Lu(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Wo(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let o=[];n.where&&(o=function(e){const t=Bu(e);return t instanceof ka&&Ia(t)?t.getFilters():[t]}(n.where));let r=[];n.orderBy&&(r=n.orderBy.map((e=>{return new wa(Ku((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,_r(t)?null:t}(n.limit));let h=null;n.startAt&&(h=function(e){const t=!!e.before,n=e.values||[];return new pa(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new pa(n,t)}(n.endAt)),Ba(t,s,r,o,a,"F",h,u)}function Bu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ku(e.unaryFilter.field);return Ta.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ku(e.unaryFilter.field);return Ta.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ku(e.unaryFilter.field);return Ta.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ku(e.unaryFilter.field);return Ta.create(s,"!=",{nullValue:"NULL_VALUE"});default:return qo()}}(e):void 0!==e.fieldFilter?(n=e,Ta.create(Ku(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return qo()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,ka.create(t.compositeFilter.filters.map((e=>Bu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return qo()}}(t.compositeFilter.op))):qo();var t,n}function Hu(e){return Tu[e]}function zu(e){return ku[e]}function $u(e){return{fieldPath:e.canonicalString()}}function Ku(e){return cr.fromServerFormat(e.fieldPath)}function Gu(e){return e instanceof Ta?function(e){if("=="===e.op){if(ha(e.value))return{unaryFilter:{field:$u(e.field),op:"IS_NAN"}};if(aa(e.value))return{unaryFilter:{field:$u(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ha(e.value))return{unaryFilter:{field:$u(e.field),op:"IS_NOT_NAN"}};if(aa(e.value))return{unaryFilter:{field:$u(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$u(e.field),op:zu(e.op),value:e.value}}}(e):e instanceof ka?function(e){const t=e.getFilters().map((e=>Gu(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,_u[n]),filters:t}};var n}(e):qo()}function Yu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class Ju{withSequenceNumber(e){return new Ju(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ju(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ju(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ju(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,i,s=rr.min(),o=rr.min(),r=Vr.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=r,this.expectedCount=a}}
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
 */class Xu{constructor(e){this.fe=e}}function Zu(e){const t=Wu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Xa(t,t.limit,"L"):t}
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
 */class ec{_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Br(e.integerValue));else if("doubleValue"in e){const n=Br(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),Ir(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Hr(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?la(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):qo()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),lr.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}constructor(){}}ec.Ve=new ec;
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
class tc{addToCollectionParentIndex(e,t){return this.rn.add(t),br.resolve()}getCollectionParents(e,t){return br.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return br.resolve()}deleteFieldIndex(e,t){return br.resolve()}getDocumentsMatchingTarget(e,t){return br.resolve(null)}getIndexType(e,t){return br.resolve(0)}getFieldIndexes(e,t){return br.resolve([])}getNextCollectionGroupToUpdate(e){return br.resolve(null)}getMinOffset(e,t){return br.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,t){return br.resolve(pr.min())}updateCollectionGroup(e,t,n){return br.resolve()}updateIndexEntries(e,t){return br.resolve()}constructor(){this.rn=new nc}}class nc{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Lr(hr.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Lr(hr.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class ic{static withCacheSize(e){return new ic(e,ic.DEFAULT_COLLECTION_PERCENTILE,ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */ic.DEFAULT_COLLECTION_PERCENTILE=10,ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ic.DEFAULT=new ic(41943040,ic.DEFAULT_COLLECTION_PERCENTILE,ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ic.DISABLED=new ic(-1,0,0);
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
class sc{next(){return this.Nn+=2,this.Nn}static kn(){return new sc(0)}static Mn(){return new sc(-1)}constructor(e){this.Nn=e}}
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
class oc{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ma.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?br.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new rh((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
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
class rc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class ac{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Vh(n.mutation,e,Fr.empty(),or.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,yh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=yh()){const i=dh();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=ch();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=dh();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,yh())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=hh();const o=mh(),r=mh();return t.forEach(((e,t)=>{const r=n.get(t.key);i.has(t.key)&&(void 0===r||r.mutation instanceof Hh)?s=s.insert(t.key,t):void 0!==r?(o.set(t.key,r.mutation.getFieldMask()),Vh(r.mutation,t,r.mutation.getFieldMask(),or.now())):o.set(t.key,Fr.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>o.set(e,t))),t.forEach(((e,t)=>{var n;return r.set(e,new rc(t,null!==(n=o.get(e))&&void 0!==n?n:null))})),r)))}recalculateAndSaveOverlays(e,t){const n=mh();let i=new xr(((e,t)=>e-t)),s=yh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const o=t.get(e);if(null===o)return;let r=n.get(e)||Fr.empty();r=s.applyToLocalView(o,r),n.set(e,r);const a=(i.get(s.batchId)||yh()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const o=[],r=i.getReverseIterator();for(;r.hasNext();){const i=r.getNext(),a=i.key,h=i.value,u=fh();h.forEach((e=>{if(!s.has(e)){const i=jh(t.get(e),n.get(e));null!==i&&u.set(e,i),s=s.add(e)}})),o.push(this.documentOverlayCache.saveOverlays(e,a,u))}return br.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,lr.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Ga(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):br.resolve(dh());let r=-1,a=s;return o.next((t=>br.forEach(t,((t,n)=>(r<n.largestBatchId&&(r=n.largestBatchId),s.get(t)?br.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,yh()))).next((e=>({batchId:r,changes:lh(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new lr(t)).next((e=>{let t=ch();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=ch();return this.indexManager.getCollectionParents(e,i).next((o=>br.forEach(o,(o=>{const r=(a=t,h=o.child(i),new Wa(h,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,h;return this.getDocumentsMatchingCollectionQuery(e,r,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,ma.newInvalidDocument(i)))}));let n=ch();return e.forEach(((e,s)=>{const o=i.get(e);void 0!==o&&Vh(o.mutation,s,Fr.empty(),or.now()),nh(t,s)&&(n=n.insert(e,s))})),n}))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
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
 */class hc{getBundleMetadata(e,t){return br.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Nu(n.createTime)}),br.resolve()}getNamedQuery(e,t){return br.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:(n=t).name,query:Zu(n.bundledQuery),readTime:Nu(n.readTime)}),br.resolve();var n}constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}}
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
 */class uc{getOverlay(e,t){return br.resolve(this.overlays.get(t))}getOverlays(e,t){const n=dh();return br.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.we(e,t,i)})),br.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),br.resolve()}getOverlaysForCollection(e,t,n){const i=dh(),s=t.length+1,o=new lr(t.child("")),r=this.overlays.getIteratorFrom(o);for(;r.hasNext();){const e=r.getNext().value,o=e.getKey();if(!t.isPrefixOf(o.path))break;o.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return br.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new xr(((e,t)=>e-t));const o=this.overlays.getIterator();for(;o.hasNext();){const e=o.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=dh(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const r=dh(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>r.set(e,t))),!(r.size()>=i)););return br.resolve(r)}we(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Xh(t,n));let s=this.ls.get(t);void 0===s&&(s=yh(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}constructor(){this.overlays=new xr(lr.comparator),this.ls=new Map}}
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
 */class cc{isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new lc(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new lc(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new lr(new hr([])),n=new lc(t,e),i=new lc(t,e+1),s=[];return this.ws.forEachInRange([n,i],(e=>{this.ys(e),s.push(e.key)})),s}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new lr(new hr([])),n=new lc(t,e),i=new lc(t,e+1);let s=yh();return this.ws.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new lc(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.fs=new Lr(lc.ds),this.ws=new Lr(lc._s)}}class lc{static ds(e,t){return lr.comparator(e.key,t.key)||ir(e.As,t.As)}static _s(e,t){return ir(e.As,t.As)||lr.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.As=t}}
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
 */class dc{checkEmpty(e){return br.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qh(s,t,n,i);this.mutationQueue.push(o);for(const t of i)this.Rs=this.Rs.add(new lc(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return br.resolve(o)}lookupMutationBatch(e,t){return br.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.bs(n),s=i<0?0:i;return br.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return br.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return br.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new lc(t,0),i=new lc(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,i],(e=>{const t=this.Ps(e.As);s.push(t)})),br.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Lr(ir);return t.forEach((e=>{const t=new lc(e,0),i=new lc(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,i],(e=>{n=n.add(e.As)}))})),br.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;lr.isDocumentKey(s)||(s=s.child(""));const o=new lc(new lr(s),0);let r=new Lr(ir);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(r=r.add(e.As)),!0)}),o),br.resolve(this.Vs(r))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Wo(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return br.forEach(t.mutations,(i=>{const s=new lc(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new lc(t,0),i=this.Rs.firstAfterOrEqual(n);return br.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,br.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Lr(lc.ds)}}
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
 */class fc{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return br.resolve(n?n.document.mutableCopy():ma.newInvalidDocument(t))}getEntries(e,t){let n=hh();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ma.newInvalidDocument(e))})),br.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=hh();const o=t.path,r=new lr(o.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:e,value:{document:r}}=a.getNext();if(!o.isPrefixOf(e.path))break;e.path.length>o.length+1||gr(mr(r),n)<=0||(i.has(r.key)||nh(t,r))&&(s=s.insert(r.key,r.mutableCopy()))}return br.resolve(s)}getAllFromCollectionGroup(e,t,n,i){qo()}Cs(e,t){return br.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new mc(this)}getSize(e){return br.resolve(this.size)}constructor(e){this.Ds=e,this.docs=new xr(lr.comparator),this.size=0}}class mc extends oc{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(n)})),br.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}constructor(e){super(),this.os=e}}
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
 */class pc{forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),br.resolve()}getLastRemoteSnapshotVersion(e){return br.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return br.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),br.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),br.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new sc(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,br.resolve()}updateTargetData(e,t){return this.Fn(t),br.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,br.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.xs.forEach(((o,r)=>{r.sequenceNumber<=t&&null===n.get(r.targetId)&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,r.targetId)),i++)})),br.waitFor(s).next((()=>i))}getTargetCount(e){return br.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return br.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),br.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),br.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),br.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return br.resolve(n)}containsKey(e,t){return br.resolve(this.ks.containsKey(t))}constructor(e){this.persistence=e,this.xs=new rh((e=>Ua(e)),Va),this.lastRemoteSnapshotVersion=rr.min(),this.highestTargetId=0,this.Ns=0,this.ks=new cc,this.targetCount=0,this.Ms=sc.kn()}}
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
 */class gc{start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new dc(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Fo("MemoryPersistence","Starting transaction:",e);const i=new yc(this.Os.next());return this.referenceDelegate.Us(),n(i).next((e=>this.referenceDelegate.Ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gs(e,t){return br.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.$s={},this.overlays={},this.Os=new kr(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new pc(this),this.indexManager=new tc,this.remoteDocumentCache=new fc((e=>this.referenceDelegate.Ls(e))),this.serializer=new Xu(t),this.qs=new hc(this.serializer)}}class yc extends wr{constructor(e){super(),this.currentSequenceNumber=e}}class wc{static zs(e){return new wc(e)}get Ws(){if(this.js)return this.js;throw qo()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),br.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),br.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),br.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return br.forEach(this.Ws,(n=>{const i=lr.fromPath(n);return this.Hs(e,i).next((e=>{e||t.removeEntry(i,rr.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return br.or([()=>br.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}constructor(e){this.persistence=e,this.Qs=new cc,this.js=null}}
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
class vc{static Li(e,t){let n=yh(),i=yh();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new vc(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=i}}
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
 */class bc{initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ki(e,t).next((s=>s||this.Gi(e,t,i,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(za(t))return br.resolve(null);let n=Qa(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Xa(t,null,"F"),n=Qa(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=yh(...i);return this.Ui.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const o=this.ji(t,i);return this.zi(t,o,s,n.readTime)?this.Ki(e,Xa(t,null,"F")):this.Wi(e,o,t,n)}))))})))))}Gi(e,t,n,i){return za(t)||i.isEqual(rr.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((s=>{const o=this.ji(t,s);return this.zi(t,o,n,i)?this.Qi(e,t):(Mo()<=ge.DEBUG&&Fo("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),th(t)),this.Wi(e,o,t,fr(i,-1)))}))}ji(e,t){let n=new Lr(sh(e));return t.forEach(((t,i)=>{nh(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return Mo()<=ge.DEBUG&&Fo("QueryEngine","Using full collection scan to execute query:",th(t)),this.Ui.getDocumentsMatchingQuery(e,t,pr.min())}Wi(e,t,n,i){return this.Ui.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.qi=!1}}
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
 */class Tc{tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ac(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new xr(ir),this.Yi=new rh((e=>Ua(e)),Va),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}}function kc(e,t,n,i){return new Tc(e,t,n,i)}async function _c(e,t){const n=Bo(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],o=[];let r=yh();for(const e of i){s.push(e.batchId);for(const t of e.mutations)r=r.add(t.key)}for(const e of t){o.push(e.batchId);for(const t of e.mutations)r=r.add(t.key)}return n.localDocuments.getDocuments(e,r).next((e=>({er:e,removedBatchIds:s,addedBatchIds:o})))}))}))}function Ic(e){const t=Bo(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Ec(e,t,n){let i=yh(),s=yh();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=hh();return n.forEach(((n,o)=>{const r=e.get(n);o.isFoundDocument()!==r.isFoundDocument()&&(s=s.add(n)),o.isNoDocument()&&o.version.isEqual(rr.min())?(t.removeEntry(n,o.readTime),i=i.insert(n,o)):!r.isValidDocument()||o.version.compareTo(r.version)>0||0===o.version.compareTo(r.version)&&r.hasPendingWrites?(t.addEntry(o),i=i.insert(n,o)):Fo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",o.version)})),{nr:i,sr:s}}))}function Sc(e,t){const n=Bo(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Cc(e,t){const n=Bo(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Bs.getTargetData(e,t).next((s=>s?(i=s,br.resolve(i)):n.Bs.allocateTargetId(e).next((s=>(i=new Ju(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Ac(e,t,n){const i=Bo(e),s=i.Ji.get(t),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Tr(e))throw e;Fo("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(s.target)}function Nc(e,t,n){const i=Bo(e);let s=rr.min(),o=yh();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Bo(e),s=i.Yi.get(n);return void 0!==s?br.resolve(i.Ji.get(s)):i.Bs.getTargetData(t,n)}(i,e,Qa(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{o=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?s:rr.min(),n?o:yh()))).next((e=>(Dc(i,ih(t),e),{documents:e,ir:o})))))}function Dc(e,t,n){let i=e.Xi.get(t)||rr.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Xi.set(t,i)}class Rc{lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=vh()}}class xc{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Rc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Hr=new Rc,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Pc{Yr(e){}shutdown(){}}
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
 */class Oc{Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Fo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Fo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}}
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
 */let Lc=null;function Mc(){return null===Lc?Lc=268435456+Math.round(2147483648*Math.random()):Lc++,"0x"+Lc.toString(16)
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
 */}const Fc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class jc{uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}constructor(e){this.ro=e.ro,this.oo=e.oo}}
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
 */class Uc extends class{get po(){return!1}Io(e,t,n,i,s){const o=Mc(),r=this.To(e,t);Fo("RestConnection",`Sending RPC '${e}' ${o}:`,r,n);const a={};return this.Eo(a,i,s),this.Ao(e,r,a,n).then((t=>(Fo("RestConnection",`Received RPC '${e}' ${o}: `,t),t)),(t=>{throw Uo("RestConnection",`RPC '${e}' ${o} failed with error: `,t,"url: ",r,"request:",n),t}))}vo(e,t,n,i,s,o){return this.Io(e,t,n,i,s)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=Fc[e];return`${this.mo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{Ao(e,t,n,i){const s=Mc();return new Promise(((o,r)=>{const a=new Do;a.setWithCredentials(!0),a.listenOnce(Eo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Io.NO_ERROR:const t=a.getResponseJson();Fo("WebChannelConnection",`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),o(t);break;case Io.TIMEOUT:Fo("WebChannelConnection",`RPC '${e}' ${s} timed out`),r(new zo(Ho.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const n=a.getStatus();if(Fo("WebChannelConnection",`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ho).indexOf(t)>=0?t:Ho.UNKNOWN}(t.status);r(new zo(e,t.message))}else r(new zo(Ho.UNKNOWN,"Server responded with status "+a.getStatus()))}else r(new zo(Ho.UNAVAILABLE,"Connection failed."));break;default:qo()}}finally{Fo("WebChannelConnection",`RPC '${e}' ${s} completed.`)}}));const h=JSON.stringify(i);Fo("WebChannelConnection",`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",h,n,15)}))}Ro(e,t,n){const i=Mc(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ko(),r=_o(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.xmlHttpFactory=new Ao({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=s.join("");Fo("WebChannelConnection",`Creating RPC '${e}' stream ${i}: ${u}`,a);const c=o.createWebChannel(u,a);let l=!1,d=!1;const f=new jc({ro:t=>{d?Fo("WebChannelConnection",`Not sending because RPC '${e}' stream ${i} is closed:`,t):(l||(Fo("WebChannelConnection",`Opening RPC '${e}' stream ${i} transport.`),c.open(),l=!0),Fo("WebChannelConnection",`RPC '${e}' stream ${i} sending:`,t),c.send(t))},oo:()=>c.close()}),m=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return m(c,No.EventType.OPEN,(()=>{d||Fo("WebChannelConnection",`RPC '${e}' stream ${i} transport opened.`)})),m(c,No.EventType.CLOSE,(()=>{d||(d=!0,Fo("WebChannelConnection",`RPC '${e}' stream ${i} transport closed`),f.wo())})),m(c,No.EventType.ERROR,(t=>{d||(d=!0,Uo("WebChannelConnection",`RPC '${e}' stream ${i} transport errored:`,t),f.wo(new zo(Ho.UNAVAILABLE,"The operation could not be completed")))})),m(c,No.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];Wo(!!s);const o=s,r=o.error||(null===(n=o[0])||void 0===n?void 0:n.error);if(r){Fo("WebChannelConnection",`RPC '${e}' stream ${i} received error:`,r);const t=r.status;let n=function(e){const t=eu[e];if(void 0!==t)return iu(t)}(t),s=r.message;void 0===n&&(n=Ho.INTERNAL,s="Unknown error status: "+t+" with message "+r.message),d=!0,f.wo(new zo(n,s)),c.close()}else Fo("WebChannelConnection",`RPC '${e}' stream ${i} received:`,s),f._o(s)}})),m(r,So.STAT_EVENT,(t=>{t.stat===Co.PROXY?Fo("WebChannelConnection",`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Co.NOPROXY&&Fo("WebChannelConnection",`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}
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
 */function Vc(){return"undefined"!=typeof document?document:null}
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
 */function qc(e){return new Iu(e,!0)}
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
 */class Wc{reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-n);i>0&&Fo("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}constructor(e,t,n=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}}
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
 */class Bc{Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===Ho.RESOURCE_EXHAUSTED?(jo(t.toString()),jo("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===Ho.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new zo(Ho.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Fo("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Fo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,s,o,r,a){this.ii=e,this.$o=n,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=r,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Wc(e,t)}}class Hc extends Bc{eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:qo(),o=t.targetChange.targetIds||[],r=function(e,t){return e.useProto3Json?(Wo(void 0===t||"string"==typeof t),Vr.fromBase64String(t||"")):(Wo(void 0===t||t instanceof Uint8Array),Vr.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,h=a&&function(e){const t=void 0===e.code?Ho.UNKNOWN:iu(e.code);return new zo(t,e.message||"")}(a);n=new gu(s,o,r,h||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=Pu(e,i.document.name),o=Nu(i.document.updateTime),r=i.document.createTime?Nu(i.document.createTime):rr.min(),a=new da({mapValue:{fields:i.document.fields}}),h=ma.newFoundDocument(s,o,r,a),u=i.targetIds||[],c=i.removedTargetIds||[];n=new mu(u,c,h.key,h)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=Pu(e,i.document),o=i.readTime?Nu(i.readTime):rr.min(),r=ma.newNoDocument(s,o),a=i.removedTargetIds||[];n=new mu([],a,r.key,r)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=Pu(e,i.document),o=i.removedTargetIds||[];n=new mu([],o,s,null)}else{if(!("filter"in t))return qo();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,o=new Zh(i,s),r=e.targetId;n=new pu(r,o)}}var i;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return rr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?rr.min():t.readTime?Nu(t.readTime):rr.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Mu(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=qa(i)?{documents:Vu(e,i)}:{query:qu(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Cu(e,t.resumeToken);const i=Eu(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(rr.min())>0){n.readTime=Su(e,t.snapshotVersion.toTimestamp());const i=Eu(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return qo()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Mu(this.serializer),t.removeTarget=e,this.Wo(t)}constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}}class zc extends Bc{get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(Wo(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Wo(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?Nu(e.updateTime):Nu(t);return n.isEqual(rr.min())&&(n=Nu(t)),new Oh(n,e.transformResults||[])}(e,n)))):[]),s=Nu(e.commitTime);return this.listener.cu(s,i)}var t,n;return Wo(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Mu(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Uu(this.serializer,e)))};this.Wo(t)}constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s,this.ru=!1}}
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
 */class $c extends class{}{fu(){if(this.lu)throw new zo(Ho.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Io(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ho.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zo(Ho.UNKNOWN,e.toString())}))}vo(e,t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(e,t,n,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ho.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zo(Ho.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.lu=!1}}class Kc{gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(jo(t),this.mu=!1):Fo("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}}
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
 */class Gc{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{il(this)&&(Fo("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Bo(e);t.vu.add(4),await Qc(t),t.bu.set("Unknown"),t.vu.delete(4),await Yc(t)}(this))}))})),this.bu=new Kc(n,i)}}async function Yc(e){if(il(e))for(const t of e.Ru)await t(!0)}async function Qc(e){for(const t of e.Ru)await t(!1)}function Jc(e,t){const n=Bo(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),nl(n)?tl(n):Tl(n).Ko()&&Zc(n,t))}function Xc(e,t){const n=Bo(e),i=Tl(n);n.Au.delete(t),i.Ko()&&el(n,t),0===n.Au.size&&(i.Ko()?i.jo():il(n)&&n.bu.set("Unknown"))}function Zc(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rr.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Tl(e).su(t)}function el(e,t){e.Vu.qt(t),Tl(e).iu(t)}function tl(e){e.Vu=new wu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Tl(e).start(),e.bu.gu()}function nl(e){return il(e)&&!Tl(e).Uo()&&e.Au.size>0}function il(e){return 0===Bo(e).vu.size}function sl(e){e.Vu=void 0}async function ol(e){e.Au.forEach(((t,n)=>{Zc(e,t)}))}async function rl(e,t){sl(e),nl(e)?(e.bu.Iu(t),tl(e)):e.bu.set("Unknown")}async function al(e,t,n){if(e.bu.set("Online"),t instanceof gu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Au.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Au.delete(i),e.Vu.removeTarget(i))}(e,t)}catch(n){Fo("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await hl(e,n)}else if(t instanceof mu?e.Vu.Ht(t):t instanceof pu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(rr.min()))try{const t=await Ic(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Au.get(i);s&&e.Au.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.Au.get(t);if(!i)return;e.Au.set(t,i.withResumeToken(Vr.EMPTY_BYTE_STRING,i.snapshotVersion)),el(e,t);const s=new Ju(i.target,t,n,i.sequenceNumber);Zc(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Fo("RemoteStore","Failed to raise snapshot:",t),await hl(e,t)}}async function hl(e,t,n){if(!Tr(t))throw t;e.vu.add(1),await Qc(e),e.bu.set("Offline"),n||(n=()=>Ic(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Fo("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Yc(e)}))}function ul(e,t){return t().catch((n=>hl(e,n,t)))}async function cl(e){const t=Bo(e),n=kl(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;ll(t);)try{const e=await Sc(t.localStore,i);if(null===e){0===t.Eu.length&&n.jo();break}i=e.batchId,dl(t,e)}catch(e){await hl(t,e)}fl(t)&&ml(t)}function ll(e){return il(e)&&e.Eu.length<10}function dl(e,t){e.Eu.push(t);const n=kl(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function fl(e){return il(e)&&!kl(e).Uo()&&e.Eu.length>0}function ml(e){kl(e).start()}async function pl(e){kl(e).hu()}async function gl(e){const t=kl(e);for(const n of e.Eu)t.uu(n.mutations)}async function yl(e,t,n){const i=e.Eu.shift(),s=Jh.from(i,t,n);await ul(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await cl(e)}async function wl(e,t){t&&kl(e).ou&&await async function(e,t){if(nu(n=t.code)&&n!==Ho.ABORTED){const n=e.Eu.shift();kl(e).Qo(),await ul(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await cl(e)}var n}(e,t),fl(e)&&ml(e)}async function vl(e,t){const n=Bo(e);n.asyncQueue.verifyOperationInProgress(),Fo("RemoteStore","RemoteStore received new credentials");const i=il(n);n.vu.add(3),await Qc(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Yc(n)}async function bl(e,t){const n=Bo(e);t?(n.vu.delete(2),await Yc(n)):t||(n.vu.add(2),await Qc(n),n.bu.set("Unknown"))}function Tl(e){return e.Su||(e.Su=function(e,t,n){const i=Bo(e);return i.fu(),new Hc(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:ol.bind(null,e),ao:rl.bind(null,e),nu:al.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),nl(e)?tl(e):e.bu.set("Unknown")):(await e.Su.stop(),sl(e))}))),e.Su}function kl(e){return e.Du||(e.Du=function(e,t,n){const i=Bo(e);return i.fu(),new zc(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:pl.bind(null,e),ao:wl.bind(null,e),au:gl.bind(null,e),cu:yl.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await cl(e)):(await e.Du.stop(),e.Eu.length>0&&(Fo("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
 */}class _l{static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,r=new _l(e,t,o,i,s);return r.start(n),r}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new zo(Ho.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new $o,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function Il(e,t){if(jo("AsyncQueue",`${t}: ${e}`),Tr(e))return new zo(Ho.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class El{static emptySet(e){return new El(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof El))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new El;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||lr.comparator(t.key,n.key):(e,t)=>lr.comparator(e.key,t.key),this.keyedMap=ch(),this.sortedSet=new xr(this.comparator)}}
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
 */class Sl{track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):qo():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Cu=new xr(lr.comparator)}}class Cl{static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach((e=>{o.push({type:0,doc:e})})),new Cl(e,t,El.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Za(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,s,o,r,a,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=r,this.excludesMetadataChanges=a,this.hasCachedResults=h}}
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
 */class Al{constructor(){this.Nu=void 0,this.listeners=[]}}class Nl{constructor(){this.queries=new rh((e=>eh(e)),Za),this.onlineState="Unknown",this.ku=new Set}}async function Dl(e,t){const n=Bo(e),i=t.query;let s=!1,o=n.queries.get(i);if(o||(s=!0,o=new Al),s)try{o.Nu=await n.onListen(i)}catch(e){const n=Il(e,`Initialization of query '${th(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,o),o.listeners.push(t),t.Mu(n.onlineState),o.Nu&&t.$u(o.Nu)&&Ol(n)}async function Rl(e,t){const n=Bo(e),i=t.query;let s=!1;const o=n.queries.get(i);if(o){const e=o.listeners.indexOf(t);e>=0&&(o.listeners.splice(e,1),s=0===o.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function xl(e,t){const n=Bo(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.$u(e)&&(i=!0);s.Nu=e}}i&&Ol(n)}function Pl(e,t,n){const i=Bo(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function Ol(e){e.ku.forEach((e=>{e.next()}))}class Ll{$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Cl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Cl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}}
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
class Ml{constructor(e){this.key=e}}class Fl{constructor(e){this.key=e}}class jl{get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Sl,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,r=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,h="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const u=i.get(e),c=nh(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?l!==d&&(n.track({type:3,doc:c}),f=!0):this.rc(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.tc(c,a)>0||h&&this.tc(c,h)<0)&&(r=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||h)&&(r=!0)),f&&(c?(o=o.add(c),s=d?s.add(e):s.delete(e)):(o=o.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;o.size>this.query.limit;){const e="F"===this.query.limitType?o.last():o.first();o=o.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ec:o,ic:n,zi:r,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return qo()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const o=t?this.uc():[],r=0===this.Zu.size&&this.current?1:0,a=r!==this.Xu;return this.Xu=r,0!==s.length||a?{snapshot:new Cl(this.query,e.ec,i,s,e.mutatedKeys,0===r,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Sl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=yh(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new Fl(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Ml(n))})),t}hc(e){this.Yu=e.ir,this.Zu=yh();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Cl.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=yh(),this.mutatedKeys=yh(),this.tc=sh(e),this.ec=new El(this.tc)}}class Ul{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Vl{constructor(e){this.key=e,this.fc=!1}}class ql{get isPrimaryClient(){return!0===this.vc}constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new rh((e=>eh(e)),Za),this._c=new Map,this.mc=new Set,this.gc=new xr(lr.comparator),this.yc=new Map,this.Ic=new cc,this.Tc={},this.Ec=new Map,this.Ac=sc.Mn(),this.onlineState="Unknown",this.vc=void 0}}async function Wl(e,t){const n=rd(e);let i,s;const o=n.wc.get(t);if(o)i=o.targetId,n.sharedClientState.addLocalQueryTarget(i),s=o.view.lc();else{const e=await Cc(n.localStore,Qa(t)),o=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await Bl(n,t,i,"current"===o,e.resumeToken),n.isPrimaryClient&&Jc(n.remoteStore,e)}return s}async function Bl(e,t,n,i,s){e.Rc=(t,n,i)=>async function(e,t,n,i){let s=t.view.sc(n);s.zi&&(s=await Nc(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,s))));const o=i&&i.targetChanges.get(t.targetId),r=t.view.applyChanges(s,e.isPrimaryClient,o);return ed(e,t.targetId,r.cc),r.snapshot}(e,t,n,i);const o=await Nc(e.localStore,t,!0),r=new jl(t,o.ir),a=r.sc(o.documents),h=fu.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),u=r.applyChanges(a,e.isPrimaryClient,h);ed(e,n,u.cc);const c=new Ul(t,n,r);return e.wc.set(t,c),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),u.snapshot}async function Hl(e,t){const n=Bo(e),i=n.wc.get(t),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter((e=>!Za(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ac(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Xc(n.remoteStore,i.targetId),Xl(n,i.targetId)})).catch(vr)):(Xl(n,i.targetId),await Ac(n.localStore,i.targetId,!0))}async function zl(e,t){const n=Bo(e);try{const e=await function(e,t){const n=Bo(e),i=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const r=[];t.targetChanges.forEach(((o,a)=>{const h=s.get(a);if(!h)return;r.push(n.Bs.removeMatchingKeys(e,o.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,o.addedDocuments,a))));let u=h.withSequenceNumber(e.currentSequenceNumber);var c,l,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(Vr.EMPTY_BYTE_STRING,rr.min()).withLastLimboFreeSnapshotVersion(rr.min()):o.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(o.resumeToken,i)),s=s.insert(a,u),l=u,d=o,(0===(c=h).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&r.push(n.Bs.updateTargetData(e,u))}));let a=hh(),h=yh();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&r.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),r.push(Ec(e,o,t.documentUpdates).next((e=>{a=e.nr,h=e.sr}))),!i.isEqual(rr.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,i)));r.push(t)}return br.waitFor(r).next((()=>o.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,h))).next((()=>a))})).then((e=>(n.Ji=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.yc.get(t);i&&(Wo(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.fc=!0:e.modifiedDocuments.size>0?Wo(i.fc):e.removedDocuments.size>0&&(Wo(i.fc),i.fc=!1))})),await id(n,e,t)}catch(e){await vr(e)}}function $l(e,t,n){const i=Bo(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wc.forEach(((n,i)=>{const s=i.view.Mu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Bo(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(i=!0)})),i&&Ol(n)}(i.eventManager,t),e.length&&i.dc.nu(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Kl(e,t,n){const i=Bo(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.yc.get(t),o=s&&s.key;if(o){let e=new xr(lr.comparator);e=e.insert(o,ma.newNoDocument(o,rr.min()));const n=yh().add(o),s=new du(rr.min(),new Map,new xr(ir),e,n);await zl(i,s),i.gc=i.gc.remove(o),i.yc.delete(t),nd(i)}else await Ac(i.localStore,t,!1).then((()=>Xl(i,t,n))).catch(vr)}async function Gl(e,t){const n=Bo(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Bo(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,o=s.keys();let r=br.resolve();return o.forEach((e=>{r=r.next((()=>i.getEntry(t,e))).next((t=>{const o=n.docVersions.get(e);Wo(null!==o),t.version.compareTo(o)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),r.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=yh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Jl(n,i,null),Ql(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await id(n,e)}catch(e){await vr(e)}}async function Yl(e,t,n){const i=Bo(e);try{const e=await function(e,t){const n=Bo(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Wo(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Jl(i,t,n),Ql(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await id(i,e)}catch(e){await vr(e)}}function Ql(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Jl(e,t,n){const i=Bo(e);let s=i.Tc[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Tc[i.currentUser.toKey()]=s}}function Xl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.wc.delete(i),n&&e.dc.Pc(i,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Zl(e,t)}))}function Zl(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Xc(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),nd(e))}function ed(e,t,n){for(const i of n)i instanceof Ml?(e.Ic.addReference(i.key,t),td(e,i)):i instanceof Fl?(Fo("SyncEngine","Document no longer in limbo: "+i.key),e.Ic.removeReference(i.key,t),e.Ic.containsKey(i.key)||Zl(e,i.key)):qo()}function td(e,t){const n=t.key,i=n.path.canonicalString();e.gc.get(n)||e.mc.has(i)||(Fo("SyncEngine","New document in limbo: "+n),e.mc.add(i),nd(e))}function nd(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new lr(hr.fromString(t)),i=e.Ac.next();e.yc.set(i,new Vl(n)),e.gc=e.gc.insert(n,i),Jc(e.remoteStore,new Ju(Qa(Ha(n.path)),i,"TargetPurposeLimboResolution",kr.ct))}}async function id(e,t,n){const i=Bo(e),s=[],o=[],r=[];i.wc.isEmpty()||(i.wc.forEach(((e,a)=>{r.push(i.Rc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=vc.Li(a.targetId,e);o.push(t)}})))})),await Promise.all(r),i.dc.nu(s),await async function(e,t){const n=Bo(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>br.forEach(t,(t=>br.forEach(t.Fi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>br.forEach(t.Bi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Tr(e))throw e;Fo("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,s)}}}(i.localStore,o))}async function sd(e,t){const n=Bo(e);if(!n.currentUser.isEqual(t)){Fo("SyncEngine","User change. New user:",t.toKey());const e=await _c(n.localStore,t);n.currentUser=t,(i=n).Ec.forEach((e=>{e.forEach((e=>{e.reject(new zo(Ho.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Ec.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await id(n,e.er)}var i}function od(e,t){const n=Bo(e),i=n.yc.get(t);if(i&&i.fc)return yh().add(i.key);{let e=yh();const i=n._c.get(t);if(!i)return e;for(const t of i){const i=n.wc.get(t);e=e.unionWith(i.view.nc)}return e}}function rd(e){const t=Bo(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=zl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=od.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Kl.bind(null,t),t.dc.nu=xl.bind(null,t.eventManager),t.dc.Pc=Pl.bind(null,t.eventManager),t}function ad(e){const t=Bo(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Gl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yl.bind(null,t),t}class hd{async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return kc(this.persistence,new bc,e.initialUser,this.serializer)}createPersistence(e){return new gc(wc.zs,this.serializer)}createSharedClientState(e){return new xc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ud{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>$l(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=sd.bind(null,this.syncEngine),await bl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Nl}createDatastore(e){const t=qc(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Uc(i));var i,s,o;return s=e.authCredentials,o=e.appCheckCredentials,new $c(s,o,n,t)}createRemoteStore(e){var t,n,i,s,o;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>$l(this.syncEngine,e,0),o=Oc.D()?new Oc:new Pc,new Gc(t,n,i,s,o)}createSyncEngine(e,t){return function(e,t,n,i,s,o,r){const a=new ql(e,t,n,i,s,o);return r&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Bo(e);Fo("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Qc(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
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
class cd{next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):jo("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
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
class ld{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new zo(Ho.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $o;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Il(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Po.UNAUTHENTICATED,this.clientId=nr.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Fo("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Fo("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function dd(e,t){e.asyncQueue.verifyOperationInProgress(),Fo("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await _c(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function fd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await pd(e);Fo("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>vl(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>vl(t.remoteStore,n))),e._onlineComponents=t}function md(e){return"FirebaseError"===e.name?e.code===Ho.FAILED_PRECONDITION||e.code===Ho.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function pd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Fo("FirestoreClient","Using user provided OfflineComponentProvider");try{await dd(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!md(n))throw n;Uo("Error using user provided cache. Falling back to memory cache: "+n),await dd(e,new hd)}}else Fo("FirestoreClient","Using default OfflineComponentProvider"),await dd(e,new hd);return e._offlineComponents}async function gd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Fo("FirestoreClient","Using user provided OnlineComponentProvider"),await fd(e,e._uninitializedComponentsProvider._online)):(Fo("FirestoreClient","Using default OnlineComponentProvider"),await fd(e,new ud))),e._onlineComponents}function yd(e){return gd(e).then((e=>e.syncEngine))}async function wd(e){const t=await gd(e),n=t.eventManager;return n.onListen=Wl.bind(null,t.syncEngine),n.onUnlisten=Hl.bind(null,t.syncEngine),n}function vd(e,t,n={}){const i=new $o;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const o=new cd({next:n=>{t.enqueueAndForget((()=>Rl(e,r))),n.fromCache&&"server"===i.source?s.reject(new zo(Ho.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),r=new Ll(n,o,{includeMetadataChanges:!0,Ku:!0});return Dl(e,r)}(await wd(e),e.asyncQueue,t,n,i))),i.promise}
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
function bd(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const Td=new Map;
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
 */function kd(e,t,n){if(!n)throw new zo(Ho.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function _d(e){if(!lr.isDocumentKey(e))throw new zo(Ho.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Id(e){if(lr.isDocumentKey(e))throw new zo(Ho.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ed(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":qo()}function Sd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new zo(Ho.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ed(e);throw new zo(Ho.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Cd(e,t){if(t<=0)throw new zo(Ho.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */class Ad{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new zo(Ho.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new zo(Ho.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new zo(Ho.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bd(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new zo(Ho.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new zo(Ho.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new zo(Ho.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class Nd{get app(){if(!this._app)throw new zo(Ho.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new zo(Ho.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ad(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Go;switch(e.type){case"firstParty":return new Xo(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new zo(Ho.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Td.get(e);t&&(Fo("ComponentProvider","Removing Datastore"),Td.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ad({}),this._settingsFrozen=!1}}function Dd(e,t,n,i={}){var s;const o=(e=Sd(e,Nd))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&Uo("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Po.MOCK_USER;else{t=G(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new zo(Ho.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Po(o)}e._authCredentials=new Yo(new Ko(t,n))}}
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
 */class Rd{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rd(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class xd{withConverter(e){return new xd(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Pd extends xd{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rd(this.firestore,null,new lr(e))}withConverter(e){return new Pd(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Ha(n)),this._path=n,this.type="collection"}}function Od(e,t,...n){if(e=le(e),kd("collection","path",t),e instanceof Nd){const i=hr.fromString(t,...n);return Id(i),new Pd(e,null,i)}{if(!(e instanceof Rd||e instanceof Pd))throw new zo(Ho.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(hr.fromString(t,...n));return Id(i),new Pd(e.firestore,null,i)}}
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
class Ld{get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Vc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new $o;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Tr(e))throw e;Fo("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;throw jo("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=_l.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(i),i}Zc(){this.Wc&&qo()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Wc(this,"async_queue_retry"),this.Xc=()=>{const e=Vc();e&&Fo("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Vc();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}}class Md extends Nd{_terminate(){return this._firestoreClient||Ud(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Ld,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function Fd(e,t){const n="string"==typeof e?e:t||"(default)",i=Ke("object"==typeof e?e:Je(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=H("firestore");e&&Dd(i,...e)}return i}function jd(e){return e._firestoreClient||Ud(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ud(e){var t,n,i;const s=e._freezeSettings(),o=(r=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",h=e._persistenceKey,new Gr(r,a,h,(u=s).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,bd(u.experimentalLongPollingOptions),u.useFetchStreams));var r,a,h,u;e._firestoreClient=new ld(e._authCredentials,e._appCheckCredentials,e._queue,o),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
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
class Vd{static fromBase64String(e){try{return new Vd(Vr.fromBase64String(e))}catch(e){throw new zo(Ho.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Vd(Vr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
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
 */class qd{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new zo(Ho.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new cr(e)}}
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
class Wd{constructor(e){this._methodName=e}}
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
 */class Bd{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ir(this._lat,e._lat)||ir(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new zo(Ho.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new zo(Ho.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
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
 */const Hd=/^__.*__$/;class zd{toMutation(e,t){return null!==this.fieldMask?new Hh(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bh(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function $d(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw qo()}}class Kd{get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Kd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.fa(e),i}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return rf(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if($d(this.ca)&&Hd.test(e))throw this._a('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}}class Gd{ya(e,t,n,i=!1){return new Kd({ca:e,methodName:t,ga:n,path:cr.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||qc(e)}}function Yd(e){const t=e._freezeSettings(),n=qc(e._databaseId);return new Gd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Qd(e,t,n,i,s,o={}){const r=e.ya(o.merge||o.mergeFields?2:0,t,n,s);tf("Data must be an object, but it was:",r,i);const a=Zd(i,r);let h,u;if(o.merge)h=new Fr(r.fieldMask),u=r.fieldTransforms;else if(o.mergeFields){const e=[];for(const i of o.mergeFields){const s=nf(t,i,n);if(!r.contains(s))throw new zo(Ho.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);af(e,s)||e.push(s)}h=new Fr(e),u=r.fieldTransforms.filter((e=>h.covers(e.field)))}else h=null,u=r.fieldTransforms;return new zd(new da(a),h,u)}function Jd(e,t,n,i=!1){return Xd(n,e.ya(i?4:3,t))}function Xd(e,t){if(ef(e=le(e)))return tf("Unsupported field value:",t,e),Zd(e,t);if(e instanceof Wd)return function(e,t){if(!$d(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=Xd(s,t.wa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=le(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return kh(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=or.fromDate(e);return{timestampValue:Su(t.serializer,n)}}if(e instanceof or){const n=new or(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Su(t.serializer,n)}}if(e instanceof Bd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Vd)return{bytesValue:Cu(t.serializer,e._byteString)};if(e instanceof Rd){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Du(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Ed(e)}`)}(e,t)}function Zd(e,t){const n={};return Rr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Dr(e,((e,i)=>{const s=Xd(i,t.ha(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function ef(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof or||e instanceof Bd||e instanceof Vd||e instanceof Rd||e instanceof Wd)}function tf(e,t,n){if(!ef(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Ed(n);throw"an object"===i?t._a(e+" a custom object"):t._a(e+" "+i)}var i}function nf(e,t,n){if((t=le(t))instanceof qd)return t._internalPath;if("string"==typeof t)return of(e,t);throw rf("Field path arguments must be of type string or ",e,!1,void 0,n)}const sf=new RegExp("[~\\*/\\[\\]]");function of(e,t,n){if(t.search(sf)>=0)throw rf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new qd(...t.split("."))._internalPath}catch(i){throw rf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rf(e,t,n,i,s){const o=i&&!i.isEmpty(),r=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(o||r)&&(h+=" (found",o&&(h+=` in field ${i}`),r&&(h+=` in document ${s}`),h+=")"),new zo(Ho.INVALID_ARGUMENT,a+e+h)}function af(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class hf{get id(){return this._key.path.lastSegment()}get ref(){return new Rd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new uf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}}class uf extends hf{data(){return super.data()}}function cf(e,t){return"string"==typeof t?of(e,t):t instanceof qd?t._internalPath:t._delegate._internalPath}
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
 */function lf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new zo(Ho.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class df{}class ff extends df{}function mf(e,t,...n){let i=[];t instanceof df&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof yf)).length,n=e.filter((e=>e instanceof pf)).length;if(t>1||t>0&&n>0)throw new zo(Ho.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const t of i)e=t._apply(e);return e}class pf extends ff{static _create(e,t,n){return new pf(e,t,n)}_apply(e){const t=this._parse(e);return _f(e._query,t),new xd(e.firestore,e.converter,Ja(e._query,t))}_parse(e){const t=Yd(e.firestore);return function(e,t,n,i,s,o,r){let a;if(s.isKeyField()){if("array-contains"===o||"array-contains-any"===o)throw new zo(Ho.INVALID_ARGUMENT,`Invalid Query. You can't perform '${o}' queries on documentId().`);if("in"===o||"not-in"===o){kf(r,o);const t=[];for(const n of r)t.push(Tf(i,e,n));a={arrayValue:{values:t}}}else a=Tf(i,e,r)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||kf(r,o),a=Jd(n,"where",r,"in"===o||"not-in"===o);return Ta.create(s,o,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}}function gf(e,t,n){const i=t,s=cf("where",e);return pf._create(s,i,n)}class yf extends df{static _create(e,t){return new yf(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:ka.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const e of i)_f(n,e),n=Ja(n,e)}(e._query,t),new xd(e.firestore,e.converter,Ja(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(e,t){super(),this.type=e,this._queryConstraints=t}}class wf extends ff{static _create(e,t){return new wf(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new zo(Ho.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new zo(Ho.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new wa(t,n);return function(e,t){if(null===$a(e)){const n=Ka(e);null!==n&&If(e,n,t.field)}}(e,i),i}(e._query,this._field,this._direction);return new xd(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Wa(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}}function vf(e,t="asc"){const n=t,i=cf("orderBy",e);return wf._create(i,n)}class bf extends ff{static _create(e,t,n){return new bf(e,t,n)}_apply(e){return new xd(e.firestore,e.converter,Xa(e._query,this._limit,this._limitType))}constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}}function Tf(e,t,n){if("string"==typeof(n=le(n))){if(""===n)throw new zo(Ho.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ga(t)&&-1!==n.indexOf("/"))throw new zo(Ho.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(hr.fromString(n));if(!lr.isDocumentKey(i))throw new zo(Ho.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return sa(e,new lr(i))}if(n instanceof Rd)return sa(e,n._key);throw new zo(Ho.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ed(n)}.`)}function kf(e,t){if(!Array.isArray(e)||0===e.length)throw new zo(Ho.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function _f(e,t){if(t.isInequality()){const n=Ka(e),i=t.field;if(null!==n&&!n.isEqual(i))throw new zo(Ho.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const s=$a(e);null!==s&&If(e,i,s)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new zo(Ho.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new zo(Ho.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function If(e,t,n){if(!n.isEqual(t))throw new zo(Ho.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ef{convertValue(e,t="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Br(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw qo()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Dr(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Bd(Br(e.latitude),Br(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=$r(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=Wr(e);return new or(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=hr.fromString(e);Wo(Qu(n));const i=new Yr(n.get(1),n.get(3)),s=new lr(n.popFirst(5));return i.isEqual(t)||jo(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */function Sf(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
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
class Cf{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Af extends hf{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(cf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}}class Nf extends Af{data(e={}){return super.data(e)}}class Df{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Nf(this._firestore,this._userDataWriter,n.key,n,new Cf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new zo(Ho.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Nf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Cf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Nf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Cf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,o=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),o=n.indexOf(t.doc.key)),{type:Rf(t.type),doc:i,oldIndex:s,newIndex:o}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Cf(i.hasPendingWrites,i.fromCache),this.query=n}}function Rf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return qo()}}class xf extends Ef{convertBytes(e){return new Vd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rd(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Pf(e){e=Sd(e,xd);const t=Sd(e.firestore,Md),n=jd(t),i=new xf(t);return lf(e._query),vd(n,e._query).then((n=>new Df(t,i,e,n)))}function Of(e,t){const n=Sd(e.firestore,Md),i=function(e,t,...n){if(e=le(e),1===arguments.length&&(t=nr.A()),kd("doc","path",t),e instanceof Nd){const i=hr.fromString(t,...n);return _d(i),new Rd(e,null,new lr(i))}{if(!(e instanceof Rd||e instanceof Pd))throw new zo(Ho.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(hr.fromString(t,...n));return _d(i),new Rd(e.firestore,e instanceof Pd?e.converter:null,new lr(i))}}(e),s=Sf(e.converter,t);return Lf(n,[Qd(Yd(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,Lh.exists(!1))]).then((()=>i))}function Lf(e,t){return function(e,t){const n=new $o;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=ad(e);try{const e=await function(e,t){const n=Bo(e),i=or.now(),s=t.reduce(((e,t)=>e.add(t.key)),yh());let o,r;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=hh(),h=yh();return n.Zi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(h=h.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{o=s;const r=[];for(const e of t){const t=qh(e,o.get(e.key).overlayedDocument);null!=t&&r.push(new Hh(e.key,t,fa(t.value.mapValue),Lh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,r,t)})).next((t=>{r=t;const i=t.applyToLocalDocumentSet(o,h);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:r.batchId,changes:lh(o)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Tc[e.currentUser.toKey()];i||(i=new xr(ir)),i=i.insert(t,n),e.Tc[e.currentUser.toKey()]=i}(i,e.batchId,n),await id(i,e.changes),await cl(i.remoteStore)}catch(e){const t=Il(e,"Failed to persist write");n.reject(t)}}(await yd(e),t,n))),n.promise}(jd(e),t)}!function(e,t=!0){Oo="9.22.0",$e(new de("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),o=new Md(new Qo(e.getProvider("auth-internal")),new er(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new zo(Ho.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yr(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),Xe("@firebase/firestore","3.12.0",e),Xe("@firebase/firestore","3.12.0","esm2017")}();function Mf(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function Ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jf=Ff,Uf=new ee("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Vf=new ke("@firebase/auth");function qf(e,...t){Vf.logLevel<=ge.ERROR&&Vf.error(`Auth (9.22.0): ${e}`,...t)}
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
 */function Wf(e,...t){throw zf(e,...t)}function Bf(e,...t){return zf(e,...t)}function Hf(e,t,n){const i=Object.assign(Object.assign({},jf()),{[t]:n});return new ee("auth","Firebase",i).create(t,{appName:e.name})}function zf(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Uf.create(e,...t)}function $f(e,t,...n){if(!e)throw zf(t,...n)}function Kf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qf(t),new Error(t)}function Gf(e,t){e||Kf(t)}
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
 */function Yf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Qf(){return"http:"===Jf()||"https:"===Jf()}function Jf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Xf(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Qf()||Q()||"connection"in navigator))||navigator.onLine}
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
class Zf{get(){return Xf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Gf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function em(e,t){Gf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class tm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Kf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Kf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Kf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const nm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},im=new Zf(3e4,6e4);
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
 */function sm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function om(e,t,n,i,s={}){return rm(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const r=oe(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),tm.fetch()(hm(e,e.config.apiHost,n,r),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function rm(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},nm),t);try{const t=new um(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cm(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const t=s.ok?o.errorMessage:o.error.message,[n,r]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw cm(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw cm(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw cm(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw Hf(e,a,r);Wf(e,a)}}catch(t){if(t instanceof Z)throw t;Wf(e,"network-request-failed",{message:String(t)})}}async function am(e,t,n,i,s={}){const o=await om(e,t,n,i,s);return"mfaPendingCredential"in o&&Wf(e,"multi-factor-auth-required",{_serverResponse:o}),o}function hm(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?em(e.config,s):`${e.config.apiScheme}://${s}`}class um{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Bf(this.auth,"network-request-failed"))),im.get())}))}}function cm(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Bf(e,t,i);return s.customData._tokenResponse=n,s}
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
function lm(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function dm(e){return 1e3*Number(e)}function fm(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return qf("JWT malformed, contained fewer than 3 sections"),null;try{const e=V(n);return e?JSON.parse(e):(qf("Failed to decode base64 JWT payload"),null)}catch(e){return qf("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function mm(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Z&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class pm{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class gm{_initializeTime(){this.lastSignInTime=lm(this.lastLoginAt),this.creationTime=lm(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function ym(e){var t;const n=e.auth,i=await e.getIdToken(),s=await mm(e,async function(e,t){return om(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));$f(null==s?void 0:s.users.length,n,"internal-error");const o=s.users[0];e._notifyReloadListener(o);const r=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Mf(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(h=e.providerData,u=r,[...h.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var h,u;const c=e.isAnonymous,l=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!c&&l,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new gm(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class wm{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$f(e.idToken,"internal-error"),$f(void 0!==e.idToken,"internal-error"),$f(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=fm(e);return $f(t,"internal-error"),$f(void 0!==t.exp,"internal-error"),$f(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $f(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
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
async function(e,t){const n=await rm(e,{},(async()=>{const n=oe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=hm(e,i,"/v1/token",`key=${s}`),r=await e._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",tm.fetch()(o,{method:"POST",headers:r,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new wm;return n&&($f("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&($f("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),s&&($f("number"==typeof s,"internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wm,this.toJSON())}_performRefresh(){return Kf("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function vm(e,t){$f("string"==typeof e||void 0===e,"internal-error",{appName:t})}class bm{async getIdToken(e){const t=await mm(this,this.stsTokenManager.getToken(this.auth,e));return $f(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=le(e),i=await n.getIdToken(t),s=fm(i);$f(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,r=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:lm(dm(s.auth_time)),issuedAtTime:lm(dm(s.iat)),expirationTime:lm(dm(s.exp)),signInProvider:r||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=le(e);await ym(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&($f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bm(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ym(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mm(this,async function(e,t){return om(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,r,a,h,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,m=null!==(r=t.tenantId)&&void 0!==r?r:void 0,p=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(h=t.createdAt)&&void 0!==h?h:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:v,isAnonymous:b,providerData:T,stsTokenManager:k}=t;$f(w&&k,e,"internal-error");const _=wm.fromJSON(this.name,k);$f("string"==typeof w,e,"internal-error"),vm(c,e.name),vm(l,e.name),$f("boolean"==typeof v,e,"internal-error"),$f("boolean"==typeof b,e,"internal-error"),vm(d,e.name),vm(f,e.name),vm(m,e.name),vm(p,e.name),vm(g,e.name),vm(y,e.name);const I=new bm({uid:w,auth:e,email:l,emailVerified:v,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:m,stsTokenManager:_,createdAt:g,lastLoginAt:y});return T&&Array.isArray(T)&&(I.providerData=T.map((e=>Object.assign({},e)))),p&&(I._redirectEventId=p),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new wm;i.updateFromServerResponse(t);const s=new bm({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ym(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Mf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gm(s.createdAt||void 0,s.lastLoginAt||void 0)}}
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
 */const Tm=new Map;function km(e){Gf(e instanceof Function,"Expected a class definition");let t=Tm.get(e);return t?(Gf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Tm.set(e,t),t)}
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
 */class _m{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}_m.type="NONE";const Im=_m;
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
 */function Em(e,t,n){return`firebase:${e}:${t}:${n}`}class Sm{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bm._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Sm(km(Im),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||km(Im);const o=Em(n,e.config.apiKey,e.name);let r=null;for(const n of t)try{const t=await n._get(o);if(t){const i=bm._fromJSON(e,t);n!==s&&(r=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],r&&await s._set(o,r.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(o)}catch(e){}}))),new Sm(s,e,n)):new Sm(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Em(this.userKey,i.apiKey,s),this.fullPersistenceKey=Em("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Cm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Rm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Am(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pm(t))return"Blackberry";if(Om(t))return"Webos";if(Nm(t))return"Safari";if((t.includes("chrome/")||Dm(t))&&!t.includes("edge/"))return"Chrome";if(xm(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Am(e=Y()){return/firefox\//i.test(e)}function Nm(e=Y()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Dm(e=Y()){return/crios\//i.test(e)}function Rm(e=Y()){return/iemobile/i.test(e)}function xm(e=Y()){return/android/i.test(e)}function Pm(e=Y()){return/blackberry/i.test(e)}function Om(e=Y()){return/webos/i.test(e)}function Lm(e=Y()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Mm(){return J()&&10===document.documentMode}function Fm(e=Y()){return Lm(e)||xm(e)||Om(e)||Pm(e)||/windows phone/i.test(e)||Rm(e)}
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
function jm(e,t=[]){let n;switch(e){case"Browser":n=Cm(Y());break;case"Worker":n=`${Cm(Y())}-${e}`;break;default:n=e}return`${n}/JsCore/9.22.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */async function Um(e,t){return om(e,"GET","/v2/recaptchaConfig",sm(e,t))}
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
 */function Vm(e){return void 0!==e&&void 0!==e.enterprise}class qm{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Wm(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Bf("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==o?o:document).appendChild(i)}))}function Bm(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Hm{async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;Vm(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Um(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new qm(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&Vm(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Wm("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=Gm(e)}}async function zm(e,t,n,i=!1){const s=new Hm(e);let o;try{o=await s.verify(n)}catch(e){o=await s.verify(n,!0)}const r=Object.assign({},t);return i?Object.assign(r,{captchaResp:o}):Object.assign(r,{captchaResponse:o}),Object.assign(r,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(r,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),r}
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
 */class $m{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Km{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=km(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Sm.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,r=await this.tryRedirectSignIn(e);n&&n!==o||!(null==r?void 0:r.user)||(i=r.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ym(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?le(e):null;return t&&$f(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(km(e))}))}async initializeRecaptchaConfig(){const e=await Um(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new qm(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Hm(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ee("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&km(e)||this._popupRedirectResolver;$f(t,this,"argument-error"),this.redirectPersistenceManager=await Sm.create(this,[km(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $f(o,this,"internal-error"),o.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Vf.logLevel<=ge.WARN&&Vf.warn(`Auth (9.22.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ym(this),this.idTokenSubscription=new Ym(this),this.beforeStateQueue=new $m(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function Gm(e){return le(e)}class Ym{get next(){return $f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=he((e=>this.observer=e))}}
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
 */function Qm(e,t,n){const i=Gm(e);$f(i._canInitEmulator,i,"emulator-config-failed"),$f(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),o=Jm(t),{host:r,port:a}=function(e){const t=Jm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:Xm(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Xm(t)}}}(t),h=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${r}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:r,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Jm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Zm{toJSON(){return Kf("not implemented")}_getIdTokenResponse(e){return Kf("not implemented")}_linkToIdToken(e,t){return Kf("not implemented")}_getReauthenticationResolver(e){return Kf("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function ep(e,t){return om(e,"POST","/v1/accounts:update",t)}
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
async function tp(e,t){return am(e,"POST","/v1/accounts:signInWithPassword",sm(e,t))}
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
class np extends Zm{static _fromEmailAndPassword(e,t){return new np(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new np(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await zm(e,n,"signInWithPassword");return tp(e,t)}return tp(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await zm(e,n,"signInWithPassword");return tp(e,t)}return Promise.reject(t)}));case"emailLink":
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
return async function(e,t){return am(e,"POST","/v1/accounts:signInWithEmailLink",sm(e,t))}(e,{email:this._email,oobCode:this._password});default:Wf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ep(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return am(e,"POST","/v1/accounts:signInWithEmailLink",sm(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Wf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function ip(e,t){return am(e,"POST","/v1/accounts:signInWithIdp",sm(e,t))}
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
 */class sp extends Zm{static _fromParams(e){const t=new sp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Mf(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new sp(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){return ip(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ip(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ip(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oe(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const op={USER_NOT_FOUND:"user-not-found"};
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
class rp extends Zm{static _fromVerification(e,t){return new rp({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new rp({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return am(e,"POST","/v1/accounts:signInWithPhoneNumber",sm(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await am(e,"POST","/v1/accounts:signInWithPhoneNumber",sm(e,t));if(n.temporaryProof)throw cm(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return am(e,"POST","/v1/accounts:signInWithPhoneNumber",sm(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),op)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new rp({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class ap{static parseLink(e){const t=function(e){const t=re(ae(e)).link,n=t?re(ae(t)).deep_link_id:null,i=re(ae(e)).deep_link_id;return(i?re(ae(i)).link:null)||i||n||t||e}(e);try{return new ap(t)}catch(e){return null}}constructor(e){var t,n,i,s,o,r;const a=re(ae(e)),h=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);$f(h&&u&&c,"argument-error"),this.apiKey=h,this.operation=c,this.code=u,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(r=a.tenantId)&&void 0!==r?r:null}}
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
class hp{static credential(e,t){return np._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ap.parseLink(t);return $f(n,"argument-error"),np._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=hp.PROVIDER_ID}}hp.PROVIDER_ID="password",hp.EMAIL_PASSWORD_SIGN_IN_METHOD="password",hp.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class up{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class cp extends up{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class lp extends cp{static credential(e){return sp._fromParams({providerId:lp.PROVIDER_ID,signInMethod:lp.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lp.credentialFromTaggedObject(e)}static credentialFromError(e){return lp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lp.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}lp.FACEBOOK_SIGN_IN_METHOD="facebook.com",lp.PROVIDER_ID="facebook.com";
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
class dp extends cp{static credential(e,t){return sp._fromParams({providerId:dp.PROVIDER_ID,signInMethod:dp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dp.credentialFromTaggedObject(e)}static credentialFromError(e){return dp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return dp.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}dp.GOOGLE_SIGN_IN_METHOD="google.com",dp.PROVIDER_ID="google.com";
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
class fp extends cp{static credential(e){return sp._fromParams({providerId:fp.PROVIDER_ID,signInMethod:fp.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fp.credentialFromTaggedObject(e)}static credentialFromError(e){return fp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fp.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}fp.GITHUB_SIGN_IN_METHOD="github.com",fp.PROVIDER_ID="github.com";
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
class mp extends cp{static credential(e,t){return sp._fromParams({providerId:mp.PROVIDER_ID,signInMethod:mp.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mp.credentialFromTaggedObject(e)}static credentialFromError(e){return mp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mp.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function pp(e,t){return am(e,"POST","/v1/accounts:signUp",sm(e,t))}
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
 */mp.TWITTER_SIGN_IN_METHOD="twitter.com",mp.PROVIDER_ID="twitter.com";class gp{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await bm._fromIdTokenResponse(e,n,i),o=yp(n);return new gp({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=yp(n);return new gp({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function yp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class wp extends Z{static _fromErrorAndOperation(e,t,n,i){return new wp(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,wp.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function vp(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw wp._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function bp(e,t,n=!1){const i=await mm(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gp._forOperation(e,"link",i)}
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
async function Tp(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const o=await mm(e,vp(i,s,t,e),n);$f(o.idToken,i,"internal-error");const r=fm(o.idToken);$f(r,i,"internal-error");const{sub:a}=r;return $f(e.uid===a,i,"user-mismatch"),gp._forOperation(e,s,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Wf(i,"user-mismatch"),e}}
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
 */async function kp(e,t,n=!1){const i="signIn",s=await vp(e,i,t),o=await gp._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}async function _p(e,t){return kp(Gm(e),t)}async function Ip(e,t,n){var i;const s=Gm(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let r;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await zm(s,o,"signUpPassword");r=pp(s,e)}else r=pp(s,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await zm(s,o,"signUpPassword");return pp(s,e)}return Promise.reject(e)}));const a=await r.catch((e=>Promise.reject(e))),h=await gp._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(h.user),h}function Ep(e,t,n){return _p(le(e),hp.credential(t,n))}
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
 */function Sp(e,t,n,i){return le(e).onAuthStateChanged(t,n,i)}new WeakMap;
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
class Cp{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Ap extends Cp{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Mm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Y();return Nm(e)||Lm(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Fm(),this._shouldAllowMigration=!0}}Ap.type="LOCAL";const Np=Ap;
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
 */class Dp extends Cp{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Dp.type="SESSION";const Rp=Dp;
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
class xp{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new xp(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const r=Array.from(o).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(r);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Pp(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */xp.receivers=[];class Op{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise(((r,a)=>{const h=Pp("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===h)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),r(t.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Lp(){return window}
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
function Mp(){return void 0!==Lp().WorkerGlobalScope&&"function"==typeof Lp().importScripts}class Fp{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function jp(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Up(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Fp(e).toPromise()}(),t(await Up()))}))}))}async function Vp(e,t,n){const i=jp(e,!0).put({fbase_key:t,value:n});return new Fp(i).toPromise()}function qp(e,t){const n=jp(e,!0).delete(t);return new Fp(n).toPromise()}class Wp{async _openDb(){return this.db||(this.db=await Up()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xp._getInstance(Mp()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Op(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Up();return await Vp(e,"__sak","1"),await qp(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Vp(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=jp(e,!1).get(t),i=await new Fp(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>qp(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=jp(e,!1).getAll();return new Fp(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Wp.type="LOCAL";const Bp=Wp;
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
Bm("rcb"),new Zf(3e4,6e4);async function Hp(e,t,n){var i;const s=await n.verify();try{let o;if($f("string"==typeof s,e,"argument-error"),$f("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){$f("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return om(e,"POST","/v2/accounts/mfaEnrollment:start",sm(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{$f("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;$f(n,e,"missing-multi-factor-info");const r=await function(e,t){return om(e,"POST","/v2/accounts/mfaSignIn:start",sm(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return r.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return om(e,"POST","/v1/accounts:sendVerificationCode",sm(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
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
class zp{verifyPhoneNumber(e,t){return Hp(this.auth,e,le(t))}static credential(e,t){return rp._fromVerification(e,t)}static credentialFromResult(e){const t=e;return zp.credentialFromTaggedObject(t)}static credentialFromError(e){return zp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?rp._fromTokenResponse(t,n):null}constructor(e){this.providerId=zp.PROVIDER_ID,this.auth=Gm(e)}}
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
function $p(e,t){return t?km(t):($f(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */zp.PROVIDER_ID="phone",zp.PHONE_SIGN_IN_METHOD="phone";class Kp extends Zm{_getIdTokenResponse(e){return ip(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ip(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ip(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Gp(e){return kp(e.auth,new Kp(e),e.bypassAuthState)}function Yp(e){const{auth:t,user:n}=e;return $f(n,t,"internal-error"),Tp(n,new Kp(e),e.bypassAuthState)}async function Qp(e){const{auth:t,user:n}=e;return $f(n,t,"internal-error"),bp(n,new Kp(e),e.bypassAuthState)}
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
 */class Jp{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:r}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(r)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gp;case"linkViaPopup":case"linkViaRedirect":return Qp;case"reauthViaPopup":case"reauthViaRedirect":return Yp;default:Wf(this.auth,"internal-error")}}resolve(e){Gf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Xp=new Zf(2e3,1e4);class Zp extends Jp{async executeNotNull(){const e=await this.execute();return $f(e,this.auth,"internal-error"),e}async onExecution(){Gf(1===this.filter.length,"Popup operations only handle one event");const e=Pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Bf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Bf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zp.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Bf(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Xp.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Zp.currentPopupAction&&Zp.currentPopupAction.cancel(),Zp.currentPopupAction=this}}Zp.currentPopupAction=null;
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
const eg=new Map;class tg extends Jp{async execute(){let e=eg.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=sg(t),i=ig(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}eg.set(this.auth._key(),e)}return this.bypassAuthState||eg.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ng(e,t){eg.set(e._key(),t)}function ig(e){return km(e._redirectPersistence)}function sg(e){return Em("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function og(e,t,n=!1){const i=Gm(e),s=$p(i,t),o=new tg(i,s,n),r=await o.execute();return r&&!n&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,t)),r}class rg{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hg(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Bf(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ag(e))}saveEventToCache(e){this.cachedEventUids.add(ag(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ag(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function hg({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cg=/^https?/;async function lg(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return om(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(dg(e))return}catch(e){}Wf(e,"unauthorized-domain")}function dg(e){const t=Yf(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!cg.test(n))return!1;if(ug.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
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
 */const fg=new Zf(3e4,6e4);function mg(){const e=Lp().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let pg=null;function gg(e){return pg=pg||function(e){return new Promise(((t,n)=>{var i,s,o;function r(){mg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mg(),n(Bf(e,"network-request-failed"))},timeout:fg.get()})}if(null===(s=null===(i=Lp().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Lp().gapi)||void 0===o?void 0:o.load)){const t=Bm("iframefcb");return Lp()[t]=()=>{gapi.load?r():n(Bf(e,"network-request-failed"))},Wm(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}r()}})).catch((e=>{throw pg=null,e}))}(e),pg}
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
 */const yg=new Zf(5e3,15e3),wg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bg(e){const t=e.config;$f(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?em(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.22.0"},s=vg.get(e.config.apiHost);s&&(i.eid=s);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${oe(i).slice(1)}`}
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
const Tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class kg{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function _g(e,t,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const h=Object.assign(Object.assign({},Tg),{width:i.toString(),height:s.toString(),top:o,left:r}),u=Y().toLowerCase();n&&(a=Dm(u)?"_blank":n),Am(u)&&(t=t||"http://localhost",h.scrollbars="yes");const c=Object.entries(h).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Y()){var t;return Lm(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new kg(null);const l=window.open(t||"",a,c);$f(l,e,"popup-blocked");try{l.focus()}catch(e){}return new kg(l)}const Ig=encodeURIComponent("fac");async function Eg(e,t,n,i,s,o){$f(e.config.authDomain,e,"auth-domain-config-required"),$f(e.config.apiKey,e,"invalid-api-key");const r={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.22.0",eventId:s};if(t instanceof up){t.setDefaultLanguage(e.languageCode),r.providerId=t.providerId||"",ne(t.getCustomParameters())||(r.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))r[e]=t}if(t instanceof cp){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(r.scopes=e.join(","))}e.tenantId&&(r.tid=e.tenantId);const a=r;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const h=await e._getAppCheckToken(),u=h?`#${Ig}=${encodeURIComponent(h)}`:"";return`${function({config:e}){return e.emulator?em(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${oe(a).slice(1)}${u}`}const Sg=class{async _openPopup(e,t,n,i){var s;Gf(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return _g(e,await Eg(e,t,n,Yf(),i),Pp())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){Lp().location.href=e}(await Eg(e,t,n,Yf(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Gf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await gg(e),n=Lp().gapi;return $f(n,e,"internal-error"),t.open({where:document.body,url:bg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wg,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=Bf(e,"network-request-failed"),o=Lp().setTimeout((()=>{i(s)}),yg.get());function r(){Lp().clearTimeout(o),n(t)}t.ping(r).then(r,(()=>{i(s)}))}))))}(e),n=new rg(e);return t.register("authEvent",(t=>{$f(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),Wf(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fm()||Nm()||Lm()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rp,this._completeRedirectFn=og,this._overrideRedirectResult=ng}};
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
class Cg{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const Ag=$("authIdTokenMaxAge")||300;let Ng=null;function Dg(e=Je()){const t=Ke(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ke(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ie(n.getOptions(),null!=t?t:{}))return e;Wf(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Sg,persistence:[Bp,Np,Rp]}),i=$("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ag)return;const i=null==t?void 0:t.token;Ng!==i&&(Ng=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){le(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){le(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const o=B("auth");return o&&Qm(n,`http://${o}`),n}var Rg;Rg="Browser",$e(new de("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:r}=n.options;$f(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:o,authDomain:r,clientPlatform:Rg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jm(Rg)},h=new Km(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(km);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(h,t),h}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),$e(new de("auth-internal",(e=>{const t=Gm(e.getProvider("auth").getImmediate());return new Cg(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Xe("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Rg)),Xe("@firebase/auth","0.23.2","esm2017");Qe({apiKey:"AIzaSyCJxy5vpXS7f1dJ93rKe4eeCdNHYRq7lSc",authDomain:"fate-compass-6afb9.firebaseapp.com",projectId:"fate-compass-6afb9",storageBucket:"fate-compass-6afb9.appspot.com",messagingSenderId:"37313764377",appId:"1:37313764377:web:285a6a927584aaec30de88"});const xg=Fd(),Pg=Dg(),Og=Od(xg,"reads");let Lg,Mg=[];const Fg={startBtn:document.querySelector(".tarot-button"),tarotRead:document.querySelector(".tarot-cards"),tarotDescr:document.querySelector(".cards-descr"),prevReadsBtn:document.querySelector(".see-previous"),prevReads:document.querySelector(".prev-reads"),closeBtn:document.querySelector('[data-close="2"]'),body:document.querySelector("body"),backdrop:document.querySelector(".reads-backdrop")},{startBtn:jg,tarotRead:Ug,tarotDescr:Vg,prevReadsBtn:qg,prevReads:Wg,closeBtn:Bg,body:Hg,backdrop:zg}=Fg;jg.addEventListener("click",(e=>{Ug.innerHTML="",Vg.innerHTML="";const t=b();Lg&&Gg(t),Yg(),jg.style.marginBottom="50px",$g(t)})),qg.addEventListener("click",(()=>{if(Wg.innerHTML="",Hg.style.overflow="hidden",zg.classList.remove("hidden"),0!==Mg.length)Kg(Mg);else{const e='<p class="no-reads">Sorry, but there are no previous reads</p>';Wg.insertAdjacentHTML("beforeend",e)}})),Bg.addEventListener("click",(()=>{Hg.style.overflow="scroll",zg.classList.add("hidden")}));const $g=e=>{const t=e.map((({pic:e,name:t})=>`<li class="item">\n                <img width="360" src="${e}" alt="${t}"/>\n                <p class="card-name">${t}</p>\n            </li>`)).join("");Ug.insertAdjacentHTML("beforeend",t);const n=e.map((({name:e,meaning_up:t,meaning_rev:n})=>`<li class="item">\n                <h3>${e}</h3>\n                <p><b>Meaning up:</b> ${t}</p>\n                <p><b>Meaning reversed:</b> ${n}</p>\n            </li>`)).join("");Vg.insertAdjacentHTML("beforeend",n)},Kg=e=>{const t=e.map((({card1:e,card2:t,card3:n,card4:i,card5:s,card6:o})=>`<li class="item">\n            <ul class="prev-cards">\n                <li class="card">\n                    <h3>${e.name}</h3>\n                    <p><b>Meaning up:</b> ${e.meanUp}</p>\n                    <p><b>Meaning reversed:</b> ${e.meanRev}</p>\n                </li>\n                <li class="card">\n                    <h3>${t.name}</h3>\n                    <p><b>Meaning up:</b> ${t.meanUp}</p>\n                    <p><b>Meaning reversed:</b> ${t.meanRev}</p>\n                </li>\n                <li class="card">\n                    <h3>${n.name}</h3>\n                    <p><b>Meaning up:</b> ${n.meanUp}</p>\n                    <p><b>Meaning reversed:</b> ${n.meanRev}</p>\n                </li>\n                <li class="card">\n                    <h3>${i.name}</h3>\n                    <p><b>Meaning up:</b> ${i.meanUp}</p>\n                    <p><b>Meaning reversed:</b> ${i.meanRev}</p>\n                </li>\n                <li class="card">\n                    <h3>${s.name}</h3>\n                    <p><b>Meaning up:</b> ${s.meanUp}</p>\n                    <p><b>Meaning reversed:</b> ${s.meanRev}</p>\n                    </li>\n                <li class="card">\n                    <h3>${o.name}</h3>\n                    <p><b>Meaning up:</b> ${o.meanUp}</p>\n                    <p><b>Meaning reversed:</b> ${o.meanRev}</p>\n                </li>\n            </ul>   \n        </li>`)).join("");Wg.insertAdjacentHTML("beforeend",t)},Gg=e=>{Of(Og,{email:Lg,timestamp:new Date,card1:{name:e[0].name,meanUp:e[0].meaning_up,meanRev:e[0].meaning_rev},card2:{name:e[1].name,meanUp:e[1].meaning_up,meanRev:e[1].meaning_rev},card3:{name:e[2].name,meanUp:e[2].meaning_up,meanRev:e[2].meaning_rev},card4:{name:e[3].name,meanUp:e[3].meaning_up,meanRev:e[3].meaning_rev},card5:{name:e[4].name,meanUp:e[4].meaning_up,meanRev:e[4].meaning_rev},card6:{name:e[5].name,meanUp:e[5].meaning_up,meanRev:e[5].meaning_rev}})},Yg=()=>{var e;Pf(mf(Og,gf("email","==",Lg),vf("timestamp","desc"),(Cd("limit",e=5),bf._create("limit",e,"F")))).then((e=>{e.docs.forEach((e=>{Mg.push({...e.data()})})),console.log(Mg)})),Mg=[]};Sp(Pg,(e=>{if(Ug.innerHTML="",Vg.innerHTML="",jg.style.marginBottom="0px",null===e)return qg.classList.add("hidden"),Lg=null;qg.classList.remove("hidden"),Lg=e.email,Yg()}));Qe({apiKey:"AIzaSyCJxy5vpXS7f1dJ93rKe4eeCdNHYRq7lSc",authDomain:"fate-compass-6afb9.firebaseapp.com",projectId:"fate-compass-6afb9",storageBucket:"fate-compass-6afb9.appspot.com",messagingSenderId:"37313764377",appId:"1:37313764377:web:285a6a927584aaec30de88"});const Qg=Fd(),Jg=Dg(),Xg=Od(Qg,"users");let Zg=[];const ey={body:document.querySelector("body"),signInForm:document.querySelector(".signin-form"),logInForm:document.querySelector(".login-form"),logOut:document.querySelector(".logout"),logOutBtn:document.querySelector(".logout-btn"),tarotRead:document.querySelector(".tarot-read"),matrixRead:document.querySelector(".matrix-read"),logIn:document.querySelector(".login"),signIn:document.querySelector(".signin"),haveAccount:document.querySelector(".have-account"),profileBtn:document.querySelector(".profile-btn"),backdrop:document.querySelector(".auth-backdrop"),closeBtn:document.querySelector('[data-close="1"]')},{body:ty,signInForm:ny,logInForm:iy,logOut:sy,logOutBtn:oy,tarotRead:ry,matrixRead:ay,logIn:hy,signIn:uy,haveAccount:cy,profileBtn:ly,backdrop:dy,closeBtn:fy}=ey;ny.addEventListener("submit",(e=>{e.preventDefault();const t=ny.email.value,n=ny.password.value;if(n!==uy.passwordMatch.value)return uy.reset();Ip(Jg,t,n).then((e=>{console.log(`Welcome to the gay club, ${e.user.email}`),Of(Xg,{email:t.toLowerCase(),password:n}).then((()=>{ny.reset()}))})).catch((e=>console.log(e.message)))})),iy.addEventListener("submit",(e=>{e.preventDefault();const t=iy.email.value,n=iy.password.value;Ep(Jg,t,n).then((e=>{console.log("Welcome back",e.user.email);Pf(mf(Xg,gf("email","==",e.user.email))).then((e=>{e.docs.forEach((e=>{Zg.push({...e.data()})}))})),Zg=[],iy.reset()})).catch((e=>{console.log(e.message)})),console.log("signed in")})),oy.addEventListener("click",(()=>{var e;(e=Jg,le(e).signOut()).then((()=>{console.log("signed out")})).catch((e=>{console.log(e.message)}))})),Sp(Jg,(e=>{const t=document.querySelector("[data-user]");if(null!==e)return t.textContent=`Welcome ${e.email}`,sy.classList.remove("hidden"),hy.classList.add("hidden"),uy.classList.add("hidden"),void cy.classList.add("hidden");t.textContent="",sy.classList.add("hidden"),hy.classList.remove("hidden"),cy.classList.remove("hidden")})),cy.addEventListener("click",(()=>{hy.classList.toggle("hidden"),uy.classList.toggle("hidden")})),ly.addEventListener("click",(()=>{ty.style.overflow="hidden",dy.classList.remove("hidden")})),fy.addEventListener("click",(()=>{ty.style.overflow="scroll",dy.classList.add("hidden")}));
//# sourceMappingURL=index.f476c70e.js.map
