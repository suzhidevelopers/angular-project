const link = document.createElement('a');
link.setAttribute('href', window.location.href);
const protocol = link.protocol,
	hostname = link.hostname,
	port = link.port,
	azureRedirectUri = port
		? `${protocol}//${hostname}:${port}`
		: `${protocol}//${hostname}`;

let azureConfig = {
	"response_type": "code",
	"scope": "openid",
	"response_mode": "query",
	"redirect_uri": encodeURIComponent(`${azureRedirectUri}/elasticetl/OAuth`),
	"client_id": "ecc74295-8192-49cd-ac44-4d7d741fca35",
	"resource": "https%3a%2f%2fgraph.windows.net",
	"nonce": "123456789",
	"site_id": "500879",
	"clusterRedirectUri": encodeURIComponent(`${azureRedirectUri}/elasticetl/resourceAuth.html`)
}


export const config = {
	AZURE_URL: `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?response_type=code&scope=openid+user.read+https://management.azure.com/user_impersonation&response_mode=query&redirect_uri=${azureConfig.redirect_uri}&client_id=ecc74295-8192-49cd-ac44-4d7d741fca35&state=12345`,
	AZURE_CLUSTER_URL: `https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?response_type=code&scope=openid+user.read+https://management.azure.com/user_impersonation&response_mode=query&redirect_uri=${azureConfig.clusterRedirectUri}&client_id=ecc74295-8192-49cd-ac44-4d7d741fca35&state=12345`,
	BASE_URL: "/elasticetl/api/v1/",
	AWS_LOGIN_BASE_URI: "/elasticetl/",
	AWS_REDIRECT_URL: "/elasticetl/awssignin.html",
	GCP_LOGIN_BASE_URI: "/elasticetl/",
	GCP_REDIRECT_URL: "/elasticetl/gcpsignin.html"
	// BASE_URL: "http://localhost:8080/elasticetl/api/v1/", 
	// AWS_LOGIN_BASE_URI: "http://localhost:8080/elasticetl/", 
	// AWS_REDIRECT_URL: "http://localhost:8080/elasticetl/awssignin.html", 
	// GCP_LOGIN_BASE_URI:"http://localhost:8080/elasticetl/", 
	// GCP_REDIRECT_URL:"http://localhost:8080/elasticetl/gcpsignin.html"
}

