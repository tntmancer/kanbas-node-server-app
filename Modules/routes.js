import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findModulesByCourse = async (req, res) => {
    const modules = await dao.findModulesByCourse(req.params.courseId);
    res.json(modules);
  };
  const createModule = async (req, res) => {
    const newModule = {
      ...req.body,
      course: req.params.courseId,
    };
    // Need _id?
    const module = await dao.createModule(newModule);
    res.json(module);
  };
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  const updateModule = async (req, res) => {
    const status = await dao.updateModule(req.params.moduleId, req.body);
    res.json(status);
  };

  app.get("/api/courses/:courseId/modules", findModulesByCourse);
  app.post("/api/courses/:courseId/modules", createModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
}