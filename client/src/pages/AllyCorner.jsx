import AllyPosts from '../components/AllyPosts'; 
import AllyQnA from '../components/AllyQnA'; 

const AllyCorner = () => {
    return (
        <div className="ally-corner">
            <h1>Welcome Allies!</h1>

            <section className="ally-posts-section">
                <h2>Positive Posts</h2>
                <AllyPosts />
            </section>

            <section className="ally-qna-section">
                <h2>Questions & Answers</h2>
                <AllyQnA />
            </section>

            <section className="thank-you-section">
                <h3>Dear Allies,</h3>
                <p>
                In a world that is still learning to embrace diversity, your support is not just welcome;
                it is essential. You stand beside us, in front of us, and behind us, forming a protective 
                circle of love, acceptance, and unity. For that, from the deepest corners of our hearts, 
                we thank you.
                <br></br>
                <br></br>
                Thank you for being more than just passive observers. Thank you for educating yourselves, 
                for asking the questions that need to be asked, and for opening dialogues that may be 
                difficult but are essential for progress. You have chosen to be part of a battle that is not 
                necessarily your own, but you fight it with the same vigor and passion as if it were.
                <br></br>
                <br></br>
                Your love does not merely echo within the LGBTQIA+ community; it reverberates through 
                society, tearing down walls of prejudice and discrimination. When you share our stories, 
                display your allyship openly, or even when you offer a supportive smile, you help create a 
                world where acceptance is the norm, not the exception.
                <br></br>
                <br></br>
                We also acknowledge the courage it takes to stand up for what is right, especially when 
                it is unpopular. When you confront bigotry, you do not just confront a single voice; you 
                challenge an entire narrative that has been woven into the fabric of certain societal 
                norms. And that is nothing short of brave.
                <br></br>
                <br></br>
                Your allyship is not just a label; it is a promise. A promise to stand for equality even 
                when the room is filled with opposition. A promise to love unconditionally. A promise to 
                continually educate yourself and others. And most importantly, a promise to be there—in 
                solidarity, in love, and in spirit.
                <br></br>
                <br></br>
                So, thank you for being an ally. Thank you for being you. Together, we are not just 
                altering dialogues or changing minds; we are transforming the world.
                <br></br>
                <br></br>
                With heartfelt gratitude and love,
                <br></br>
                <br></br>
                Queer Quests Hub and the LGBTQIA+ Community
                </p>
            </section>
        </div>
    );
};

export default AllyCorner;
