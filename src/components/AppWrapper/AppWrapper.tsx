import React from "react";
import './appwrapper.scss';
// import '../../style.css';

export interface AppWrapperI {
    topBar?: string | React.ReactNode;
    sideBar?: string | React.ReactNode;
    announcementBar?: string | React.ReactNode;
    content?: string | React.ReactNode;
    footer?: string | React.ReactNode;
}

export const AppWrapper = ({ topBar, sideBar, footer, announcementBar, content, ...props }: AppWrapperI) => {

    return (
        <main className='jiffyui-app_wrapper'>
            <div className="jiffyui-announcement_wrapper">
                {announcementBar}
            </div>
            <div className="jiffyui-sidebar__Wrapper">
                {sideBar}
            </div>
            <div className="jiffyui-main__content">
                <div className="jiffyui-topbar__wrapper">
                    {topBar}
                </div>
                <div className="jiffyui-content_wrapper">
                    {content}
                </div>
                <div className="jiffyui-footer__wrapper">
                    {footer}
                </div>
            </div>

        </main>
    )
};
export default AppWrapper;