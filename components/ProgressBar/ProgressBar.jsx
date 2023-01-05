import React from 'react'
import ProgressBar from 'react-customizable-progressbar'

const ProgressBarComp = ({ progress }) => (
    <div className="item">
        <ProgressBar
            radius={80}
            progress={progress}
            strokeWidth={28}
            strokeColor="#DC2626"
            strokeLinecap="butt"
            trackStrokeWidth={15}
            trackStrokeLinecap="butt"
            cut={120}
            rotate={-210}
        >
            <div className="indicator">
                <div>{progress}%</div>
            </div>
        </ProgressBar>
    </div>
)

export default ProgressBarComp