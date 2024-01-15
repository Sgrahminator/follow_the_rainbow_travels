import { useState } from 'react';
import PropTypes from 'prop-types';

const SafetyTips = ({ onTipSubmit }) => {
    const [tip, setTip] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (tip) {
            await onTipSubmit(tip);
            setTip('');
        }
    };

    return (
        <div className="safety-tips">
            <h2>Share Your Safety Tips</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={tip}
                    onChange={(e) => setTip(e.target.value)}
                    placeholder="Enter your safety tip here..."
                    required
                    minLength="10"
                    maxLength="1000"
                    rows="4"
                ></textarea>
                <button type="submit">Submit Tip</button>
            </form>
        </div>
    );
};

SafetyTips.propTypes = {
    onTipSubmit: PropTypes.func.isRequired
};

export default SafetyTips;