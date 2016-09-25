declare module BABYLON.EDITOR {
    interface IObjectConfiguration {
        mesh: AbstractMesh;
        actionManager: ActionManager;
    }
    interface ISceneConfiguration {
        scene: Scene;
        actionManager: ActionManager;
    }
    class SceneManager {
        /**
        * Objects configuration
        */
        static _ConfiguredObjectsIDs: IStringDictionary<IObjectConfiguration>;
        static _SceneConfiguration: ISceneConfiguration;
        static ResetConfiguredObjects(): void;
        static SwitchActionManager(): void;
        static ConfigureObject(object: AbstractMesh | Scene, core: EditorCore, parentNode?: Node): void;
        /**
        * States saver
        */
        private static _ObjectsStatesConfiguration;
        static SaveObjectStates(scene: Scene): void;
        static RestoreObjectsStates(scene: Scene): void;
    }
}