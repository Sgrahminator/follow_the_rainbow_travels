import { useState } from 'react';
import PropTypes from 'prop-types';

const SafetyTips = ({ onTipSubmit }) => {
    const [tip, setTip] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (tip.length < 10) {
            setError('Safety Tip is too short, a minimum of 10 characters is required.');
            return;
        } else if (tip.length > 1000) {
            setError('Safety Tip is too long, a maximum of 1000 characters is required.');
            return;
        }

        try {
            await onTipSubmit(tip);
            setTip('');
            setError('');
        } catch (e) {
            setError(e.message);
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
                    rows="4"
                ></textarea>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                    <div>
                        <button type="submit">Submit Tip</button>
                    </div>
            </form>
        </div>
    );
};

SafetyTips.propTypes = {
    onTipSubmit: PropTypes.func.isRequired
};

export default SafetyTips;
