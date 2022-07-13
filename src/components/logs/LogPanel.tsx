import * as React from 'react';
import { css } from '@emotion/react';
import Viewer from './Viewer';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { filterLog, parseLog, setAllFilters } from './module';
import { Log, MatchedLogLine } from './Log';
import NoLog from '../NoLog';
import LoadingSpinner from '../LoadingSpinner';
import LogHeader from './LogHeader';


const styles = {
  logPanel:    css`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    justify-self: stretch;
    height: 100%;
    overflow: hidden;
  `,
  hiddenInput: css`
    visibility: hidden;
  `,
  logLoader:   (logLoaded: boolean) => css`
    color: #ffffff;
    flex-grow: 1;
    text-shadow: -5px 5px 5px rgba(32, 32, 32, 1);
    width: 100%;
    display: ${logLoaded ? 'none' : 'block'};
  `,
  logInfo:     css`
    padding: 1rem;
  `,
};


/**
 * LogPanel: a component that manages the log file and filters and sends them to the log display and filter UI. Also
 * handles the loading and parsing UI.
 */
const LogPanel: React.FC = () => {
  const [isParsing, setIsParsing] = useState(false);
  const [filters, setFilters]     = useState<string[]>(setAllFilters());
  const [log, setLogFile]         = useState<Log | undefined>(undefined);

  const onDropCallback = (files: File[]) => {
    setIsParsing(true);
    parseLog((parsedLog: MatchedLogLine[]) => {
      setLogFile({ filename: files[0].name, contents: parsedLog });
      setIsParsing(false);
    })(files);
  };

  // Drag and Drop things
  const onDrop                                              = useCallback(onDropCallback, []);
  const dropzoneOptions                                     = { accept: { 'text/plain': ['.log'] }, onDrop };
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone(dropzoneOptions);

  return (
    <div css={styles.logPanel}>
      {isParsing && <LoadingSpinner message='Parsing the log. Please wait...' />}
      {!isParsing && (
        <>
          <div css={styles.logLoader(!!log)} {...getRootProps()}>
            <input css={styles.hiddenInput} {...getInputProps()} />
            {!log && <NoLog hasLog={!!log} isDragActive={isDragActive} />}
          </div>
          {log && (
            <>
              {!isDragActive && <LogHeader log={log} filters={filters} setFilters={setFilters} openFileDialog={open} />}
              <Viewer log={filterLog(log.contents, filters)} showTimeStamp={filters.includes('time')} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LogPanel;
