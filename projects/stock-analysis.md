<h1 class="text-4xl font-bold mb-8">Stock Analysis System</h1>
<div class="project-container">
    <div class="role-tech-container">
        <div class="role-container">
            <span class="role-label">My Role:</span>
            <span class="role-text">Python Developer, AI/ML, Web Developer</span>
        </div>
        <div class="role-container">
            <span class="role-label">Date:</span>
            <span class="role-text">03/2025 - Ongoing</span>
        </div>
        <div class="tech-container">
            <span class="tech-label">Technologies:</span>
            <div class="tech-list">
                <span class="tech-badge">Python</span>
                <span class="tech-badge">yfinance</span>
                <span class="tech-badge">Pandas</span>
                <span class="tech-badge">NumPy</span>
                <span class="tech-badge">Scikit-learn</span>
                <span class="tech-badge">SQLite</span>
                <span class="tech-badge">TA-Lib</span>
                <span class="tech-badge">UI Framework (Streamlit, Flask/React)</span>
            </div>
        </div>
    </div>
    <p class="project-description">
        This project aims to develop a comprehensive stock analysis system, initially focusing on single-stock technical analysis (Phase 1).  The system is designed to provide insights into stock trends, generate trading signals, assess risk, and ultimately aid in identifying profitable trading opportunities.  The project encompasses data acquisition, processing, technical indicator calculation, AI-powered prediction, and a user interface for visualization and interaction. The long-term vision includes incorporating "Big Player" (BP) activity analysis, market maker (MM) strategies, and portfolio optimization.
    </p>
    <h2 class="section-heading">Key Contributions & Impact (Phase 1 Focus)</h2>
    <ul>
        <li>
            <strong>Data Acquisition and Management:</strong>
            Implemented a robust data pipeline to retrieve historical stock data (OHLCV) from Yahoo Finance using the `yfinance` library.  Established a SQLite database for efficient storage and retrieval of stock data.
        </li>
        <li>
            <strong>Technical Indicator Calculation:</strong>
            Developed functions to calculate a range of essential technical indicators, including:
            <ul>
                <li>Simple Moving Average (SMA)</li>
                <li>Exponential Moving Average (EMA)</li>
                <li>Moving Average Convergence Divergence (MACD)</li>
                <li>Relative Strength Index (RSI)</li>
                <li>Volume-related metrics</li>
            </ul>
        </li>
        <li>
            <strong>Trend Determination and Signal Generation:</strong>
            Implemented rule-based logic to determine the current market trend (uptrend, downtrend, sideways) and generate corresponding buy/sell/hold signals based on the calculated technical indicators.  This included defining specific thresholds and conditions for signal generation (e.g., SMA crossovers, RSI levels).
        </li>
        <li>
            <strong>AI-Powered Prediction:</strong>
            Developed and trained an AI model (using Scikit-learn/TensorFlow/PyTorch) to predict future price movements and enhance trading signals. The AI model outputs:
            <ul>
                <li>Predicted Percentage Change (for 1D, 3D, 5D, 2W, 1M, 3M horizons)</li>
                <li>Trend Classification (uptrend, downtrend, sideways)</li>
                <li>AI-driven Trade Signals (Buy/Sell/Hold)</li>
                <li>AI Signal Confidence</li>
                <li>Trend Strength Score (AI)</li>
            </ul>
        </li>
        <li>
            <strong>Risk Metric Calculation:</strong>
            Implemented functions to calculate key risk metrics, including:
            <ul>
                <li>Historical Volatility</li>
                <li>Maximum Drawdown</li>
                <li>Beta</li>
            </ul>
        </li>
        <li>
            <strong>Back-end Development:</strong>
            Built a modular back-end system to handle data processing, indicator calculations, AI model predictions, and risk assessment. The back-end provides structured data outputs for use by the UI and other planned modules.
        </li>
        <li>
            <strong>UI Development (Preliminary):</strong>
            Created a basic user interface (using [Your Chosen UI Framework]) to:
            <ul>
                <li>Input stock ticker symbols and date ranges.</li>
                <li>Display historical price charts and calculated indicators.</li>
                <li>Visualize trend analysis and trading signals.</li>
                <li>Present risk metrics.</li>
                <li>(Planned) Display a ranked list of stocks based on analysis.</li>
            </ul>
        </li>
    </ul>
    <h2 class="section-heading">Challenges & Solutions</h2>
    <ul>
        <li>
            <div class="challenge-solution">
                <strong>Choosing the Right AI Model and Features:</strong> Selecting the most appropriate AI model architecture and feature set for predicting stock prices required extensive experimentation.
                <span class="solution">
      <strong>Solution:</strong> Experimented with various machine learning models (e.g., linear regression, support vector machines, recurrent neural networks) and feature combinations (technical indicators, lagged price data, volume).  Employed techniques like cross-validation and hyperparameter tuning to optimize model performance.
    </span>
            </div>
        </li>
        <li>
            <div class="challenge-solution">
                <strong>UI Framework Selection and Integration:</strong> Choosing a suitable UI framework that could handle interactive charts, data tables, and real-time updates.
                <span class="solution">
                <strong>Solution:</strong> Evaluated several UI frameworks (e.g., Streamlit, Flask/React, Dash) and selected [Your Chosen Framework] based on its ease of use, flexibility, and ability to integrate with the Python back-end. Developed a modular UI architecture to facilitate future expansion and feature additions.
            </span>
            </div>
        </li>
    </ul>
    <h2 class="section-heading">Lessons Learned</h2>
    <ul>
        <li>
            <strong>Complexity of Financial Modeling:</strong> Gained a deeper appreciation for the complexities of financial modeling and the challenges of predicting stock prices with high accuracy.
        </li>
        <li>
            <strong>Value of Combining Approaches:</strong> Learned the benefits of combining traditional technical analysis techniques with AI-powered prediction for a more comprehensive and robust analysis.
        </li>
        <li>
            <strong>Project Scope Management:</strong>  Recognized the importance of carefully defining project scope and prioritizing features, particularly for a large and ambitious project.
        </li>
    </ul>
</div>