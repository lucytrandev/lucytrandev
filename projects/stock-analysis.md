<h1 class="text-4xl font-bold mb-8">Advanced Stock Analysis & AI-Powered Trading System</h1>
<div class="project-container">
    <div class="role-tech-container">
        <div class="role-container">
            <span class="role-label">My Role:</span>
            <span class="role-text">AI/ML Researcher, Python Developer, Algorithmic Trading Developer</span>
        </div>
        <div class="role-container">
            <span class="role-label">Date:</span>
            <span class="role-text">03/2025 - Ongoing</span>
        </div>
        <div class="tech-container">
            <span class="tech-label">Technologies:</span>
            <div class="tech-list">
                <span class="tech-badge">Python</span>
                <span class="tech-badge">Pandas</span>
                <span class="tech-badge">NumPy</span>
                <span class="tech-badge">Scikit-learn</span>
                <span class="tech-badge">TensorFlow/Keras/Torch</span>
                <span class="tech-badge">Transformers</span>
                <span class="tech-badge">TA-Lib</span>
                <span class="tech-badge">NLTK/spaCy/News Sentiment</span>
                <span class="tech-badge">yfinance</span>
                <span class="tech-badge">Matplotlib</span>
                <span class="tech-badge">Seaborn</span>
                <span class="tech-badge">Streamlit</span>
                <span class="tech-badge">SQLite</span>
            </div>
        </div>
    </div>
    <p class="project-description">
        This project focuses on developing a sophisticated stock analysis system that integrates AI for multi-day price forecasting, advanced Big Player (BP) activity detection including news sentiment analysis, and algorithmic strategies for generating actionable day trading signals. The system is designed to be versatile, applying its methodologies across numerous stocks and various trading intervals.
    </p>
    <h2 class="section-heading">Key Contributions & Impact</h2>
    <ul>
        <li>
            <strong>AI-Powered Multi-Day Price Prediction:</strong>
            Researched and implemented a Transformer-based multi-task learning framework (inspired by Multi-iTR concepts) for 10-day stock closing price forecasting. This involved designing models to process diverse stock features and capture both shared market dynamics and stock-specific patterns.
        </li>
        <li>
            <strong>Big Player (BP) Activity & News Sentiment Analysis:</strong>
            Developed modules to identify potential "Big Player" footprints by analyzing unusual trading volumes, order flow patterns (e.g., iceberg order detection), price action anomalies, and integrating news sentiment analysis to gauge market mood related to specific stocks.
        </li>
        <li>
            <strong>Algorithmic Day Trading Signal Generation:</strong>
            Researched and developed adaptable algorithmic trading methodologies that synthesize technical analysis, BP & news sentiment insights, and AI price predictions to generate buy/sell/hold signals suitable for day trading across various time intervals.
        </li>
        <li>
            <strong>Research & Methodology Implementation:</strong>
            Translated findings from academic papers (e.g., on Transformer architectures for time series, multi-task learning, iceberg order characteristics) and market analysis techniques (e.g., volume profiling, sentiment scoring) into functional components of the trading system.
        </li>
        <li>
            <strong>System Versatility & Scalability:</strong> Engineered the predictive models and trading algorithms to be broadly applicable to a wide range of stocks, not confined to specific tickers, ensuring scalability of the analysis.
        </li>
        <li>
            <strong>Data Pipeline & Visualization:</strong>
            Managed data acquisition (historical prices, news feeds) and storage (SQLite). Developed UI elements (e.g., with Streamlit) for visualizing market data, technical indicators, AI forecast outputs, BP activity indicators, and trading signals.
        </li>
    </ul>
    <h2 class="section-heading">Research & Methodology</h2>
    <div class="methodology-section mb-6">
        <h3 class="text-xl font-semibold mb-2">AI Price Prediction (10-Day Trading Horizon)</h3>
        <p>The price prediction module is inspired by research on Transformer-based architectures for multivariate time series forecasting, such as the Multi-iTR framework.</p>
        <p class="mt-3"><em>Visualizing Prediction Performance:</em></p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div>
                <p class="text-center font-medium text-sm">AAPL - Actual vs. Predicted (Test Set)</p>
                <img src="/images/AAPL_data_prediction_vs_actual_returns_based.png" alt="AAPL Actual vs Predicted Prices" class="w-full h-auto rounded-md shadow-md">
            </div>
            <div>
                <p class="text-center font-medium text-sm">NVDA - 10-Day Forecast Example</p>
                <img src="/images/test_plot_forecast_sl36_pl10.png" alt="NVDA 10-Day Forecast" class="w-full h-auto rounded-md shadow-md">
            </div>
        </div>
        <div class="my-3">
            <p class="text-center font-medium text-sm">Example: AI 10-Day Forecast Insights (NVDA)</p>
            <img src="/images/10_day_forcast.png" alt="AI 10-Day Price Forecast Example" class="w-full h-auto rounded-md shadow-md my-2">
        </div>
    </div>
    <div class="methodology-section mb-6">
        <h3 class="text-xl font-semibold mb-2">Algorithmic Trading Signal Generation (Day Trading)</h3>
        <p>Trading signals are generated by a main model that synthesizes information from multiple analytical modules. The methodology is designed for adaptability across different stocks and trading intervals (e.g., 5-min, 15-min, 1-hour):</p>
        <img src="/images/day_trade_signals.png">
    </div>
    <h2 class="section-heading">Challenges & Solutions</h2>
    <ul>
        <li>
            <div class="challenge-solution">
                <strong>Generalizable AI Models & Algorithms:</strong> Ensuring prediction models and trading strategies perform reliably across diverse stocks and evolving market dynamics, rather than being overfit to historical data of a few.
                <span class="solution">
                    <strong>Solution:</strong> Utilized multi-task learning for AI models to learn shared patterns. Employed robust feature engineering, diverse datasets for training, and rigorous backtesting across various market conditions and stock types. Trading algorithm parameters are designed to be adaptable or self-tuning where possible.
                </span>
            </div>
        </li>
        <li>
            <div class="challenge-solution">
                <strong>Integrating News Sentiment Effectively:</strong> Quantifying subjective news data and integrating it meaningfully with quantitative trading signals without introducing excessive noise.
                <span class="solution">
                    <strong>Solution:</strong>Implemented a weighting or confirmation mechanism where sentiment acts as a filter or a confluence factor alongside TA and BP signals, rather than a primary trigger.
                </span>
            </div>
        </li>
        <li>
            <div class="challenge-solution">
                <strong>Real-time Signal Generation for Day Trading:</strong> Processing live market data, news feeds, and executing complex logic with minimal latency to provide timely day trading signals.
                <span class="solution">
                    <strong>Solution:</strong> Optimized data processing pipelines and algorithmic calculations. Leveraged efficient libraries and focused on computationally feasible models for the real-time components.
                </span>
            </div>
        </li>
    </ul>
    <h2 class="section-heading">Lessons Learned</h2>
    <ul>
        <li>
            Gained deep insights into applying state-of-the-art Transformer models and multi-task learning to complex financial forecasting.
        </li>
        <li>
            Developed practical experience in integrating qualitative data like news sentiment with quantitative trading strategies.
        </li>
        <li>
            The critical role of adaptable methodologies and rigorous validation (backtesting, out-of-sample testing) in creating trading systems that can generalize to new stocks and market conditions.
        </li>
        <li>
            Furthered understanding of market microstructure, including the identification and potential impact of "Big Player" activities.
        </li>
    </ul>
</div>