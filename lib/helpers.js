const loadScript = src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = resolve
    script.onerror = reject
    script.src = src
    document.head.append(script)
  })
}

const getAvailableVersions = async () => {
  try {
    const response = await fetch('../api/v1/available_versions.json');
    return response.json();
  } catch (error) {
    console.error('Something went wrong while fetching available versions: ' + error)
  }
}

const getVersionPath = async (version) => {
  const versions = await getAvailableVersions();
  const path = versions["versions"][version];
  if (!path) {
    throw Error(`Version '${version}' does not exist in available_versions`)
  }
  return path;
}

const getLatestVersionNumber = async () => {
  const versions = await getAvailableVersions();
  return versions["default_version"];
}
const getLatestVersionPath = async () => {
  const versions = await getAvailableVersions();
  return versions["versions"][versions["default_version"]];
}