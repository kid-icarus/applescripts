const currentlyFocusedApp = Application('System Events')
  .applicationProcesses
  .whose({ frontmost: true });

while (true) {
  delay(1);
  const appName = currentlyFocusedApp.name().toString();
  console.log(appName);
}
