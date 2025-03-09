function runDork(type) {
    const target = document.getElementById("target-domain").value.trim();
    if (!target) {
        alert("Please enter a target domain!");
        return;
    }

    let dorkQuery = "";
    switch (type) {
        case "site":
            dorkQuery = `site:${target} intitle:index.of`;
            break;
        case "config":
            dorkQuery = `site:${target} ext:config | ext:ini | ext:env`;
            break;
        case "db":
            dorkQuery = `site:${target} ext:sql | ext:db | ext:dbf`;
            break;
        case "logs":
            dorkQuery = `site:${target} ext:log | error.log`;
            break;
        case "backup":
            dorkQuery = `site:${target} ext:bak | ext:backup`;
            break;
        case "sql":
            dorkQuery = `site:${target} "sql syntax error" | "mysql fetch array"`;
            break;
        case "login":
            dorkQuery = `site:${target} inurl:login`;
            break;
        default:
            alert("Invalid Dork Query");
            return;
    }

    // Open Google Search with the dork query
    window.open(`https://www.google.com/search?q=${encodeURIComponent(dorkQuery)}`, "_blank");
}
