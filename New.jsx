import React, { useEffect, useState } from "react";

const color = "#5B00B5";

const r = parseInt(color.slice(1, 3), 16);
const g = parseInt(color.slice(3, 5), 16);
const b = parseInt(color.slice(5, 7), 16);

const rgbPercentage = {
    r: ((r / 255) * 100).toFixed(2),
    g: ((g / 255) * 100).toFixed(2),
    b: ((b / 255) * 100).toFixed(2),
};

function New() {
    // const [scrollPercentage, setScrollPercentage] = useState(0);

    

    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(100);
    const percentage = total > 0 ? ((score / total) * 100).toFixed(1) : 0;
    return (
        <>
            {/* Scroll Progress Bar */}
            <div style={{ padding: "20px" }}>
                <h2>Percentage Calculator</h2>
                <label>Score: </label>
                <input
                    type="number"
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                />
                <br /><br />
                <label>Total Possible: </label>
                <input
                    type="number"
                    value={total}
                    onChange={(e) => setTotal(Number(e.target.value))}
                />
                <h3>Result: {percentage}%</h3>
            </div>

            {/* Color Information */}
            <div style={{ padding: "40px" }}>
                <h2>Original Strong Violet</h2>

                <div
                    style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: color,
                    }}
                />

                <p>Red: {rgbPercentage.r}%</p>
                <p>Green: {rgbPercentage.g}%</p>
                <p>Blue: {rgbPercentage.b}%</p>

                {/* Scroll Content */}
                <h1>Scroll Down</h1>

                <p style={{ height: "2000px" }}>
                    Scroll to see the percentage progress.
                </p>
            </div>
        </>
    );
}

export default New;





