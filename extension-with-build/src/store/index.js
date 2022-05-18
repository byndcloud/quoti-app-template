import modules from "@/store/modules";

export default function () {
  for (const [moduleName, module] of Object.entries(modules)) {
    const hasModule = this.$store.hasModule(moduleName, module);
    if (!hasModule || module.override) {
      if (hasModule) {
        this.$store.unregisterModule(moduleName);
      }
      this.$store.registerModule(moduleName, module);
    }
  }
}
