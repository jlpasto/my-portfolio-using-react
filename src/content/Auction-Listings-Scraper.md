# BStock Auction Scraper
- A robust Python script for scraping B-Stock auction listings using a proxy for secure and anonymous access.


## Installation

The required packages will be automatically installed when running the script through `run_bstock_scraper.bat`.

## Configuration

The script can be configured through `config.json`:

```json
{
    "credentials": {
        "email": "your_email",
        "password": "your_password"
    },
    "browser": {
        "user_data_dir": "bstock1",
        "start_with_proxy": false,     // Start scraping with proxy enabled
        "max_normal_retries": 2        // Number of retries without proxy before switching
    },
    "scraping": {
        "max_tabs": 3,                // Maximum number of concurrent tabs
        "max_refresh_retries": 3,      // Page load retry attempts
        "scroll_speed": "medium",      // slow/medium/fast
        "page_load_timeout": 10,       // Seconds
        "delay_between_sellers": 3,    // Seconds
        "save_interval": 10           // Save progress every N items
    }
}
```

1. **Proxy Setup (Optional)**
   - Create `proxy_config.json` in the root directory:
   ```json
   {
       "username": "your_proxy_username",
       "password": "your_proxy_password",
       "host": "proxy_host",
       "port": "proxy_port"
   }
   ```


## Usage

Run the script:
```bash
python main.py
```
or

Run run_bstock_scraper.bat


The script will:
1. Log in to BStock.com
2. Fetch all available listings
3. Extract detailed information for each listing
4. Save data at various stages with timestamps

## Features

- **Human-like Browsing**: Implements realistic scrolling and timing patterns
- **Smart Proxy Handling**:
  - Configurable proxy start mode
  - Automatic retry mechanism (tries without proxy first)
  - Customizable retry attempts before switching to proxy
- **Data Management**:
  - Automatic sorting by seller name
  - Regular progress saves
  - Checkpoint saves after each seller
  - Pause/Resume functionality
- **Interactive Controls**:
  - Pause/Resume with Ctrl+C
  - Clean termination with browser cleanup
- **Error Recovery**:
  - Automatic retry on page load failures
  - Proxy fallback for blocked requests
  - Progress preservation on errors

## Output Structure

```
output/
├── logs/
│   └── bstock_YYYYMMDD_HHMMSS.log
├── initial/
│   └── initial_listing_YYYYMMDD_HHMMSS.csv
├── progress/
│   └── listing_progress.csv
└── final/
    └── listing_final_YYYYMMDD_HHMMSS.csv
```

### Output Files
- **Initial Listing**: Basic data snapshot when scraping starts
- **Progress File**: Single file that gets updated throughout processing
  - Falls back to timestamped version if main file is locked (e.g., open in Excel)
  - Gets removed when final file is created
- **Final Listing**: Complete dataset with all details
- **Logs**: Detailed operation logs with timestamps


## Troubleshooting

1. **Captcha Issues**
   - The script automatically switches to proxy mode when captcha is detected
   - Ensure valid proxy configuration in proxy_config.json

2. **Chrome Issues**
   - Clear or change Chrome user data directory: `bstock1`
   - Ensure Chrome browser is updated
   - Ensure Previous Chrome Session not Running
3. **Network Issues**
   - Check internet connection
   - Verify proxy settings if using proxy
   - Increase timeout values if needed

## Dependencies

- Python 3.7+
- seleniumbase
- pandas
- selenium
- curl_cffi
- beautifulsoup4
- Chrome browser

## Error Handling

The script includes:
- Automatic retry mechanisms
- Proxy fallback
- Detailed error logging
- Progress saving on interruption

## Script Control

- **Pause/Resume**:
  1. Press Ctrl+C during execution
  2. Choose 'p' to pause or 't' to terminate
  3. If paused, press Ctrl+C again to:
     - Choose 'r' to resume
     - Choose 't' to terminate
  
- **Clean Termination**:
  1. Press Ctrl+C
  2. Choose 't'
  3. Script will:
     - Save current progress
     - Close browser properly
     - Exit cleanly

## File Management

- Progress is saved to a single file (`listing_progress.csv`)
- If progress file is locked (e.g., open in Excel), creates timestamped version
- Progress files are automatically removed when final file is created
- All files are sorted by seller name before saving


