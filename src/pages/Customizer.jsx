import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components/CustomButton';
import Tab from '../components/Tab';
import { EditorTabs } from '../config/constants';
import { ElementsTab, LayersTab, QuantityTab, ShapesTab, SizesTab, TasteTab, TextureTab } from '../components/tabs';

const Customizer = () => {
    const snap = useSnapshot(state);

    const [activeEditorTab, setActiveEditorTab] = useState(null);

    const toggleTab = (tabName) => {
        if (activeEditorTab === tabName) {
            setActiveEditorTab(null);
        } else {
            setActiveEditorTab(tabName);
        }
    };

    const generateTabContent = () => {
        if (activeEditorTab) {
            switch (activeEditorTab) {
                case "Shapes":
                    return <ShapesTab />;
                case "Layers":
                    return <LayersTab />;
                case "Quantity":
                    return <QuantityTab />;
                case "Sizes":
                    return <SizesTab />;
                case "Taste":
                    return <TasteTab />;
                case "Texture":
                    return <TextureTab />;
                case "Elements":
                    return <ElementsTab />;
                default:
                    return null;
            }
        }
    };

    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div
                        key="custom"
                        className="absolute top-0 left-0 z-10"
                        {...slideAnimation('left')}
                    >
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container relative tabs">
                                {EditorTabs.map((tab) => (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        handleClick={() => toggleTab(tab.name)}
                                    />
                                ))}

                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 left-5"
                        {...fadeAnimation}
                    >
                        <CustomButton
                            type="filled"
                            title="Go Back"
                            handleClick={() => state.intro = true}
                            customStyles="w-fit px-6 py-5 text-sm rounded-full"
                        />
                    </motion.div>

                </>
            )}
        </AnimatePresence>
    )
}

export default Customizer;
