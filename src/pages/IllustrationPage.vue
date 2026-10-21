<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { image, siteRoot } from '../site'
import { useStars } from '../stars'

// The page opens on a starfield, which fades back to white over RAMP px as
// "Different styles of illustrations" reaches the middle of the screen.
// Artwork that sits on the sky uses -cutout.webp copies with the white made
// transparent; line drawings (.line-art) turn into white lines (see style.css).
const canvas = ref(null)
const styles = ref(null)
const { setLevel } = useStars(canvas)
const RAMP = 500
const topOf = (el) => Math.min(...[...el.children].map((c) => c.getBoundingClientRect().top)) + window.scrollY
let frame = 0
const onScroll = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    const line = window.scrollY + window.innerHeight / 2
    setLevel(Math.max(0, Math.min(1, (topOf(styles.value) - line) / RAMP)))
  })
}
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll); onScroll() })
onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(frame) })
</script>

<template>
  <div class="page wix-illustration">
    <canvas ref="canvas" class="sky" aria-hidden="true"></canvas>
    <section class="blk">
      <h1 class="a ti" style="left: 64px; top: 670px">Orchid of Dream</h1>
      <p class="a tx" style="left: 64px; top: 716px; width: 396px">Through delicate line drawing and multi-colour
        fusion. Depicting the flower in full bloom beyond its original frame.</p>
      <img class="a" :src="`${siteRoot}images/illustration/illustration-1-cutout.webp`"
        alt="Orchid of Dream, colour illustration"
        style="left: 14px; top: 241px; width: 420px; height: 429px; object-fit: cover">
      <img class="a line-art" :src="`${siteRoot}images/illustration/illustration-2-cutout.webp`"
        alt="Orchid of Dream, line drawing"
        style="left: 528px; top: 423px; width: 445px; height: 445px; object-fit: cover">
    </section>

    <section class="blk">
      <h2 class="a ti c" style="left: 260px; top: 999px; width: 445px">The Echo of Lodestar: Desire</h2>
      <div class="a c" style="left: 122px; top: 1094px; width: 722px; font-size: 16px; line-height: 22.4px">
        <p style="margin: 0">"The Echo of Lodestar" is an exhibition that focuses on visual art with augmented reality
          (AR)<br>&nbsp;<br>interaction. The concept is inspired by the Latin motto "Per aspera ad astra" and the
          book"Demian: The Story of Emil Sinclair's Youth", from which five planet themes are derived: Born,Desire,
          Sink, Lonesome, and Reflection. Each theme represents a certain emotion or life stage.<br>&nbsp;<br>Aiming to
          explore the consciousness, mentality, and struggle of self-discovery in different phases of life. The
          exhibition features delicate illustrations and AR interaction with animations. By scanning the planet
          paintings on the banner, visitors can interact with the paintings to understand the meanings of each theme and
          resonate with their own life experiences.<br>&nbsp;<br>All visual art and stylistic conceptual direction of
          the paintings in the exhibition by WeiChu Su.<br>The project was awarded the 2023 ISARCH Digital Award Winner.
        </p>
      </div>
      <img class="a" :src="image('illustration', 3)" alt="Lonesome planet painting"
        style="left: -7px; top: 1485px; width: 279px; height: 281px; object-fit: cover">
      <h3 class="a pl" style="left: -6px; top: 1794px">Lonesome</h3>
      <p class="a sm" style="left: -6px; top: 1838px; width: 279px">God makes people lonely through various ways, so
        that we can walk towards ourselves.<br><br>Living is a process of feeling loneliness.<br>Only after feeling
        loneliness can we return to ourselves.</p>
      <img class="a" :src="image('illustration', 4)" alt="Desire planet painting"
        style="left: 343px; top: 1485px; width: 279px; height: 281px; object-fit: cover">
      <h3 class="a pl" style="left: 344px; top: 1794px">Desire</h3>
      <p class="a sm" style="left: 344px; top: 1838px; width: 279px">What I am longing for is nothing more than putting
        life in the heart to stand out.<br><br>One must face one's inner desires and so-called temptations with respect
        and learn to accept oneself as one's complete self.</p>
      <img class="a" :src="image('illustration', 5)" alt="Reflection planet painting"
        style="left: 693px; top: 1485px; width: 279px; height: 281px; object-fit: cover">
      <h3 class="a pl" style="left: 694px; top: 1794px">Reflection</h3>
      <p class="a sm" style="left: 694px; top: 1838px; width: 279px">This is me, born in a neat, glorious, soft garden,
        who loved Baja with a passion, and this is me, an arrogant, repulsive, milquetoast waste of time, a villain, a
        drunk.<br><br>Human beings are themselves in two worlds; they are a combination of good and evil.</p>
      <img class="a" :src="image('illustration', 6)" alt="Reflection planet painting, second view"
        style="left: -7px; top: 2007px; width: 279px; height: 281px; object-fit: cover">
      <h3 class="a pl" style="left: -6px; top: 2322px">Reflection</h3>
      <p class="a sm" style="left: -6px; top: 2377px; width: 284px">This is me, born in a neat, glorious, soft garden,
        who loved Baja with a passion, and this is me, an arrogant, repulsive, milquetoast waste of time, a villain, a
        drunk.<br><br>Human beings are themselves in two worlds; they are a combination of good and evil.</p>
      <img class="a" :src="image('illustration', 7)" alt="Born planet painting"
        style="left: 343px; top: 2007px; width: 279px; height: 281px; object-fit: cover">
      <h3 class="a pl" style="left: 344px; top: 2322px">Born</h3>
      <p class="a sm" style="left: 344px; top: 2377px; width: 279px">The bird must get rid of its shell. Eggs are the
        world. If you want to be born in the world, you have to destroy the world.<br><br>One must abandon the old
        comfortable past and shake the old foundation before one can truly create one's own values.</p>
      <img class="a" :src="image('illustration', 8)" alt="Sink planet painting"
        style="left: 693px; top: 2007px; width: 279px; height: 281px; object-fit: cover">
      <h3 class="a pl" style="left: 694px; top: 2322px">Sink</h3>
      <p class="a sm" style="left: 694px; top: 2377px; width: 279px">The awakened man has only one duty to find himself
        and stick to himself. Go along your own path, no matter where it leads.<br><br>Before one can find one's way,
        one must first face the inner chaos and uncertainty.</p>
    </section>

    <section class="blk">
      <h2 class="a ti c" style="left: 253px; top: 2665px; width: 459px; line-height: 32.5px">Customized Planet
        picture<br>Visual Design and Illustration</h2>
      <p class="a tx c" style="left: 104px; top: 2771px; width: 759px">At the end of the exhibition,<br>visitors take a
        quiz and are given their own personalised picture of the planet.<br>During the quiz,five graphic elements and a
        motto are generated to form a complete picture of the planet.</p>
      <div class="a fig" style="left: -7px; top: 2891px; width: 894px; height: 642px">
        <div style="position: absolute; left: 7px; top: -2891px; width: 1100px">
          <img class="a line-art" :src="image('illustration', 14)" alt="Customized planet element"
            style="left: -7px; top: 2891px; width: 261px; height: 257px; object-fit: cover">
          <img class="a line-art" :src="image('illustration', 9)" alt="Customized planet element"
            style="left: 238px; top: 2891px; width: 214px; height: 214px; object-fit: cover">
          <img class="a" :src="image('illustration', 15)" alt="Personalised planet picture on a phone"
            style="left: 550px; top: 2919px; width: 337px; height: 596px; object-fit: cover">
          <img class="a line-art" :src="image('illustration', 10)" alt="Customized planet element"
            style="left: 12px; top: 3069px; width: 250px; height: 250px; object-fit: cover">
          <img class="a line-art" :src="`${siteRoot}images/illustration/illustration-12-cutout.webp`"
            alt="Customized planet element"
            style="left: 226px; top: 3070px; width: 255px; height: 254px; object-fit: cover">
          <img class="a line-art" :src="image('illustration', 11)" alt="Customized planet element"
            style="left: 28px; top: 3287px; width: 246px; height: 246px; object-fit: cover">
          <img class="a line-art" :src="`${siteRoot}images/illustration/illustration-13-cutout.webp`"
            alt="Customized planet element"
            style="left: 287px; top: 3293px; width: 175px; height: 210px; object-fit: contain">
        </div>
      </div>
    </section>

    <section class="blk">
      <h2 class="a ti c" style="left: 357px; top: 3726px; width: 252px">Movie posters</h2>
      <p class="a" style="left: 219px; top: 3790px; width: 528px; font-size: 16px; line-height: 16px">Movie Posters for
        National Taiwan University of Arts film production " Pink Me"</p>
      <img class="a" :src="image('illustration', 16)" alt="Pink Me movie poster, night version"
        style="left: 142px; top: 3915px; width: 301px; height: 376px; object-fit: cover">
      <p class="a cap" style="left: 239px; top: 4316px; width: 107px">Night version</p>
      <img class="a" :src="image('illustration', 17)" alt="Pink Me movie poster, day version"
        style="left: 523px; top: 3915px; width: 301px; height: 376px; object-fit: cover">
      <p class="a cap" style="left: 628px; top: 4316px; width: 91px">Day version</p>
    </section>

    <section ref="styles" class="blk">
      <h2 class="a ti" style="left: 42px; top: 4551px; width: 491px">Different styles of illustrations</h2>
      <p class="a tx" style="left: 42px; top: 4613px; width: 593px">Different styles of illustrations are displayed,
        from delicate lines of architectural<br>sketches to healing and cute illustrations.</p>
      <img class="a framed" :src="image('illustration', 18)" alt="June postcard"
        style="left: -7px; top: 4736px; width: 242px; height: 239px; object-fit: cover; background: #000000">
      <p class="a cap" style="left: 50px; top: 4997px; width: 127px">June postcard</p>
      <img class="a framed" :src="image('illustration', 19)" alt="Christmas card design"
        style="left: 291px; top: 4812px; width: 242px; height: 239px; object-fit: cover; background: #000000">
      <p class="a cap" style="left: 324px; top: 5075px; width: 174px">Christmas card design</p>
      <img class="a" :src="image('illustration', 21)" alt="Howl's Moving Castle sketch for postcard"
        style="left: 549px; top: 4819px; width: 424px; height: 600px; object-fit: cover">
      <p class="a cap" style="left: 607px; top: 5404px; width: 307px">Howl's Moving Castle Sketch for postcard</p>
      <img class="a framed" :src="image('illustration', 20)" alt="Stickers design"
        style="left: 91px; top: 5127px; width: 256px; height: 261px; object-fit: cover; background: #000000">
      <p class="a cap" style="left: 131px; top: 5413px; width: 174px">Stickers design</p>
      <img class="a framed" :src="image('illustration', 22)" alt="2023 graduation postcard for Yuan Ze University"
        style="left: 75px; top: 5578px; width: 359px; height: 449px; object-fit: cover; background: #000000">
      <p class="a tx c" style="left: 128px; top: 6055px; width: 253px">2023 Graduating for<br>Yuan Ze University
        postcard</p>
      <img class="a framed" :src="image('illustration', 23)" alt="The Garden of Dreams card"
        style="left: 537px; top: 5620px; width: 343px; height: 343px; object-fit: cover; background: #000000">
      <p class="a cap" style="left: 582px; top: 5998px; width: 253px">The Garden of Dreams card</p>
    </section>

    <section class="blk">
      <h2 class="a ti" style="left: 39px; top: 6334px; width: 543px">illustrations of the book 'Lu Ming"</h2>
      <p class="a tx" style="left: 39px; top: 6408px; width: 690px">We have produced the book "Lu Ming", hoping to
        introduce the tea culture of Lugu Township through this book. In order to fit in with the tone of the book, I
        tried many different brushstrokes to depict the illustrations in the book, and finally used airy brushstrokes
        and ink strokes to create a warm style that is both Japanese and Chinese at the same time.<br><br>The project
        won the London International Creative Competition 2022 Finalists in Illustrate (graphic) and International
        Design Awards 2022 Graphic Design Honorable Mention.</p>
      <img class="a" :src="image('illustration', 24)" alt="Lu Ming tea brewing illustration, step 1"
        style="left: -54px; top: 6624px; width: 395px; height: 558px; object-fit: cover">
      <img class="a" :src="image('illustration', 25)" alt="Lu Ming tea brewing illustration, step 2"
        style="left: 293px; top: 6624px; width: 395px; height: 558px; object-fit: cover">
      <img class="a" :src="image('illustration', 26)" alt="Lu Ming tea brewing illustration, step 3"
        style="left: 625px; top: 6624px; width: 395px; height: 558px; object-fit: cover">
      <p class="a tx c on-art" style="left: 619px; top: 7078px; width: 354px">How to brew tea the right way step1-3
        illustrations</p>
      <img class="a" :src="image('illustration', 27)" alt="Lu Ming tea brewing illustration, step 4"
        style="left: 231px; top: 7194px; width: 349px; height: 494px; object-fit: cover">
      <img class="a" :src="image('illustration', 28)" alt="Lu Ming tea brewing illustration, step 5"
        style="left: 595px; top: 7194px; width: 349px; height: 494px; object-fit: cover">
      <p class="a tx c on-art" style="left: 23px; top: 7633px; width: 414px">How to brew tea the right way step4-5
        illustrations</p>
      <img class="a" :src="image('illustration', 29)" alt="Tea service illustration"
        style="left: -39px; top: 7817px; width: 283px; height: 400px; object-fit: cover">
      <img class="a" :src="image('illustration', 30)" alt="Tea service illustration"
        style="left: 237px; top: 7817px; width: 283px; height: 400px; object-fit: cover">
      <img class="a" :src="image('illustration', 31)" alt="Tea service illustration"
        style="left: 477px; top: 7817px; width: 283px; height: 400px; object-fit: cover">
      <img class="a" :src="image('illustration', 32)" alt="Tea service illustration"
        style="left: 696px; top: 7817px; width: 283px; height: 400px; object-fit: cover">
      <p class="a tx" style="left: 538px; top: 8246px; width: 435px">Illustrations for different kinds of Tea Service in
        the book Lu Ming</p>
    </section>

    <section class="blk">
      <h2 class="a ti c" style="left: 175px; top: 8506px; width: 616px">Fine arts background illustration</h2>
      <img class="a" :src="image('illustration', 33)" alt="Accompany background illustration, wide"
        style="left: 80px; top: 8647px; width: 783px; height: 295px; object-fit: cover">
      <img class="a" :src="image('illustration', 34)" alt="Accompany background illustration"
        style="left: 336px; top: 9028px; width: 600px; height: 445px; object-fit: cover">
      <p class="a tx" style="left: 51px; top: 9544px; width: 633px">Fine arts background illustration for Animation film
        Accompany.<br>The story is set in a 2D animated setting depicting a crumbling post-apocalyptic world.</p>
    </section>
  </div>
</template>
