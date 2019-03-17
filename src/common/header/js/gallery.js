import React, { Component } from 'react';
import '../css/gallery.scss'

function Gallery() {
    return (
        <div className={'gallery'}>
            <div className={'gallery-row'}>
                <div className={'gallery-pic'}>
                    <img  src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                </div>
                <div className={'gallery-pic'}>
                    <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                </div>
                <div className={'gallery-pic'}>
                    <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                </div>
            </div>

            <div className={'gallery-row'}>
                <div className={'gallery-pic'}>
                    <img  src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                </div>
                <div className={'gallery-pic'}>
                    <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                </div>
                <div className={'gallery-pic'}>
                    <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;