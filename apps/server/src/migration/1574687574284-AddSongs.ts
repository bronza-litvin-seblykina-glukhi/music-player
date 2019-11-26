import {MigrationInterface, QueryRunner} from 'typeorm';

export class AddSongs1574687574284 implements MigrationInterface {
    tableName = 'songs';
    text1 = 'Fight, fight, fight Fighting the world every single day Fighting the world for the right to play Heavy metal in my brain I m fighting for metal  cause it s here to stay Fighting, fighting, fighting the world I ve been fighting the world Fighting, fighting, fighting the world I ve been fighting Fight for a living, fighting the world Fight for a living, fighting the world Fight for a living, fighting the world Fight Now people keep asking if we re gonna change';
    text2 = 'When you are old enough to read this words Their meaning will unfold These words are all that s left And though we ve never meet, my only son, I hope you know That I would have been there to watch you grow  But my call was heard and I did go Now your mission lies ahead of you As it did mine so long ago To help the helpless ones who all look up to you And to defend them to the end  Defender Ride like the wind Fight proud, my son You re the defender God has sent  Ride like the wind Fight proud, my son ';
    text3 = 'Hear the call of the wild in us all It waits for the night to fall I m getting hot, I m ready for the night No holdin  back, let s ball I m gonna give all you can take all night Leave you in the morning feeling right  I m an animal, there s an animal in me, woah We re gonna set it free I m an animal, there s an animal in me, woah We re gonna set it free  I ve been looking, you ve been watching from the side';
    text4 = 'Ridin  on to wheels Chainsuit on my heels Sittin  on leather Ridin  on steel Put my shades on Hair blows in the wind I give some square the finger Now he won t look again, no he won t PreChorus: Now, you were sittin  home And I got sent to Nam I went to the big house You just worked at job Chorus: Hear me calling Can t you hear my death tone';
    text5 = 'Black clouds on the horizon Great thunder and burning rain His chariot pounding I heard the heavens scream his name  I watched as he shouted To the giants who died that day He held up his hammer high And called to Odin for a sign  Thor the mighty, Thor the brave Crush the infidels in your way By your hammer let none be saved Live to die on that final day Gods, Monsters and men';
    text6 = 'Mama is having troubles, It always comes from me Your daddy said that drink is Is not yours for the free They tell you I m a loser  Cause I like see  em breed But truth is in the mirror Is one thing never seen I sing Yeah Long time ago You tried to tell me, son People tried to hold on I said no no, no no No, I don t mind them saying That you should be praying For me, fast taker Right here s where I m staying Life s a game I play';
    text7 = 'The north star always guides me When winter skies are gray And I wait for sun when all are one I shall not betray Calling at me I m waiting when all are led astray  Carry on my sons forever Carry on when I am gone Carry on for when the day is long Forever carry on For as long as we re together Then forever carry on  Darkness all around us We don t close our eyes No one s gonna ground us We were born to fly Comin  at us, no stopping Born to amplify  Carry on my sons forever';
    text8 = 'Passing through the storm- Led by Demons-walk between the World of men and gods- Cast no shadows-draw no light. I rape the priestess on pagans night.  I taste the serpents poison On the lips of the one I love. She brings this gift of witchcraft. I wear the cat-skin-gloves.  Apples of youth when I wrought Mischief, hung in a tree to rot ...  ******* This Lyrics is NOT for Commercial use ******* (1409618748924) ';
    text9 = 'Raise sails head for the open sea. with sails full of wind - our hearts overflow with belief. The guest for the grail to england we sail, with our steel. we bring what was lost. if lives are the cost, let it be. Strong she stands - reaching her hand. brave and grand. on english ground - we were born. proudly we return. - to english shore Hail, hail to the England Hail, hail, hail Hail, hail to the England';
    text10 = 'Here Our Soldiers Stand, From All Around The World Waiting In A Line, To Hear The Battle Cry All Are Gathered Here, Victory Is Near The Sound Will Fill The Hall, Bringing Power To Us All We Alone Are Fighting, For Metal That It s True We Own The Right, To Live The Fight, We re Here For All Of You Now Swear The Blood Upon Your Steel Will Never Dry Stand And Fight Together, Beneath The Metal Sky  Brothers Everywhere Raise Your Hands Into The Air We re Warriors Warriors Of The World Like Thunder From The Sky Sworn To Fight And Die We re Warriors Warriors Of The World  Many Stand Against Us But They Will Never Win We Said We Would Return And Here We Are Again To Bring Them All Destruction Suffering And Pain We Are The Hammer Of The Gods We Are Thunder, Wind And Rain There, They Wait In Fear With Swords In Feeble Hands With Dreams To Be A King, First, One Should Be A Man  I Call Them Out And Charge Them All With A Life That Is A Lie';


    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (1, 'Fighting The World', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/01.%20Fighting%20The%20World.mp3?generation=1574680231796761&alt=media', '${this.text1}', ${Date.now()}, true, 0, 1, null, 'Fighting The World')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (2, 'Defender', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/05.%20Defender.mp3?generation=1574680237123034&alt=media', '${this.text2}', ${Date.now()}, true, 0, 1, NULL, 'Fighting The World')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (3, 'Animals', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/02.%20Animals.mp3?generation=1574680233413720&alt=media', '${this.text3}', ${Date.now()}, true, 0, 1, NULL, 'Sign Of The Hammer')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (4, 'Death Tone', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/01.%20Death%20Tone.mp3?generation=1574680235768642&alt=media', '${this.text4}', ${Date.now()}, true, 0, 1, NULL, 'Battle Hymns')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (5, 'Thor [The Powerhead]', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/03.%20Thor%20%5BThe%20Powerhead%5D.mp3?generation=1574680233761794&alt=media', '${this.text5}', ${Date.now()}, true, 0, 1, NULL, 'Sign Of The Hammer')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (6, 'Fast Taker', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/03.%20Fast%20Taker.mp3?generation=1574680230859252&alt=media', '${this.text6}', ${Date.now()}, true, 0, 1, NULL, 'Battle Hymns')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (7, 'Carry On', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/03.%20Carry%20On.mp3?generation=1574680240112184&alt=media', '${this.text7}', ${Date.now()}, true, 0, 1, NULL, 'Fighting The World')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (8, 'Each Dawn I Die', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/02.%20Each%20Dawn%20I%20Die.mp3?generation=1574680232242331&alt=media', '${this.text8}', ${Date.now()}, true, 0, 1, null, 'Hail To England')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (9, 'Hail To England', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/04.%20Hail%20To%20England.mp3?generation=1574680234556914&alt=media', '${this.text9}', ${Date.now()}, true, 0, 1, null, 'Hail To England')`
        );

        await queryRunner.query(
          `INSERT INTO ${this.tableName} (id, title, genre, url, lyrics, uploaded, isNew, countOfListening, artistId, addedById, albumName) VALUES (10, 'Warriors Of The World United', 'Heavy Metal | Power Metal | Epic Heavy Metal | American Heavy Metal | Battle Metal | Viking Metal | Warrior Metal | Symphonic Heavy Metal | Classic Heavy Metal', 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/08.%20Warriors%20Of%20The%20World%20United.mp3?generation=1574680238134545&alt=media', '${this.text10}', ${Date.now()}, true, 0, 1, NULL, 'Warriors Of The World [Limited Edition. Super Audio CD]')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}