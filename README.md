
# Short Description

Here is my autotest for [Pecode's Login page](https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php). I want to say that I tried to combine `wdio-mochawesome-reporter` with `wdio-video-reporter`, and looks like this stuff isn't compatible, cause I couldn't exclude unnecessary screenshots from the final report (there is a lack of required methods/options). I decided to provide a version without video files. Now, its clear for me, why everyone uses `Allure` + `WDIO`. I have a long story about this journey, so I'll be glad to share it with you during the interview :)

## Requirements
`Google Chrome v104.0.0.0` must be installed on your system cause its required for running.


### Installation

Install these packages in the following order to avoid errors

```bash
  1. git clone https://github.com/CrystalRaze/PecodeTestTask.git
  2. npm install -g mochawesome-report-generator@3.1.5
  3. npm install
```
P.S. If you faced issues on the first step, check the global `node_modules` directory which is located here - `C:\Users\Username\AppData\Roaming\npm\node_modules`. Remove your current `mochawesome-report-generator`

## Running Tests

1. To run tests, run the following command:

```bash
  npm run test:LoginPage
```

2. To generate test-report, run the following command:

```bash
  generate:TestReport
```

### Conclusion
`WebDriver.io v7.23.0` is compatible with the following packages:

| Package                             | Version  | Description                                  |
| :---------------------------------- | :------- | :--------------------------------------------|
| `wdio-mochawesome-reporter`         | `^4.0.0` | **WDIO** can use only modified `mochawesome` |
| `mochawesome-report-generator`      | `^3.1.5` | **WDIO** doesn't support higher version      |

