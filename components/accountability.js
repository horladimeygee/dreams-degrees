import BButton from "./BButton"



export default function AccountabilityProgam(){

    return(
        <div >
            <article >
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Find an Accountability Buddy in Technology</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Would you love to achieve your tech career goals with an accountability partner/ group in 2022? Our accountability partner program aims to match interested community members with ambitious, intentional and like-minded individual(s) in technology that would help you stay committed to your goals for the new year. With your accountability partner, you get to have a mutual agreement to coach each other; providing feedback on a regular basis. During this daily or weekly feedback sessions, you get to share your wins, talk about your current challenges and so much more. We are hoping you get to connect and build solid relationships along the way. Click on the button below to join other members of the community as they choose to stay committed to achieving their 2022 goals.</p>
                <BButton backgroundColor="#D68676" color="white" padding="15px 61px" margin="32px 0">
                    <span>Join our waitlist</span>
                </BButton>
            </article>
        </div>
    )

}