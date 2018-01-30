import React from 'react';
import { Parallax, Background } from 'react-parallax';

class ProfileHeader extends React.Component {
    render() {
        return (
            <div className="ProfileBody">
                {/*<img src="../banner.jpg" width="100%" alt=""/>*/}
                <Parallax
                    bgImage={require('./res/banner.jpg')}
                    bgImageAlt="banner"
                    strength={400}
                >
                    <div style={{ height: '500px', width: '100%' }} />
                </Parallax>
            </div>
        );
    }
}

export default ProfileHeader;