import React from 'react';
import {FooterContainer, FooterWrap, SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink} from './FooterElements';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Books</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='noopener noreferer'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferer'>
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>


            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
