import React from "react";
import Id from "@/styles/id.module.css";
import Image from "next/image";

const BlogDetails = () => {
  return (
    <div>
      <section className={Id.content_section}>
        <div className={Id.content_wrapper}>
          <div className={Id.image_box}>
            <Image src="/assets/BlogPage/066.jpg" width={500} height={500} alt="Illustration" />
          </div>
          <div className={Id.text_box}>
            <p>
              Why I say old chap that is, spiffing jolly good a load of old tosh
              spend a penny tosser arse over tit, excuse my French owt to do
              with me up the kyver matie boy at public school. Cuppa argy-bargy
              young delinquent spend a penny James Bond skive off lurgy, tosser
              fanny around dropped a clanger quaint I, up the duff a bum bag
              Eaton what a load of rubbish. Matie boy pardon me blow off easy
              peasy blatant arse over tit super he legged it cup of tea what a
              plonker, chimney pot mush bugger on your bike mate so I said
              bamboozled Oxford are you taking the piss. Gormless he legged it I
              say porkies such a fibber blatant give us a bell blow off spend a
              penny tomfoolery knees up, no biggie grub cheeky bugger up the
              kyver knackered at public school owt to do with me lost the plot
              spiffing bog.
            </p>
            <p>
              Cras mush pardon you knees up he lost his bottle it’s all gone to
              pot faff about porkies arse, barney argy-bargy cracking goal loo
              cheers spend a penny bugger all mate in my flat, hunky-dory well
              get stuffed mate David morish bender lavatory. What a load of
              rubbish car boot bite your arm off blatant pardon you, old tosser
              get stuffed mate tomfoolery mush, codswallop cup of tea I don’t
              want no agro. Off his nut show off show off pick your nose and
              blow.!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
